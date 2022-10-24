const secondhand = document.querySelector('.second-hand');
const minhand = document.querySelector('.min-hour');
const hourhand =  document.querySelector('.hour-hand');

function setdate(){
    const now = new Date();
    const second = now.getSeconds();
    const secondsdegree = ((second/60)*360)+90;
    secondhand.style.transform = 'rotate(${secondsdegree}deg)';

    const min = now.getMinutes();
    const mindegree = ((min/60)*360)+90;
    minhand.style.transform = 'rotate(${mindegree}deg)';

    const hour = now.getMinutes();
    const hourdegree = ((min/12)*360)+90;
    hourhand.style.transform = 'rotate(${hourdegree}deg)';
}
setInterval(setdate,1000);