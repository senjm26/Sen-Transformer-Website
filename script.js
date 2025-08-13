document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

document.querySelectorAll("details").forEach((targetDetail) => {
  targetDetail.addEventListener("toggle", () => {
    if (targetDetail.open) {
      document.querySelectorAll("details").forEach((detail) => {
        if (detail !== targetDetail) {
          detail.open = false;
        }
      });
    }
  });
});

const scrollBtn = document.createElement("button");
scrollBtn.id = "scrollTopBtn";
scrollBtn.textContent = "↑ Top";
scrollBtn.style.cssText = `
  display: none;
  position: fixed;
  bottom: 30px;
  right: 30px;
  padding: 10px 15px;
  background-color: #0051c3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  z-index: 99;
`;
document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
