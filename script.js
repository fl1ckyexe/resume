const toggle = document.getElementById("langToggle");

function setLanguage(lang) {
  document.documentElement.setAttribute("data-lang", lang);
  document.querySelectorAll(".lang").forEach(el => {
    el.style.display = el.getAttribute("data-lang") === lang ? "" : "none";
  });
  toggle.textContent = lang === "uk" ? "UK / EN" : "EN / UK";
  localStorage.setItem("cv_lang", lang);
}

toggle.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-lang") || "uk";
  setLanguage(current === "uk" ? "en" : "uk");
});

const saved = localStorage.getItem("cv_lang");
if (saved && saved !== "uk") setLanguage(saved);
else setLanguage("uk");
