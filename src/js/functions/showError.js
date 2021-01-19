export default function showError(formWidget, inputTarget, text) {
  inputTarget.focus();

  const err = document.createElement('div');
  err.classList.add('popover-top');
  err.innerHTML = `<div class="popover-body">${text}</div>`;

  formWidget.appendChild(err);

  inputTarget.addEventListener('input', () => {
    err.remove();
  });
}
