const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
const btnCadastrar = document.getElementById('btn-cadastrar');
const email = document.getElementById('email_cad');
const usuario = document.getElementById('user_cad');
const senha = document.getElementById('senha_cad');

btnCadastrar.addEventListener('click', enviarForm);

function enviarForm(){
    if(email.value == '' || usuario.value == '' || senha.value == ''){
        event.preventDefault();
        usuarioValidate();
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

function usuarioValidate(){
    if(campos[0].value.length < 5)
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

function senhaValidate(){
    if(campos[2].value.length < 8)
    {
        setError(2);
    }
    else
    {
        removeError(2);
    }
}