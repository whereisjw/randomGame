document.querySelector(".main-form").addEventListener("submit", (e) => {
  e.preventDefault();
  let maxRange = document.querySelector(".set-input").value;
  let userChose = document.querySelector(".user-input").value;
  let ranNum = Math.floor(Math.random() * maxRange) + 1;
  let result = userChose == ranNum ? "You WIn" : "You Lost";
  document.querySelector(
    ".result"
  ).innerHTML = `  <li>you Chose : ${userChose}, the machine chose : ${ranNum}</li>
  <li>${result}</li>`;
});
