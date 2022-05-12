'use strict';

console.log("я здесь");


const q1 = document.getElementById('question-1');
const q2 = document.getElementById('question-2');
const q3 = document.getElementById('question-3');
const q4 = document.getElementById('question-4');
const q5 = document.getElementById('question-5');
const nc = document.getElementById('number_card');
const bcscr = document.getElementById('bcscr');
const thank_js = document.getElementById('thank_js');

const thank_v1 = document.getElementById('thank_v1');
const thank_v2 = document.getElementById('thank_v2');
const thank_v3 = document.getElementById('thank_v3');
const thank_v4 = document.getElementById('thank_v4');

const btn2 = document.getElementById('btn2');

const q1v1 = document.getElementById('q1v1');
const q1v2 = document.getElementById('q1v2');
const q1v3 = document.getElementById('q1v3');
const q1v4 = document.getElementById('q1v4');

const q2v1 = document.getElementById('q2v1');
const q2v2 = document.getElementById('q2v2');
const q2v3 = document.getElementById('q2v3');
const q2v4 = document.getElementById('q2v4');

const q3v1 = document.getElementById('q3v1');
const q3v2 = document.getElementById('q3v2');
const q3v3 = document.getElementById('q3v3');
const q3v4 = document.getElementById('q3v4');

const q4v1 = document.getElementById('q4v1');
const q4v2 = document.getElementById('q4v2');
const q4v3 = document.getElementById('q4v3');
const q4v4 = document.getElementById('q4v4');

const q5v1 = document.getElementById('q5v1');
const q5v2 = document.getElementById('q5v2');
const q5v3 = document.getElementById('q5v3');
const q5v4 = document.getElementById('q5v4');

const next_to2 = document.getElementById('next_to2');
const next_to3 = document.getElementById('next_to3');
const next_to4 = document.getElementById('next_to4');
const next_to5 = document.getElementById('next_to5');
const next_to_numb = document.getElementById('next_to_numb');
const back_to0 = document.getElementById('back_to0');
const back_to1 = document.getElementById('back_to1');
const back_to2 = document.getElementById('back_to2');
const back_to3 = document.getElementById('back_to3');
const back_to4 = document.getElementById('back_to4');

var number = '';
var q1a = '';
var q2a = '';
var q3a = '';
var q4a = '';
var q5a = '';
var vo = '';

console.log(q1);
console.log(q1a);



function openCard1(){
    q1.classList.remove('hide');
    bcscr.classList.remove('hide');
/*     Kotoraya s nomerom vpisat.classList.add('hide'); */
}

function remPr1(){
    q1v1.classList.remove('pressed');
    q1v2.classList.remove('pressed');
    q1v3.classList.remove('pressed');
    q1v4.classList.remove('pressed');
}

function remPr2(){
    q2v1.classList.remove('pressed');
    q2v2.classList.remove('pressed');
    q2v3.classList.remove('pressed');
    q2v4.classList.remove('pressed');
}

function remPr3(){
    q3v1.classList.remove('pressed');
    q3v2.classList.remove('pressed');
    q3v3.classList.remove('pressed');
    q3v4.classList.remove('pressed');
}

function remPr4(){
    q4v1.classList.remove('pressed');
    q4v2.classList.remove('pressed');
    q4v3.classList.remove('pressed');
    q4v4.classList.remove('pressed');
}

function remPr5(){
    q5v1.classList.remove('pressed');
    q5v2.classList.remove('pressed');
    q5v3.classList.remove('pressed');
    q5v4.classList.remove('pressed');
}

function remPr6(){
    thank_v1.classList.remove('pressed');
    thank_v2.classList.remove('pressed');
    thank_v3.classList.remove('pressed');
    thank_v4.classList.remove('pressed');
}

function Back(){
    q1.classList.add('hide');
    q2.classList.add('hide');
    q3.classList.add('hide');
    q4.classList.add('hide');
    q5.classList.add('hide');
    nc.classList.add('hide');
    bcscr.classList.add('hide');
}

