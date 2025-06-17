const input = document.getElementById("inputText");
const cleanedEl = document.getElementById("cleaned");
const resultEl = document.getElementById("result");

function cleanSentence(text) {
  return text.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function checkPalindrome() {
  const raw = input.value;
  const cleaned = cleanSentence(raw);
  cleanedEl.innerText = `Cleaned: ${cleaned}`;

  const reversed = cleaned.split("").reverse().join("");
  if (cleaned && cleaned === reversed) {
    resultEl.innerText = "Yes, it’s a palindrome";
    resultEl.className = "valid";
  } else {
    resultEl.innerText = "No, it’s not a palindrome";
    resultEl.className = "invalid";
  }
}

input.addEventListener("input", () => {
  cleanedEl.innerText = "";
  resultEl.innerText = "";
  resultEl.className = "";
});
