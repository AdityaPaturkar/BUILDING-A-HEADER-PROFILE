const followBtn = document.getElementById("followBtn");
const messageBtn = document.getElementById("messageBtn");

followBtn.addEventListener("click", () => {
  if (followBtn.textContent === "Follow") {
    followBtn.textContent = "Following";
    followBtn.style.backgroundColor = "#2ed573";
  } else {
    followBtn.textContent = "Follow";
    followBtn.style.backgroundColor = "#ff4757";
  }
});

messageBtn.addEventListener("click", () => {
  alert("Message feature is coming soon! 💌");
});
