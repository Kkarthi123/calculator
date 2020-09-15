const inputs = document.querySelector('.in');
const outputs = document.querySelector('.out');
function input(data)
{     

    if( data === "."  && outputs.innerText.includes('.')) return;
    
    if(outputs.innerHTML.length < 18 )
    {
        outputs.innerText = outputs.innerText + data;
    }
   
}
function Call(){
    outputs.innerText = ''
    inputs.innerText = ''
}
function Clear()
{
    outputs.innerText = outputs.innerText.toString().slice(0, -1);
}

function equal(){
     
    if(inputs.innerHTML.slice(-1) === "+")
    {
        outputs.innerHTML = parseFloat(inputs.innerHTML.toString().slice(0, -1)) + parseFloat(outputs.innerHTML);
        inputs.innerHTML = ''
    }
    if(inputs.innerHTML.slice(-1) === "-")
    {
        outputs.innerHTML = parseFloat(inputs.innerHTML.toString().slice(0, -1)) - parseFloat(outputs.innerHTML);
        inputs.innerHTML = ''
    }
    if(inputs.innerHTML.slice(-1) === "x")
    {
        outputs.innerHTML = parseFloat(inputs.innerHTML.toString().slice(0, -1)) * parseFloat(outputs.innerHTML);
        inputs.innerHTML = ''
    }
    if(inputs.innerHTML.slice(-1) === "/")
    {
        outputs.innerHTML = parseFloat(inputs.innerHTML.toString().slice(0, -1)) / parseFloat(outputs.innerHTML);
        inputs.innerHTML = ''
    }
     
}
function op(data){
    
    if(outputs.innerHTML != '')
    {
        outputs.innerText = outputs.innerText.toString() + data;
        inputs.innerText = outputs.innerText;
        outputs.innerText = '';
    }    
    else
    {
        outputs.innerHTML = data;
    }
    
}




