let currentInput = document.querySelector('.currentInput');
let answerScreen = document.querySelector('.answerScreen');
let buttons = document.querySelectorAll('button');
let erasebtn = document.querySelector('#erase');
let clearbtn = document.querySelector('#clear');
let evaluate = document.querySelector('#evaluate');
let realTimeScreenValue = []

clearbtn.addEventListener("click", () => {
    realTimeScreenValue = [''];
    answerScreen.innerHTML = 0;
    currentInput.className = 'currentInput'
    answerScreen.className = 'answerScreen';
    answerScreen.style.color = " rgba(150, 150, 150, 0.87)";
})

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        // quando o botão é clicado ele não é apagado
        if (!btn.id.match('erase')) {
        // Para exibir o valor em btn 
            realTimeScreenValue.push(btn.value)
            console.log(realTimeScreenValue)
            currentInput.innerHTML = realTimeScreenValue.join('');

            
        // Para avaliar a resposta em tempo real
            if (btn.classList.contains('num_btn')) {
                if ((eval(realTimeScreenValue.join(''))).toString().length > 8) {
                    answerScreen.innerHTML = (eval(realTimeScreenValue.join(''))).toFixed(5);
                }
                
                else {
                    console.log((eval(realTimeScreenValue.join(''))).toString().length)
                    answerScreen.innerHTML = eval(realTimeScreenValue.join(''));
                }
            }
        }

        //Quando clicar no botão apagar
        if (btn.id.match('erase')) {
            realTimeScreenValue.pop();
            currentInput.innerHTML = realTimeScreenValue.join('');
            answerScreen.innerHTML = eval(realTimeScreenValue.join(''));
        }

        //Quando o botão clicado é o botão de =
        if (btn.id.match('evaluate')) {
            currentInput.className = 'answerScreen';
            answerScreen.className = 'currentInput';
            answerScreen.style.color = "white";
        }

        //Para evitar erro 'undefined' na tela
        if (typeof eval(realTimeScreenValue.join('')) == 'undefined') {
            answerScreen.innerHTML = 0
        }
    })
})