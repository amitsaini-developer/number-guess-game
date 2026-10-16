// ===== script.js =====

// 1. Variables: game ki yaaddasht
let secret = randomNumber();   // computer ka chhupa number
let tries = 0;                 // kitni koshish hui

// 2. HTML ke elements ko JS me pakdo
const input    = document.getElementById("guessInput");
const message  = document.getElementById("message");
const triesEl  = document.getElementById("tries");
const guessBtn = document.getElementById("guessBtn");
const resetBtn = document.getElementById("resetBtn");

// 3. 1 se 100 ke beech random number banane wala function
function randomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

// 4. Jab player guess kare
function checkGuess() {
  const guess = Number(input.value);

  // galat input check
  if (!guess || guess < 1 || guess > 100) {
    message.textContent = "1 se 100 ke beech number daalo.";
    return;
  }

  tries++;
  triesEl.textContent = "Koshish: " + tries;

  // number compare karo
  if (guess === secret) {
    message.textContent = "Sahi! " + tries + " koshish me jeet gaye!";
    guessBtn.disabled = true;
  } else if (guess < secret) {
    message.textContent = "Thoda bada number socho";
  } else {
    message.textContent = "Thoda chhota number socho";
  }

  input.value = "";
  input.focus();
}

// 5. Naya game shuru karo
function resetGame() {
  secret = randomNumber();
  tries = 0;
  triesEl.textContent = "Koshish: 0";
  message.textContent = "";
  guessBtn.disabled = false;
  input.value = "";
  input.focus();
}

// 6. Buttons ko functions se jodo
guessBtn.addEventListener("click", checkGuess);
resetBtn.addEventListener("click", resetGame);
input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") checkGuess();   // Enter dabane par bhi guess ho
});