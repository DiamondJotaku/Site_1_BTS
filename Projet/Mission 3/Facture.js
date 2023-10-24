function Recharge() {
    location.reload();
}

function Result() {
    t8.value = Number(t6.value)*Number(t7.value);
    t12.value = Number(t10.value)*Number(t11.value);
    t16.value = Number(t14.value)*Number(t15.value);
    t18.value = Number(t8.value) + Number(t12.value) + Number(t16.value);
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeBackgroundColor() {
    const background = document.body;
    const newColor = getRandomColor();
    background.style.backgroundColor = newColor;
}

// Change the background color every 2 seconds (2000 milliseconds)
setInterval(changeBackgroundColor, 2000);
