const imgContainer = document.querySelector('.img-container');
const btn = document.querySelector('.btn');

btn.addEventListener('click', ()=>{
    randomImageGenerator();
    console.log("Im click");
    
})

function randomImageGenerator(){
    for(let i=0; i<6; i++){
     const imgElement = document.createElement('img');
     imgElement.setAttribute('src', `https://picsum.photos/300?random=${Math.random()*1000}`);
     imgContainer.appendChild(imgElement);
    }
}