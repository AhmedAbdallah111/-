var text = "هذا ثواب علي روح والدي رحمه الله عليه نتمني منكم الدعاء بلرحمه والمغفره"
let i = 0
window.onload = function () {
    var typee = setInterval(function () {
        document.querySelector('.type').textContent += text[i];
        i += 1;
        if (i > text.length - 1) {
            clearInterval(typee);
        }
    }, 200);
};
console.log(text[i])
let cont = 0;
let value = document.querySelector("#value")
let btns = document.querySelectorAll('.btn')
btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')) {
            cont--
        } else if (styles.contains('increase')) {
            cont++
        }
        else {
            cont = 0
        }
        if (cont > 0) {
            value.style.color = 'green'
        }
        if (cont == 0) {
            value.style.color = '#222'
        }
        value.textContent = cont
    })
})