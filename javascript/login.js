const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
const btnLogin = document.getElementById('btn-login');
const email = document.getElementById('email');
const senha = document.getElementById('senha');

btnLogin.addEventListener('click', enviarForm);

function enviarForm(){
    if(email.value == '' || senha.value == ''){
        event.preventDefault();
        emailValidate();
        senhaValidate();
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

function emailValidate(){
    if(!emailRegex.test(campos[0].value))
    {
        setError(0);
    }
    else
    {
        removeError(0);
    }
};

function senhaValidate(){
    if(campos[1].value.length < 8)
    {
        setError(1);
    }
    else
    {
        removeError(1);
    }
}