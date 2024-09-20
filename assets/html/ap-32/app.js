const formMain = document.getElementById('form-01');
formMain.addEventListener('submit', function(event) {
    console.log ('html access success');
    
// evita o comportamento padrão do evento submit
event.preventDefault(); 
    console.log ('prevent default action: success');
    
// pega o valor como string
let num01 = document.getElementById('form-num01').value;
let num02 = document.getElementById('form-num02').value;
let num03 = document.getElementById('form-num03').value;
    console.log ('convert to string: success');

// Troca virgula por ponto se necessário
let num01Coma = num01.replace(/,/g, ".");
let num02Coma = num02.replace(/,/g, ".");
let num03Coma = num03.replace(/,/g, ".");
    console.log ('coma > period ajust: success');

// transforma em número
let num01adj = Number(num01Coma);
let num02adj = Number(num02Coma);
let num03adj = Number(num03Coma);
    console.log ('normalize number: success');
    console.log ('');

// calcula a área
let numAr = [num01adj, num02adj, num03adj];
let numEnv = numAr;
console.log ('Original Array: ' + numEnv);
console.log ('' );

let controlTime = ((numEnv.length) * (numEnv.length - 1)); // formula para descobrir quantas trocas terão de ser realizadas 
console.log ('Control Time: ' + controlTime);
console.log ('' );

for (let i = 0; i < numEnv.length+1; i++) {
    let modulo01 = ((i % numEnv.length)); //Calcula o módulo de i e converte para o indice correspondente na array
    let modulo02 = (modulo01 >= numEnv.length-1) ? 0 : (modulo01+1);
    
    //let comp01 = (modulo01 >= numEnv.length) ? numEnv[modulo01] : numEnv[modulo01];
    let comp01 = numEnv[modulo01];
    let comp02 = numEnv[modulo02];
    console.log (i + 'st interaction');
    console.log ('index: '+ modulo01 + ' | ' + modulo02);
    console.log ('value: '+ comp01 + ' | ' + comp02);
    
    if ( (comp01 <= comp02) || (modulo02 < modulo01)) {
        numEnv[modulo01] = comp01;
        numEnv[modulo02] = comp02;
        
    } else {
        numEnv[modulo01] = comp02;
        numEnv[modulo02] = comp01;
        
    }
    console.log ('Array: ' + numEnv);
    console.log ('');
    
}
// manda o valor para interface
document.getElementById('final-result').classList.remove('is-hidden');

document.getElementById('final-result').scrollIntoView({
    behavior: 'smooth', // Faz a rolagem ser suave
    block: 'start' // Alinha o elemento ao topo da janela de visualização
});

// manda o valor para interface
document.getElementById('p-result-01').innerHTML = (numEnv[0]);
document.getElementById('p-result-02').innerHTML = (numEnv[2]);
    console.log ('print result on html: success');

})