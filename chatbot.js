const responses = {
  "cite book with two authors": "Format: Lastname, A. A., & Lastname, B. B. (Year). *Title of the book*. Publisher.",
  "table format": "Tables should be labeled 'Table X' with a title in italics. Include any relevant notes below the table.",
  "graph format": "Graphs (Figures) are labeled 'Figure X' with a title in italics below. Add a caption and cite your source if needed.",
  "appendix format": "Appendices go after the reference list. Label them 'Appendix A', 'Appendix B', etc. Each begins on a new page."
};

function sendMessage() {
  const inputBox = document.getElementById("userInput");
  const chatbox = document.getElementById("chatbox");
  const userText = inputBox.value.trim();
  inputBox.value = "";

  if (userText === "") return;

  chatbox.innerHTML += `<div class='msg user'><strong>You:</strong> ${userText}</div>`;

  let reply = "I'm not sure how to help with that yet. Try asking about citations, tables, or appendices.";
  for (let key in responses) {
    if (userText.toLowerCase().includes(key)) {
      reply = responses[key];
      break;
    }
  }

  chatbox.innerHTML += `<div class='msg bot'><strong>Bot:</strong> ${reply}</div>`;
  chatbox.scrollTop = chatbox.scrollHeight;
}
