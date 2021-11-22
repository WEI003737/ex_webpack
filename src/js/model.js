function helperModel (message) {

  const modelEl = document.getElementById('model');
  if (modelEl) {
    document.querySelector('.c-model p').innerText = message;
    modelEl.style.display = 'block';
    return;
  }

  const templete = document.createElement('template');
  templete.innerHTML = `
    <div id="model" class="c-model">
      <div class="c-model__container">
        <span class="c-model__text">
          <p>${message}</p>
        </span>
        <a class="c-model__close">關閉</a>
      </div>
    </div>
  `;
  document.body.appendChild(templete.content);

  document.querySelector('.c-model__close').addEventListener('click', function () {
    document.getElementById('model').style.display = 'none';
  }, false);
}

export default helperModel;
