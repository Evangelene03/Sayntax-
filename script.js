// Grammar suggestions dictionary
const suggestions = {
  "teh": "the",
  "recieve": "receive",
  "adress": "address",
  "definately": "definitely",
  "occured": "occurred"
};

// Check grammar button
document.getElementById('checkGrammar').addEventListener('click', () => {
  const text = document.getElementById('textInput').value;
  if (!text) {
    alert("Please type some text first!");
    return;
  }

  const words = text.split(/\s+/);
  let correctedText = words.map(word => suggestions[word.toLowerCase()] || word).join(" ");

  let resultHTML = "<strong>Suggestions:</strong><br>";

  words.forEach(word => {
    if (suggestions[word.toLowerCase()]) {
      resultHTML += `<span style="color:red;">${word}</span> → <span style="color:green;">${suggestions[word.toLowerCase()]}</span><br>`;
    }
  });

  resultHTML += `<br><strong>Corrected Text:</strong><br>${correctedText}`;
  document.getElementById('output').innerHTML = resultHTML;
});

// Text-to-speech button
document.getElementById('listenText').addEventListener('click', () => {
  const text = document.getElementById('textInput').value;
  if (!text) {
    alert("Please type some text first!");
    return;
  }
  const utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterance);
});
