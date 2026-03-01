const output = document.querySelector("#result");
const btn = document.querySelector("#check-btn");
const input = document.querySelector("#text-input");
// const main_div = document.querySelector(".main");

function palindromeClean(str) {
  return str
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");
}

function isPalindrome(cleaned) {
  // Handle empty after cleaning
  if (cleaned.length === 0) return false;
  // Standard two-pointer check
  let left = 0;
  let right = cleaned.length - 1;
  while (left < right) {
    if (cleaned[left] !== cleaned[right]) return false;
    left++;
    right--;
  }
  return true;
}

function findPalindrome() {
  const raw = input.value;
  const trimmed = raw.trim();

  if (!trimmed) {
    alert("Please input a value");
    return;
  }

  const cleaned = palindromeClean(trimmed);
  if (!cleaned) {
    output.textContent = "No alphanumeric characters to check.";
    input.value = "";
    return;
  }

  const result = isPalindrome(cleaned);
  output.textContent = `${raw} is ${result ? "" : "not "}a palindrome`;
  input.value = "";
}

btn.addEventListener("click", findPalindrome);

// Support pressing Enter on desktop/mobile keyboards
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    findPalindrome();
  }
});