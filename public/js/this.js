const user = {};

let socket = io();

socket.on("connect", function() {
     console.log("I am Connected");
})

socket.on("new", (id) => {
     user.id = id;
     console.log("I am User with id: " + user.id);
});
