const sentBtn = document.querySelector('#sendBtn');
const massageIn = document.querySelector('#massegeIn');
const massageOut = document.querySelector('#massageOut');

sendBtn.addEventListener('click', sendMsg)

function sendMsg (){
    let content = messageIn.value;
    //console.log(content);
    if(content === '') {
        alert('Please Enter Valid Value. Current Value Is Empty')
    } 
else {
    messageOut.innerHTML = content;
    messageIn.value = '';
  }
    
}