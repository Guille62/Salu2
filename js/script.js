
const text = document.querySelector('.copy-shorturl');
const message = document.querySelector('.text-copied');
    text.onclick = function () {
        text.select();
        document.execCommand('copy');
        text.blur();
        message.classList.add('text-is-copied');
        setTimeout(function () {
            message.classList.remove('text-is-copied');
        }, 3000);
    };