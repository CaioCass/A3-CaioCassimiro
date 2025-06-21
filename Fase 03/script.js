const input = document.querySelector('#cpf')

input.addEventListener('keypress', () => {
    let inputlength = input.value.length

    if (inputlength === 3 || inputlength === 7) {
        input.value += '.'
    }else if (inputlength === 11) {
        input.value += '-'
    }
})

function validaCPF() {

   let cpf = document.getElementById('cpf')
   let valorCpf = cpf.value;
   let regex = (/^\d{3}\.\d{3}\.\d{3}-\d{2}$/);

    if(!regex.test(valorCpf)) {
        alert("CPF Inválido, use o formato 000.000.000-00")
    }

}

function validaEmail() {

   let email = document.getElementById('email')
   let valorEmail = email.value;
   let regex = (/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

    if(!regex.test(valorEmail)) {
        alert("E-mail Inválido, favor insira um valor válido para E-mail")
    }

}



function mudaImg(imgSrc) {
        document.getElementById('banner-pricipal').src = imgSrc;
    }


function addUc() {
    let newUc = prompt("Digite o nome da UC matriculada: ");
    if (!newUc) return;

    let newLine = document.createElement("tr");
    let newCell = document.createElement("td");
    newCell.textContent = newUc;
    

    let btnUp = document.createElement("button");
    btnUp.textContent = "⬆️";
    btnUp.onclick = function() { moverCima(this); };

    let btnDown = document.createElement("button");
    btnDown.textContent = "⬇️";
    btnDown.onclick = function() { moverBaixo(this); };

    newCell.appendChild(btnUp);
    newCell.appendChild(btnDown);

    newLine.appendChild(newCell);

    document.getElementById("uc-table").appendChild(newLine); 
}

function moverCima(botao) {
    let line = botao.parentElement.parentElement; 
    let linePrev = line.previousElementSibling;


    if (linePrev && !linePrev.querySelector('th')) {
        line.parentNode.insertBefore(line, linePrev);
    }
}

function moverBaixo(botao) {
    let line = botao.parentElement.parentElement; 
    let lineNext = line.nextElementSibling;


    if (lineNext) {
        line.parentNode.insertBefore(lineNext, line);
    }
}


function addInfo() {
    let newInfo = document.getElementById('info').value;
    let newParagr = document.createElement('p');
    newParagr.textContent = newInfo;

    document.getElementById('perfil-pessoal').appendChild(newParagr);
    document.getElementById('newInfo').value = '';
}