//connect to server and retain the socket
//connect to same host that served the document
// Base code is used from Lecture Note 13
// Real Time Sockets
// 03 Chat Server with SocketIO
// Code Modified By:
//     Name : Naveen Sajeendran
//     Student Number: 101252826


//const socket = io('http://' + window.document.location.host)
const socket = io() //by default connects to same server that served the page
socket.on('serverSays', function(message) {
  let msgDiv = document.createElement('div')
  let sender=message.split(':')[0].trim()
  let name=document.getElementById('connectBox').dataset.username

  if(sender===name){
    msgDiv.style.color='blue'
  }else{
    msgDiv.style.color='black'
  }
  msgDiv.textContent = message
  document.getElementById('messages').appendChild(msgDiv)
})
socket.on('privateServerMessage', function(message) {
  let msgDiv = document.createElement('div')
  msgDiv.style.color='red'
  msgDiv.textContent = message
  document.getElementById('messages').appendChild(msgDiv)
})

socket.on('groupServerMessage', function(message) {
  let msgDiv = document.createElement('div')
  msgDiv.style.color='red'
  msgDiv.textContent = message
  document.getElementById('messages').appendChild(msgDiv)
})

function addName(){
  let usernameMessage = document.getElementById('connectBox').value.trim()

  if (usernameMessage === '') return;
  if(usernameMessage.match(/^[a-zA-z][a-z0-9]*$/)){
    socket.emit('usernameSays',usernameMessage);
    document.getElementById('connectBox').value = ''
    document.getElementById("msgBox").disabled = false;
    document.getElementById('connectBox').dataset.username = usernameMessage.trim()
  }
}
function sendMessage() {
  let message = document.getElementById('msgBox').value.trim()
  let username = document.getElementById('connectBox').dataset.username
  if(!username||message === '') return //do nothing
  console.log(`${username}: ${message}`)
  if(message.includes(':') && !message.includes(',')){
    socket.emit('privateSays', `${username}: ${message}`)
  } else if (message.includes(':') && message.includes(',')){
    console.log("group message case on client entered")
    socket.emit('groupMessageSays', `${username}: ${message}`)
  }else{
    socket.emit('clientSays', `${username}: ${message}`)
  }
  document.getElementById('msgBox').value = ''
}
function isClear(){
  while(document.getElementById('messages').childNodes.length > 1){
    document.getElementById('messages').removeChild(document.getElementById('messages').lastChild);
  }
}

function handleKeyDown(event) {
  const ENTER_KEY = 13 //keycode for enter key
  if (event.keyCode === ENTER_KEY) {
    sendMessage()
    addName()
    return false //don't propogate event
  }
}


//Add event listeners
document.addEventListener('DOMContentLoaded', function() {
  //This function is called after the browser has loaded the web page

  //add listener to buttons

  document.getElementById('connect_as').addEventListener('click', addName)
  document.getElementById('send_button').addEventListener('click', sendMessage)
  document.getElementById('clear_button').addEventListener('click', isClear)

  //add keyboard handler for the document as a whole, not separate elements.
  document.addEventListener('keydown', handleKeyDown)
  //document.addEventListener('keyup', handleKeyUp)

  document.getElementById("msgBox").disabled = true;
})
