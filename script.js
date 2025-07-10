function insertToDisplay(data){
    document.querySelector('#display').value += data
}

function  clean(){
     document.querySelector('#display').value = ''
}

function back(){
    const display = document.querySelector('#display')
    display.value = display.value.slice(0,-1)
}
/* Faz o calculo de acordo com o valor que foi apresentado  no display */
function resultado(){
    const display = document.querySelector('#display')
    try {
        display.value = eval(display.value).toFixed (2)
    } catch{

    }
}