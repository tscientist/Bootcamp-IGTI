window.addEventListener('load', start);

function start () {
    console.log('login')
    SetColors();
    render();
}

let red = 0;
let green = 0;
let blue = 0;
let rgb =  [];

function SetColors() {

    let inputRed = document.querySelector('#red')
    let textRed = document.querySelector('#red-text')

    let inputGreen = document.querySelector('#green')
    let textGreen = document.querySelector('#green-text')

    let inputBlue = document.querySelector('#blue')
    let textBlue = document.querySelector('#blue-text')

    function setRed(value) {
        inputRed.value = value;
        textRed.value = value;
        red = value;
        render();
    }

    function setGreen(value) {
        inputGreen.value = value;
        textGreen.value = value;
        green = value;
        render();
    }

    function setBlue(value) {
        inputBlue.value = value;
        textBlue.value = value;
        blue = value;
        render();
    }
    inputRed.addEventListener('change', function() {
        setRed(event.target.value);
        event.preventDefault();
    })

    inputGreen.addEventListener('change', function(event) {
        setGreen(event.target.value);
        event.preventDefault();
    })

    inputBlue.addEventListener('change', function(event) {
        setBlue(event.target.value);
        event.preventDefault();
    })
}

function render() {
    clear();
    rgb.push(`${red},${green},${blue}`)

    let div = document.querySelector('.quadrado')
    div.style.backgroundColor=`rgb(${rgb})`;
}
function clear() {
    rgb = [];
}
