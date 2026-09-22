(() => {
  const {items, translations} = window.JapanifyFamilyDemo;
  const cards = document.getElementById('familyCards');
  const detail = document.getElementById('familyDetail');
  const game = document.getElementById('familyGame');
  let selected = 0;
  const locale = () => document.documentElement.lang.split('-')[0];
  const dictionary = () => translations[locale()] || translations.en;
  function showDetail() {
    const item = items[selected], copy = dictionary();
    detail.replaceChildren();
    const kanji = document.createElement('span');
    kanji.className = 'detail-kanji'; kanji.lang = 'ja'; kanji.textContent = item.kanji.split('/').pop().trim();
    const text = document.createElement('div');
    const label = document.createElement('small'); label.textContent = copy.reading;
    const reading = document.createElement('strong'); reading.lang = 'ja'; reading.textContent = item.reading;
    const line = document.createElement('p'); line.append(reading);
    const romaji = document.createElement('p'); romaji.textContent = item.romaji;
    text.append(label,line,romaji); detail.append(kanji,text);
    cards.querySelectorAll('button').forEach((button,i) => button.setAttribute('aria-pressed', String(i === selected)));
  }
  function render() {
    const copy = dictionary();
    document.querySelectorAll('[data-family-text]').forEach(el => el.textContent = copy[el.dataset.familyText]);
    cards.replaceChildren();
    items.forEach((item,i) => {
      const button = document.createElement('button');button.type='button';button.className='family-card';
      const image = document.createElement('img');image.src=item.image;image.alt='';image.loading='lazy';image.width=120;image.height=100;
      const kanji=document.createElement('span');kanji.className='family-kanji';kanji.lang='ja';kanji.textContent=item.kanji;
      const meaning=document.createElement('span');meaning.className='family-meaning';meaning.textContent=copy.meanings[i];
      button.append(image,kanji,meaning);button.addEventListener('click',()=>{selected=i;showDetail();});cards.append(button);
    });
    showDetail();
    game.contentWindow?.JapanifyRamenSearch?.setLocale(locale());
  }
  game.addEventListener('load',()=>game.contentWindow?.JapanifyRamenSearch?.setLocale(locale()));
  window.addEventListener('japanify:language',render);
  render();
})();
