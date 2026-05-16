document.addEventListener("DOMContentLoaded", () => {
  const dialog = document.getElementById("cite-dialog");
  const citationPreview = document.getElementById("citation-preview");
  const copyButton = document.getElementById("copy-citation-button");
  const citationLinks = document.querySelectorAll(".citation-link");

  let currentCitationHTML = "";
  let currentCitationPlain = "";

  if (!dialog || !citationPreview || !copyButton || citationLinks.length === 0) {
    return;
  }

  citationLinks.forEach((link) => {
    link.addEventListener("click", () => {
      currentCitationHTML = link.dataset.citationHtml || "";
      currentCitationPlain = link.dataset.citationText || "";

      citationPreview.innerHTML = currentCitationHTML;

      copyButton.textContent = copyButton.textContent.includes("Copy")
        ? "Copy citation"
        : "クリップボードにコピーする";

      document.documentElement.classList.add("modal-open");
      document.body.classList.add("modal-open");

      if (typeof dialog.showModal === "function") {
        dialog.showModal();
      } else {
        dialog.setAttribute("open", "");
      }
    });
  });

  dialog.addEventListener("close", () => {
    document.documentElement.classList.remove("modal-open");
    document.body.classList.remove("modal-open");
  });

  dialog.addEventListener("cancel", () => {
    document.documentElement.classList.remove("modal-open");
    document.body.classList.remove("modal-open");
  });

  copyButton.addEventListener("click", async () => {
    try {
      if (navigator.clipboard && window.ClipboardItem && currentCitationHTML) {
        await navigator.clipboard.write([
          new ClipboardItem({
            "text/html": new Blob([currentCitationHTML], { type: "text/html" }),
            "text/plain": new Blob([currentCitationPlain], { type: "text/plain" })
          })
        ]);
      } else {
        await navigator.clipboard.writeText(currentCitationPlain);
      }

      copyButton.textContent = copyButton.textContent.includes("Copy")
        ? "Copied!"
        : "コピーしました😀";
    } catch (error) {
      const temporaryTextarea = document.createElement("textarea");
      temporaryTextarea.value = currentCitationPlain;
      document.body.appendChild(temporaryTextarea);
      temporaryTextarea.select();
      document.execCommand("copy");
      document.body.removeChild(temporaryTextarea);

      copyButton.textContent = copyButton.textContent.includes("Copy")
        ? "Copied!"
        : "コピーしました😀";
    }
  });
});
