// animiran linija

let rightButton = document.querySelector('.right');
let leftButton = document.querySelector('.left');
let animationLine = document.querySelector('.animation-line');
let animationWidth = 0;

rightButton.addEventListener('click',()=>{
    if(animationWidth >= 100){
        animationWidth = 100;
    }else{
        animationWidth += 10;
    };
    animationLine.style.width = animationWidth + "%"
});


leftButton.addEventListener('click', ()=>{
    if(animationWidth >= 10){
        animationWidth -= 10;
    }else{
        animationWidth = 0 
    }

    animationLine.style.width = animationWidth + "%"
})

// animirani text 

let animatedText = document.querySelector('.animirani-text');
let text = animatedText.textContent;
let splittedText = text.split('');
animatedText.innerHTML = '';

for(let i = 0; i < splittedText.length; i++){
    animatedText.innerHTML += `<span>${splittedText[i]}</span>`;
};

let k = 0;
let interval = setInterval(()=>{
    let singleLetter = document.querySelectorAll('span');
    let singleSpan = singleLetter[k]

    singleSpan.classList = ('animiranaZona')

    k++;

    if(k == singleLetter.length){
        clearInterval(interval);
    };
}, 70)