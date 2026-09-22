(() => {
  const {items, translations} = window.JapanifyFamilyDemo;
  const cards = document.getElementById('familyCards');
  const detail = document.getElementById('familyDetail');
  const game = document.getElementById('familyGame');
  const ns = 'http://www.w3.org/2000/svg';
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let selected = 0, activeCharacter = '', frame = 0;
  const locale = () => document.documentElement.lang.split('-')[0];
  const dictionary = () => translations[locale()] || translations.en;
  function element(tag, className, text) {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (text !== undefined) el.textContent = text;
    return el;
  }
  function svgElement(tag, attrs) {
    const el = document.createElementNS(ns, tag);
    Object.entries(attrs).forEach(([key,value]) => el.setAttribute(key,value));
    return el;
  }
  function stopAnimation() { cancelAnimationFrame(frame); frame = 0; }
  function showDetail(animate = false) {
    stopAnimation();
    const item = items[selected], copy = dictionary();
    const characters = [...new Set(Array.from(item.kanji.split('/').pop().trim()))];
    if (!characters.includes(activeCharacter)) {
      activeCharacter = characters.find(char => /[\u3400-\u9fff]/u.test(char)) || characters[0];
    }
    const data = window.JapanifyStrokeData[activeCharacter];
    detail.replaceChildren();
    const wrap = element('div','stroke-board-wrap');
    const board = svgElement('svg', {viewBox:'0 0 109 109',class:'stroke-board',role:'img','aria-label':`${copy.strokeOrder}: ${activeCharacter}`});
    board.append(svgElement('path',{d:'M54.5 0V109M0 54.5H109M0 0L109 109M109 0L0 109',class:'stroke-guide'}));
    const ink = [], numbers = [];
    if (data) {
      data.paths.forEach(d => board.append(svgElement('path',{d,class:'stroke-outline'})));
      data.paths.forEach(d => { const path=svgElement('path',{d,class:'stroke-ink'});board.append(path);ink.push(path); });
      data.numbers.forEach(number => {
        const label=svgElement('text',{transform:number.transform,class:'stroke-number'});
        label.textContent=number.text;board.append(label);numbers.push(label);
      });
    } else {
      const fallback=svgElement('text',{x:'54.5',y:'75','text-anchor':'middle','font-size':'70',fill:'#315947'});
      fallback.textContent=activeCharacter;board.append(fallback);
    }
    const controls=element('div','stroke-controls');
    function control(text,label,action) {
      const button=element('button','',text);button.type='button';button.title=label;button.setAttribute('aria-label',label);button.addEventListener('click',action);return button;
    }
    let progress=ink.length, lengths=[];
    const count=element('span','stroke-counter');count.setAttribute('aria-live','off');
    const previous=control('‹',copy.previousStroke,()=>{stopAnimation();paint(Math.max(0,Math.ceil(progress)-1));});
    const replay=control('▶',copy.playStrokes,()=>play());
    const next=control('›',copy.nextStroke,()=>{stopAnimation();paint(Math.min(ink.length,Math.floor(progress)+1));});
    controls.append(previous,replay,next,count);wrap.append(board,controls);
    const text=element('div','stroke-copy');text.append(element('h4','',copy.strokeOrder));
    const choices=element('div','stroke-characters');
    characters.forEach(char=>{
      const button=element('button','',char);button.type='button';button.lang='ja';button.setAttribute('aria-pressed',String(char===activeCharacter));
      button.addEventListener('click',()=>{activeCharacter=char;showDetail(true);detail.querySelectorAll('.stroke-characters button').forEach(b=>{if(b.textContent===char)b.focus({preventScroll:true});});});
      choices.append(button);
    });
    const reading=element('p','detail-reading',item.reading);reading.lang='ja';
    text.append(choices,reading,element('p','',item.romaji),element('p','',copy.meanings[selected]));
    const credit=element('p','stroke-credit');
    const source=element('a','','KanjiVG');source.href='https://kanjivg.tagaini.net/';source.target='_blank';source.rel='noopener';
    const license=element('a','','CC BY-SA 3.0');license.href='https://creativecommons.org/licenses/by-sa/3.0/';license.target='_blank';license.rel='noopener';
    credit.append(source,document.createTextNode(' · © Ulrich Apel · '),license);
    detail.append(wrap,text,credit);
    lengths=ink.map(path=>path.getTotalLength());
    ink.forEach((path,i)=>path.style.strokeDasharray=String(lengths[i]));
    function paint(value) {
      progress=value;
      ink.forEach((path,i)=>{path.style.strokeDashoffset=String(lengths[i]*(1-Math.min(1,Math.max(0,value-i))));});
      numbers.forEach((number,i)=>number.style.opacity=value>i?'1':'0');
      count.textContent=`${Math.min(ink.length,Math.ceil(value))}/${ink.length}`;
      previous.disabled=value<=0;next.disabled=value>=ink.length;replay.disabled=!ink.length;
    }
    function play() {
      stopAnimation();if (!ink.length) return;
      paint(0);let start;
      function tick(time) {
        if (start===undefined) start=time;
        const value=Math.min(ink.length,(time-start)/650);
        paint(reducedMotion.matches?Math.floor(value):value);
        if(value<ink.length) frame=requestAnimationFrame(tick);else frame=0;
      }
      frame=requestAnimationFrame(tick);
    }
    paint(ink.length);
    if(animate && !reducedMotion.matches) play();
    cards.querySelectorAll('button').forEach((button,i)=>button.setAttribute('aria-pressed',String(i===selected)));
  }
  function render() {
    const copy=dictionary();
    document.querySelectorAll('[data-family-text]').forEach(el=>el.textContent=copy[el.dataset.familyText]);
    cards.replaceChildren();
    items.forEach((item,i)=>{
      const button=element('button','family-card');button.type='button';
      const image=element('img');image.src=item.image;image.alt='';image.loading='lazy';image.width=120;image.height=100;
      const kanji=element('span','family-kanji',item.kanji);kanji.lang='ja';
      button.append(image,kanji,element('span','family-meaning',copy.meanings[i]));
      button.addEventListener('click',()=>{selected=i;activeCharacter='';showDetail(true);});cards.append(button);
    });
    showDetail();game.contentWindow?.JapanifyRamenSearch?.setLocale(locale());
  }
  game.addEventListener('load',()=>game.contentWindow?.JapanifyRamenSearch?.setLocale(locale()));
  window.addEventListener('japanify:language',render);
  window.addEventListener('pagehide',stopAnimation);
  render();
})();
