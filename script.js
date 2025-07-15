document.querySelectorAll('input[type=checkbox]').forEach(box => {
  box.addEventListener('change', () => {
    localStorage.setItem(box.id, box.checked);
  });

  const saved = localStorage.getItem(box.id);
  if (saved !== null) {
    box.checked = (saved === "true");
  }
});
