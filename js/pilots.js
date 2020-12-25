function changeImage(anything1,anything2){
	document.querySelector('.pilot1').src = anything1
    document.querySelector('.pilot2').src = anything2
}
function changePilotInfo(anything1, anything2, anything3, anything4){
	var x = document.querySelectorAll('#pilotName');
    x[0].textContent = anything1;
    x[1].textContent = anything3;
    var y = document.querySelectorAll('#pilotNationality')
    y[0].textContent = anything2;
    y[1].textContent = anything4;
}
function changeTextColor(color){
	const textColor = document.querySelectorAll('.card');
    textColor[0].style.background = color;
    textColor[1].style.background = color;
}