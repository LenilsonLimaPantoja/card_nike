var btnColor1 = document.getElementById('btnColor1');
var btnColor2 = document.getElementById('btnColor2');
var btnColor3 = document.getElementById('btnColor3');
var btnColor4 = document.getElementById('btnColor4');
var btnColor5 = document.getElementById('btnColor5');
var add_to_car = document.getElementById('add-to-car');
var new_topo = document.querySelector('new-topo');
var new_topo = document.getElementById('new-topo');
var img = document.getElementById('img');
var left = document.querySelector('.left');
var color = '#186ff8';

const handleColor = (opcao) => {
    var selectedBtnSize = document.querySelector('.selectedBtnSize');
    btnColor1.classList.remove('selected')
    btnColor2.classList.remove('selected')
    btnColor3.classList.remove('selected')
    btnColor4.classList.remove('selected')
    btnColor5.classList.remove('selected')
    if (opcao === 1) {
        btnColor1.classList.add('selected');
        color = '#186ff8';
        img.src = 'blue.png'
    }
    if (opcao === 2) {
        btnColor2.classList.add('selected')
        color = '#f6493d'
        img.src = 'red.png'
    }
    if (opcao === 3) {
        btnColor3.classList.add('selected')
        color = '#49a877'
        img.src = 'green.png'
    }
    if (opcao === 4) {
        btnColor4.classList.add('selected')
        color = '#f55924'
        img.src = 'orange.png'
    }
    if (opcao === 5) {
        btnColor5.classList.add('selected')
        color = '#444444'
        img.src = 'black.png'
    }
    add_to_car.style.background = color;
    selectedBtnSize.style.background = color;
    new_topo.style.background = color;
    left.style.background = color;
}


var btnSize7 = document.getElementById('btnSize7');
var btnSize8 = document.getElementById('btnSize8');
var btnSize9 = document.getElementById('btnSize9');
var btnSize10 = document.getElementById('btnSize10');
var btnSize11 = document.getElementById('btnSize11');

const handleSize = (opcao) => {
    btnSize7.classList.remove('selectedBtnSize');
    btnSize8.classList.remove('selectedBtnSize');
    btnSize9.classList.remove('selectedBtnSize');
    btnSize10.classList.remove('selectedBtnSize');
    btnSize11.classList.remove('selectedBtnSize');
    btnSize7.style.background = '#e7e7e7';
    btnSize8.style.background = '#e7e7e7';
    btnSize9.style.background = '#e7e7e7';
    btnSize10.style.background = '#e7e7e7';
    btnSize11.style.background = '#e7e7e7';

    if (opcao === 7) {
        btnSize7.classList.add('selectedBtnSize')
    }
    if (opcao === 8) {
        btnSize8.classList.add('selectedBtnSize')
    }
    if (opcao === 9) {
        btnSize9.classList.add('selectedBtnSize')
    }
    if (opcao === 10) {
        btnSize10.classList.add('selectedBtnSize')
    }
    if (opcao === 11) {
        btnSize11.classList.add('selectedBtnSize')
    }
    var selectedBtnSize2 = document.querySelector('.selectedBtnSize');
    selectedBtnSize2.style.background = color;
}
