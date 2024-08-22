function addon(){
    const inpval=document.getElementById('inp').value
    const newele=document.createElement('li')
    newele.style.color='red'
    newele.innerText=inpval
    document.getElementById('list').appendChild(newele)
}
function remon(){
    document.getElementById('list').removeChild(document.getElementById('list').lastElementChild)
}


function display(){
const dispval=document.getElementById('disp').value
document.getElementById('dispbox').innerText=dispval

}























function x(){
    console.log('hi');
    
}
x(function x(){
    console.log('hihelo');}

)