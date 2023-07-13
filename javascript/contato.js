const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
const telRegex = /([\(])?([0-9]{2})(.)([0-9]{5})([\-])?([0-9]{4})/;
const btnEnviar = document.getElementById('btn-enviar');
const email = document.getElementById('email');
const nome = document.getElementById('nome');
const telefone = document.getElementById('telefone');

btnEnviar.addEventListener('click', enviarForm);

function enviarForm(){
    if(nome.value == '' || email.value == '' || telefone.value == ''){
        event.preventDefault();
        nameValidate();
        emailValidate();
        telValidate();
    }
    else
    {
        event.returnValue = true;
    }
};

function setError(index){
    campos[index].style.border = '2px solid #e63636';
    spans[index].style.display = 'block';
    spans[index].style.color = '#e63636';
};

function removeError(index){
    campos[index].style.border = '';
    spans[index].style.display = 'none';
    spans[index].style.color = '';
};

function nameValidate(){
    if(campos[0].value.length < 3)
    {
        setError(0);
    }
    else
    {
        removeError(0);
    }
};

function emailValidate(){
    if(!emailRegex.test(campos[1].value))
    {
        setError(1);
    }
    else
    {
        removeError(1);
    }
};

function telValidate(){
    if(!telRegex.test(campos[2].value))
    {
        setError(2);
    }
    else
    {
        removeError(2);
    }
}