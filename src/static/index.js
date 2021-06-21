const socket = io("/");

socket.on("hi", console.log('브라우저가 보내는거얍!'));
socket.emit("test");