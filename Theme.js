const botaoTema = document.getElementById('buttonTheme');
const imageTema = document.getElementById('imgTema');
const frameFundo = document.querySelector('.div2');
const titulo = document.querySelector('.titulo1');
const label1 = document.querySelector('.label1');
const label2 = document.querySelector('.label2');
const label3 = document.querySelector('.label3');
const valor1 = document.getElementById('valorDolar');
const valor2 = document.getElementById('maiorDolar');
const valor3 = document.getElementById('menorDolar');

let ativado = false;

function changeTheme() {
    if (ativado) {
        console.log("Light");

        botaoTema.style.backgroundColor = "rgb(255, 255, 255)";
        imageTema.src = 'img/DarkIcon.png';

        document.body.style.backgroundColor = " rgb(255, 255, 255)";
        frameFundo.style.backgroundColor = "rgb(255, 255, 255)";
        frameFundo.style.boxShadow = "0px 0px 16px rgba(0, 0, 0, 0.247)";

        titulo.style.color = "rgb(25, 25, 25)";

        label1.style.color = "rgb(25, 25, 25)";
        label2.style.color = "rgb(25, 25, 25)";
        label3.style.color = "rgb(25, 25, 25)";

        valor1.style.color = "rgb(25, 25, 25)";
        valor1.style.backgroundColor = "rgb(255, 255, 255)";
        valor1.style.border = "2px solid rgba(131, 131, 131, 0.247)";

        valor2.style.color = "rgb(25, 25, 25)";
        valor2.style.backgroundColor = "rgb(255, 255, 255)";
        valor2.style.border = "2px solid rgba(131, 131, 131, 0.247)";

        valor3.style.color = "rgb(25, 25, 25)";
        valor3.style.backgroundColor = "rgb(255, 255, 255)";
        valor3.style.border = "2px solid rgba(131, 131, 131, 0.247)";


        document.body.style.backgroundColor = "white";
        
    } else {
        console.log("Dark");

        botaoTema.style.backgroundColor = "rgb(30, 30, 30)";
        imageTema.src = 'img/LightTheme.png';

        document.body.style.backgroundColor = "rgb(26, 26, 26)";
        frameFundo.style.backgroundColor = "rgb(30, 30, 30)";
        frameFundo.style.boxShadow = "0px 0px 16px rgba(0, 0, 0, 0.247)";

        titulo.style.color = "rgb(255, 255, 255)";

        label1.style.color = "rgb(255, 255, 255)";
        label2.style.color = "rgb(255, 255, 255)";
        label3.style.color = "rgb(255, 255, 255)";

        valor1.style.color = "rgb(255, 255, 255)";
        valor1.style.backgroundColor = "rgb(30, 30, 30)";
        valor1.style.border = "2px solid rgba(65, 65, 65, 0.208)";

        valor2.style.color = "rgb(255, 255, 255)";
        valor2.style.backgroundColor = "rgb(30, 30, 30)";
        valor2.style.border = "2px solid rgba(65, 65, 65, 0.208)";

        valor3.style.color = "rgb(255, 255, 255)";
        valor3.style.backgroundColor = "rgb(30, 30, 30)";
        valor3.style.border = "2px solid rgba(65, 65, 65, 0.208)";


        
        
    }

    ativado = !ativado;
}

