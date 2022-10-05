const loadText=document.querySelector('.loading-text')
const bg=document.querySelector('.background')

let load=0

let int=setInterval(blurring, 20)

function blurring() {
    load++
    if(load>99) {
        clearInterval(int)
    }

    loadText.innerText=`${load}%`
    loadText.style.opacity=scale(load, 0, 100, 1, 0)
    bg.style.filter=`blur(${scale(load, 0, 100, 30, 0)}px)`
    console.log(load)
}
//this line is lowering the opacity of the loading percentage text depending on percentege of the text = > percentage goes from 0% to 100%, but the opacitu goes fropm 1 to 0
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}