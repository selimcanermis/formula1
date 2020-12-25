function changeImage(anything) {
    document.querySelector('.team').src = anything
}
function changeCircleColor(color) {
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}
function changeTextColor(color) {
	const textColor = document.querySelector('.text');
	textColor.style.color = color;
}
function changeText(anything) {
	const text = document.querySelector('.text')
	text.textContent = anything;
}
function changeText_td(anything1, anything2, anything3, anything4) {
	var x = document.querySelectorAll('.td');
	x[0].textContent = anything1;
    x[1].textContent = anything2;
    x[2].textContent = anything3;
	x[3].textContent = anything4;
}