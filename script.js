// Simple placeholder for grammar check
document.getElementById('checkGrammar').addEventListener('click', () => {
  const text = document.getElementById('textInput').value;
  if (!text) {
    alert("Please type some text first!");
    return;
  }
  // Placeholder logic
  document.getElementById('output').textContent = "Grammar check result: Everything looks good! ✅";
});

// Listen to text
document.getElementById('listenText').addEventListener('click', () => {
  const text = document.getElementById('textInput').value;
  if (!text) {
    alert("Please type some text first!");
    return;
  }
  const utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterance);
});
