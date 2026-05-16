document.addEventListener("DOMContentLoaded", () => {
  const languageSelect = document.getElementById("language-select");

  if (!languageSelect) {
    return;
  }

  languageSelect.addEventListener("change", () => {
    window.location.href = languageSelect.value;
  });
});
