const BACKEND_URL = "https://akshabot-pro-production.up.railway.app/get?msg=";

function sendMessage() {
  const userInput = document.getElementById("userInput").value;
  const chatlog = document.getElementById("chatlog");

  chatlog.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;
  document.getElementById("userInput").value = "";

  fetch(`${BACKEND_URL}${encodeURIComponent(userInput)}`)
    .then(response => response.text())
    .then(data => {
      chatlog.innerHTML += `<p><strong>Bot:</strong> ${data}</p>`;
      chatlog.scrollTop = chatlog.scrollHeight;
    })
    .catch(error => {
      chatlog.innerHTML += `<p><strong>Bot:</strong> ❌ Error talking to backend</p>`;
    });
}