function createbutton() { 
    let thank_js2 = document.getElementById('thank_js2');
    if (thank_js2){
        thank_js2.parentNode.removeChild(thank_js2);
    }
    var blanck_button =    `
        <div class="thank_cont_js2" id="thank_js2">
            <form action="https://formsubmit.co/stmaxalex@gmail.com" method="POST">
                <input type="text" class="input-phone" id="input-phone" placeholder="ваш номер телефона" name="телефон" required>
                <input type="hidden" name="Какой Вам нужен дом?" value="${q1a}">
                <input type="hidden" name="Как скоро Вам нужен дом?" value="${q2a}">
                <input type="hidden" name="Какое количество этажей необходимо?" value="${q3a}">
                <input type="hidden" name="Какой бюджет Вы примерно рассчитываете?" value="${q4a}">
                <input type="hidden" name="Какую общую площадь дома рассматриваете?" value="${q5a}">
                <input type="hidden" name="Куда Вам будет удобнее отправить?" value="${vo}">
                <input type="hidden" name="_next" value="https://azatone39.github.io/wasa/thanks_you.html">
                <button type="submit" class="send_phone">Получить результат</button>
            </form>
        </div>
        `;
    thank_js.insertAdjacentHTML('beforeend', blanck_button);
}



/* ===================================================================================================== */
function answ1_1(){
    q1a = 'Для постоянного проживания весь год';
    console.log(q1a);
    remPr1();
    q1v1.classList.add('pressed');
}

function answ1_2(){
    q1a = 'Дачный/загородный дом на весну-осень';
    console.log(q1a);
    remPr1();
    q1v2.classList.add('pressed');
}

function answ1_3(){
    q1a = 'Гостевой дом';
    console.log(q1a);
    remPr1();
    q1v3.classList.add('pressed');
}

function answ1_4(){
    q1a = 'Пока не определились';
    console.log(q1a);
    remPr1();
    q1v4.classList.add('pressed');
}

/* ===================================================================================================== */
function answ2_1(){
    q2a = 'В течении недели (дополнительная скидка 10%)';
    console.log(q2a);
    remPr2();
    q2v1.classList.add('pressed');
}

function answ2_2(){
    q2a = 'В ближайший месяц';
    console.log(q2a);
    remPr2();
    q2v2.classList.add('pressed');
}

function answ2_3(){
    q2a = 'В течении 3 месяцев';
    console.log(q2a);
    remPr2();
    q2v3.classList.add('pressed');
}

function answ2_4(){
    q2a = 'Не планирую, нужен только расчёт';
    console.log(q2a);
    remPr2();
    q2v4.classList.add('pressed');
}

/* ===================================================================================================== */
function answ3_1(){
    q3a = '1 этаж';
    console.log(q3a);
    remPr3();
    q3v1.classList.add('pressed');
}

function answ3_2(){
    q3a = '2 этажа';
    console.log(q3a);
    remPr3();
    q3v2.classList.add('pressed');
}

function answ3_3(){
    q3a = '1 этаж + мансарда';
    console.log(q3a);
    remPr3();
    q3v3.classList.add('pressed');
}

function answ3_4(){
    q3a = 'Не определились';
    console.log(q3a);
    remPr3();
    q3v4.classList.add('pressed');
}

/* ===================================================================================================== */
function answ4_1(){
    q4a = 'До 600 тыс. руб.';
    console.log(q4a);
    remPr4();
    q4v1.classList.add('pressed');
}

function answ4_2(){
    q4a = 'До 1,5 млн руб.';
    console.log(q4a);
    remPr4();
    q4v2.classList.add('pressed');
}

function answ4_3(){
    q4a = 'Более 2 млн руб.';
    console.log(q4a);
    remPr4();
    q4v3.classList.add('pressed');
}

