document.querySelector(".main-form").addEventListener("submit", (e) => {
  e.preventDefault();
  let maxRange = document.querySelector(".set-input").value;
  let userChose = document.querySelector(".user-input").value;
  let ranNum = Math.floor(Math.random() * maxRange) + 1;
  let result = userChose == ranNum ? "You WIn" : "You Lost";
  document.querySelector(
    ".result"
  ).innerHTML = `  <li>유저선택 : ${userChose}, 머신선택 : ${ranNum}</li>
  <li>${result}</li>`;
});
