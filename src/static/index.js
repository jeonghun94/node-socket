const socket = io("/");

// socket.on("hi", console.log('브라우저가 보내는거얍!'));
// socket.emit("test");

function sendMessage(message) {
    socket.emit("newMessage", { message });
    console.log(`You: ${message}`);
}

function setNickname(nickname) {
socket.emit("setNickname", { nickname });
}

function handleMessageNotif(data) {
const { message, nickname } = data;
console.log(`${nickname}: ${message}`);
}

socket.on("messageNotif", handleMessageNotif);