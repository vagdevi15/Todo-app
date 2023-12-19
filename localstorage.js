localStorage.setItem('hero', 'thor')
localStorage.setItem('todo', 'Buy Cooldrink');
var myHero = localStorage.getItem('hero');
console.log(myHero);

console.log(localStorage.getItem('todo'));

localStorage.setItem('todo', 'Record Videos');
console.log(localStorage.getItem('todo'));


// localStorage.removeItem('hero');
localStorage.clear()


myHero = localStorage.getItem('hero');
console.log(myHero);
