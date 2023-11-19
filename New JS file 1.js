// Show main menu on load
showMainMenu();

function showMainMenu() {
  // Create menu HTML
  let html = `
    <h2>Welcome!</h2>
    <input id="name" placeholder="Name">
    <button onclick="joinChat()">Enter Chat</button>
  `;

  // Insert into DOM
  document.querySelector('#app').innerHTML = html;
}

function joinChat() {
  // Get name
  let name = document.getElementById('name').value;

  // Show chat screen
  showChatScreen(name);
}

function showChatScreen(name) {
  // Create chat HTML...

  // Insert into DOM
}
// Array of room objects
let rooms = [
  {name: "Food Talk", id: 1},
  {name: "Travel Stories", id: 2}
];

function showRoomList() {
  let listHtml = "";

  rooms.forEach(room => {
    listHtml += `
      <div class="room" data-id="${room.id}">
        ${room.name}
      </div>
    `;
  });

  document.getElementById("room-list").innerHTML = listHtml;
}

// Show selected room messages
function showRoom(roomId) {
  //...
}
<img id="profilePic">

<script>
  let selectedAvatar = 1;

  document.getElementById("avatars").addEventListener("change", () => {
    selectedAvatar = this.value;
    updateProfilePic();
  });

  function updateProfilePic() {
   let pic = `avatar${selectedAvatar}.png`;
   document.getElementById("profilePic").src = pic;
  }
</script><img id="profilePic">

<script>
  let selectedAvatar = 1;

  document.getElementById("avatars").addEventListener("change", () => {
    selectedAvatar = this.value;
    updateProfilePic();
  });

  function updateProfilePic() {
   let pic = `avatar${selectedAvatar}.png`;
   document.getElementById("profilePic").src = pic;
  }
</script>// Data
const rooms = [
  {name: "Food Talk", id: 1},
  {name: "Travel Stories", id: 2}
];

let messages = [];

// Functions
function showIntro() {
  document.querySelector('#app').innerHTML = `
    <h1>Welcome!</h1>
    <button id="enter">Enter Chat</button>
  `;
}

function showMainMenu() {
  // room list HTML
}

function showRoomList() {
  // render rooms
}

function sendMessage() {
  // add message
}

// Init
showIntro();

document.getElementById('enter').addEventListener('click', () => {
  showMainMenu();
});

// Other event listeners