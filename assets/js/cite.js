document.addEventListener("DOMContentLoaded", () => {
  const dialog = document.getElementById("cite-dialog");
  const citationText = document.getElementById("citation-text");
  const copyButton = document.getElementById("copy-citation-button");
  const citeButtons = document.querySelectorAll(".cite-button");

  if (!dialog || !citationText || !copyButton || citeButtons.length === 0) {
    return;
  }

  citeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      citationText.value = button.dataset.citation || "";
      copyButton.textContent = "Copy citation";

      if (typeof dialog.showModal === "function") {
        dialog.showModal();
      } else {
        dialog.setAttribute("open", "");
      }
    });
  });

  copyButton.addEventListener("click", async () => {
    const text = citationText.value;

    try {
      await navigator.clipboard.writeText(text);
      copyButton.textContent = "Copied!";
    } catch (error) {
      citationText.select();
      document.execCommand("copy");
      copyButton.textContent = "Copied!";
    }
  });
});
