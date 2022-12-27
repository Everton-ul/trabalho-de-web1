const form   = document.getElementById('form');
const campos = document.querySelectorAll('.form1');
const spans  = document.querySelectorAll('.validação');
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

function setError(index){
    campos[index].style.border = '2px solid #e63636';
    spans[index].style.display = 'block';
}
function removeError(index){
    campos[index].style.border = '';
    spans[index].style.display = 'none';
}
function validaçãodenome(){
    if(campos[0].value.length < 3)
    {
        setError(0);
    }
    else
    {
        removeError(0);
    }
}
function validaçãodeemail(){
    if(!emailRegex.test(campos[1].value))
    {
        setError(1);
    }
    else
    {
        removeError(1);
    }
}
function validaçãodesenha(){
    if(campos[2].value.length < 8)
    {
        setError(2);
    }
    else
    {
        removeError(2);
        comparePassword();
    }
}
function comparaçãodesenha(){
    if(campos[2].value == campos[3].value && campos[3].value.length >= 8)
    {
        removeError(3);
    }
    else
    {
        setError(3);
    }
}