const formMain = document.getElementById('form-01');
formMain.addEventListener('submit', function(event) {
    console.log ('html access success');
    
// evita o comportamento padrão do evento submit
event.preventDefault(); 
    console.log ('prevent default action: success');
 
// pega o valor como string
let birthDay = document.getElementById('form-num01').value;

let valueTempBd = new Date(birthDay);
console.log(typeof valueTempBd);
console.log(valueTempBd);

let valueBirth = valueTempBd.getFullYear('pt-BR');
console.log(typeof valueBirth);
console.log(valueBirth);

let valueTemp = new Date();
let valueToday = valueTemp.getFullYear();
console.log(typeof valueToday);
console.log(valueToday);

let YearOld = valueToday - valueBirth;
console.log(typeof YearOld);
console.log(YearOld);

let msg;

if (YearOld < 18) {
    msg = ('É necessário ter mais de 18 anos para doar sangue.')
} else if (YearOld > 67) {
    msg = ('É necessário ter menos que 67 anos para doar sangue')
} else {
    msg = ('Você pode doar sangue')
}

/* console.log (getFullYear.valueBirth);
console.log(valueBirth);
console.log(typeof valueBirth);
 */

// calcula a área


// manda o valor para interface
document.getElementById('final-result').classList.remove('is-hidden');

document.getElementById('final-result').scrollIntoView({
    behavior: 'smooth', // Faz a rolagem ser suave
    block: 'start' // Alinha o elemento ao topo da janela de visualização
});

// manda o valor para interface
document.getElementById('div-area').innerHTML = (msg);
    console.log ('print result on html: success');

});