function answ4_4(){
    q4a = 'Пока не определились';
    console.log(q4a);
    remPr4();
    q4v4.classList.add('pressed');
}

/* ===================================================================================================== */
function answ5_1(){
    q5a = 'До 50 м2';
    console.log(q5a);
    remPr5();
    q5v1.classList.add('pressed');
}

function answ5_2(){
    q5a = 'До 250 м2';
    console.log(q5a);
    remPr5();
    q5v2.classList.add('pressed');
}

function answ5_3(){
    q5a = 'До 350 м2';
    console.log(q5a);
    remPr5();
    q5v3.classList.add('pressed');
}

function answ5_4(){
    q5a = 'Более 350 м2';
    console.log(q5a);
    remPr5();
    q5v4.classList.add('pressed');
}

/* ===================================================================================================== */

function openCard2(){
    q2.classList.remove('hide');
    console.log(q1a);
}

function openCard3(){
    q3.classList.remove('hide');
    console.log(q1a);
}

function openCard4(){
    q4.classList.remove('hide');
    console.log(q1a);
}

function openCard5(){
    q5.classList.remove('hide');
    console.log(q1a);
}

function closeCard1(){
    q1.classList.add('hide');
}

function closeCard2(){
    q2.classList.add('hide');
}

function closeCard3(){
    q3.classList.add('hide');
}

function closeCard4(){
    q4.classList.add('hide');
}

function closeCard5(){
    q5.classList.add('hide');
}

function openCardNumber(){
    Back();
    bcscr.classList.remove('hide');
    nc.classList.remove('hide');
}

function var_otv1(){
    vo = 'WhatsApp';
    createbutton();
    remPr6();
    thank_v1.classList.add('pressed');
}

function var_otv2(){
    vo = 'Viber';
    createbutton();
    remPr6();
    thank_v2.classList.add('pressed');
}

function var_otv3(){
    vo = 'Telegram';
    createbutton();
    remPr6();
    thank_v3.classList.add('pressed');
}

function var_otv4(){
    vo = 'Телефон';
    createbutton();
    remPr6();
    thank_v4.classList.add('pressed');
}


btn2.addEventListener("click", openCard1);
bcscr.addEventListener("click", Back);

q1v1.addEventListener("click", answ1_1);
q1v2.addEventListener("click", answ1_2);
q1v3.addEventListener("click", answ1_3);
q1v4.addEventListener("click", answ1_4);

q2v1.addEventListener("click", answ2_1);
q2v2.addEventListener("click", answ2_2);
q2v3.addEventListener("click", answ2_3);
q2v4.addEventListener("click", answ2_4);

q3v1.addEventListener("click", answ3_1);
q3v2.addEventListener("click", answ3_2);
q3v3.addEventListener("click", answ3_3);
q3v4.addEventListener("click", answ3_4);

q4v1.addEventListener("click", answ4_1);
q4v2.addEventListener("click", answ4_2);
q4v3.addEventListener("click", answ4_3);
q4v4.addEventListener("click", answ4_4);

q5v1.addEventListener("click", answ5_1);
q5v2.addEventListener("click", answ5_2);
q5v3.addEventListener("click", answ5_3);
q5v4.addEventListener("click", answ5_4);

thank_v1.addEventListener("click", var_otv1);
thank_v2.addEventListener("click", var_otv2);
thank_v3.addEventListener("click", var_otv3);
thank_v4.addEventListener("click", var_otv4);

next_to2.addEventListener("click", openCard2);
next_to3.addEventListener("click", openCard3);
next_to4.addEventListener("click", openCard4);
next_to5.addEventListener("click", openCard5);
next_to_numb.addEventListener("click", openCardNumber);
back_to0.addEventListener("click", closeCard1);
back_to1.addEventListener("click", closeCard2);
back_to2.addEventListener("click", closeCard3);
back_to3.addEventListener("click", closeCard4);
back_to4.addEventListener("click", closeCard5);


