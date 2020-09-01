function copyEmail() {
  const el = document.createElement('textarea');
  el.value = "eddiekong13@gmail.com";
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}

function copyPhone() {
  const el = document.createElement('textarea');
  el.value = "(732) 325 5055";
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}
