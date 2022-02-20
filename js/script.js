let showCountSpin = () => {
  let autoBoxChboxChoise = document.querySelector('.auto_box_chbox_choise');
  
  autoBoxChboxChoise.classList.toggle('show_aotu_box_choise');
}

document.addEventListener('mouseup', function (e) {
  if(e.target != document.querySelector('.auto_box_btn_auto'))
  document.querySelector('.auto_box_chbox_choise').classList.remove('show_aotu_box_choise');
})

document.querySelector('.auto_box_btn_auto').onclick = showCountSpin;

let arrSpanCountSpin = document.querySelectorAll('.choise_count_spin');

for(let i = 0; i < arrSpanCountSpin.length; ++i) {
  arrSpanCountSpin[i].onclick = () => {
    let countSpins = document.querySelector('.auto_box_qun_spin'),
        stopSpins = document.querySelector('.auto_box_input'),
        hideBtnAuto = document.querySelector('.auto_box_btn_auto'),
        autoBoxChboxChoise = document.querySelector('.auto_box_chbox_choise');

    autoBoxChboxChoise.classList.remove('show_aotu_box_choise');
    stopSpins.classList.remove('hide');
    hideBtnAuto.classList.add('hide');

    switch(arrSpanCountSpin[i].innerHTML) {
      case '25 spins':
        countSpins.innerHTML = '25';
        break;
      case '20 spins':
        countSpins.innerHTML = '20';
        break;
      case '15 spins':
        countSpins.innerHTML = '15';
        break;
      case '10 spins':
        countSpins.innerHTML = '10';
        break;
      case '5 spins':
        countSpins.innerHTML = '5';
        break;
    }
  }
}

let hideShowBtnStopAuto = () => {
  document.querySelector('.auto_box_input').classList.add('hide');
  document.querySelector('.auto_box_btn_auto').classList.remove('hide');

}

document.querySelector('.auto_box_input').onclick = hideShowBtnStopAuto;

let activeSpin = () => {
  let spin = document.querySelector('.spin_box_btn');
  spin.classList.add('turn');
  setTimeout(showMovie, 1000);
}
let showMovie = () => {
  document.querySelector('.spin_box_btn').classList.remove('turn');
}


document.querySelector('.spin_box_btn').onclick = activeSpin;

let minusCoin = () => {
  let minusTotal = document.querySelector('.total_bet_count_coin'),
      plusCoin = document.querySelector('.coin_box_count'),
      variableSymb = minusTotal.innerHTML.slice(0, 1),
      variableNum = Number.parseFloat(minusTotal.innerHTML.slice(1));
  
  

       variable = 6;
  variableNum = ((variableNum - .1)).toFixed(2);

  (variableNum * 100) % 100 == 0 ? minusTotal.innerHTML = variableSymb + Math.ceil(variableNum) : minusTotal.innerHTML = variableSymb + variableNum;

  variableSymb = plusCoin.innerHTML.slice(0, 1),
  variableNum = Number.parseFloat(plusCoin.innerHTML.slice(1));

  variableNum = ((variableNum + .1)).toFixed(2);
  (variableNum * 100) % 100 == 0 ? plusCoin.innerHTML = variableSymb + Math.ceil(variableNum) : plusCoin.innerHTML = variableSymb + variableNum;
}

let plusCoin = () => {
  let plusTotal = document.querySelector('.total_bet_count_coin'),
      minusCoin = document.querySelector('.coin_box_count'),
      variableSymb = plusTotal.innerHTML.slice(0, 1),
      variableNum = Number.parseFloat(plusTotal.innerHTML.slice(1));
  
  
  variableNum = ((variableNum + .1)).toFixed(2);

  (variableNum * 100) % 100 == 0 ? plusTotal.innerHTML = variableSymb + Math.ceil(variableNum) : plusTotal.innerHTML = variableSymb + variableNum;

  variableSymb = minusCoin.innerHTML.slice(0, 1),
  variableNum = Number.parseFloat(minusCoin.innerHTML.slice(1));

  variableNum = ((variableNum - .1)).toFixed(2);
  (variableNum * 100) % 100 == 0 ? minusCoin.innerHTML = variableSymb + Math.ceil(variableNum) : minusCoin.innerHTML = variableSymb + variableNum;
}

document.querySelector('.totel_bet_minus_btn').onclick = minusCoin;
document.querySelector('.totel_bet_plus_btn').onclick = plusCoin;

let sound = document.querySelectorAll('.btn');

for( let i = 0; i < sound.length; ++i) {
  sound[i].addEventListener('click', function(){
    let myAudio = new Audio('../test_panel/sound/Button_Click.wav');
    myAudio.play();
  });
}