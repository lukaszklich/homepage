const name = 'Łukasz';
const age = 34;
console.log(`Cześć, mam na imię ${name} i mam ${age} lat. ☕️`);
const about = document.querySelector('.about__paragraph--js');
console.log(about.innerHTML);
about.innerHTML = `Cześć, mam na imię ${name} i mam ${age} lata ☕️`;