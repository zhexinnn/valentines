let leftPos = 0
let bottomPos = 0
document.getElementById('yessir').addEventListener('click', () => {
    alert('对你面的女孩看过来👀!\n The annoying Zhang Zhe Xin can\'t wait to see you on the 14th Feb from 515pm to 1215am! Prepare your heart and dress comfortably because you will be in for a night full of surprises and fun 🤫😚🐼 \nUh oh! There will be one every hour 🔥')
})
document.getElementById('nooo').addEventListener('mouseover', () => {
    leftPos = Math.floor(Math.random() * (50 - (-50) + 1)) + (-50);
    bottomPos = Math.floor(Math.random() * (100 - (-100) + 1)) + (-100);
    document.getElementById('nooo').style.position = "absolute"
    document.getElementById('nooo').style.left = leftPos + "%"
    document.getElementById('nooo').style.bottom = bottomPos + "%"
})
document.getElementById('nooo').addEventListener('click', () => {
    leftPos = Math.floor(Math.random() * (50 - (-50) + 1)) + (-50);
    bottomPos = Math.floor(Math.random() * (100 - (-100) + 1)) + (-100);
    document.getElementById('nooo').style.position = "absolute"
    document.getElementById('nooo').style.left = leftPos + "%"
    document.getElementById('nooo').style.bottom = bottomPos + "%"
})
