

button = document.querySelector('button');
span = document.querySelector('span');
bgEl = document.querySelector('section');



button.addEventListener('click',() =>{
   color = '#';
   color += Math.random().toString(16).slice(2,8);
   bgEl.style.backgroundColor = color;
   span.innerText = color;
   console.log(color);
});