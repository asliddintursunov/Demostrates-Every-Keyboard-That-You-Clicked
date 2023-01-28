let container = document.getElementById('container');


window.addEventListener('keyup', (e) => {
    // key.style = 'display: none';
    // keyValue.textContent = e.key;
    // keyCode.textContent = e.keyCode;
    // code.textContent = e.code;

    // container.appendChild(keyValue)
    // container.appendChild(keyCode)
    // container.appendChild(code)

    // keyValue.style = 'display: block;';
    // keyCode.style = 'display: block;';
    // code.style = 'display: block;';
    container.innerHTML = `
    <div class="key">
        ${e.key == " " ? "Space" : e.key}
        <small>event.key</small>
    </div>
    <div class="key">
        ${e.keyCode}
        <small>event.keyCode</small>
    </div>
    <div class="key">
        ${e.code}
        <small>event.code</small>
    </div>
    `
})