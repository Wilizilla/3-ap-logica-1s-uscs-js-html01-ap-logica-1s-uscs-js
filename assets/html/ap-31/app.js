const formMain = document.getElementById('form-01');
formMain.addEventListener('submit', function(event) {
    console.log ('html access success');
    
// evita o comportamento padrão do evento submit
event.preventDefault(); 
    console.log ('prevent default action: success');
 
// pega o valor como string
let num01 = document.getElementById('form-num01').value;
let num02 = document.getElementById('form-num02').value;

// Troca virgula por ponto se necessário
let num01Coma = num01.replace(/,/g, ".");
let num02Coma = num02.replace(/,/g, ".");
    console.log ('coma > period ajust: success');

// transforma em número
let num01adj = Number(num01Coma);
let num02adj = Number(num02Coma);
    console.log ('normalize number: success');

// calcula a área
if (num01adj === num02adj) {

// manda o valor para interface
document.getElementById('final-result').classList.remove('is-hidden');

document.getElementById('final-result').scrollIntoView({
    behavior: 'smooth', // Faz a rolagem ser suave
    block: 'start' // Alinha o elemento ao topo da janela de visualização
});

// manda o valor para interface
document.getElementById('div-area').innerHTML = ('Os valores são iguais');
    console.log ('print result on html: success');
} 

else {
    // manda o valor para interface
document.getElementById('final-result').classList.remove('is-hidden');

document.getElementById('final-result').scrollIntoView({
    behavior: 'smooth', // Faz a rolagem ser suave
    block: 'start' // Alinha o elemento ao topo da janela de visualização
});

// manda o valor para interface
document.getElementById('div-area').innerHTML = ('Os valores são diferentes');
    console.log ('print result on html: success');
}

});