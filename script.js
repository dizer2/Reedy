// red.onclick = function () {
// 	resetBox();
// 	red.style.top = "-100px"
// }

// green.onclick = function () {
// 	resetBox();
// 	green.style.top = "-100px"
// }

// blue.onclick = function () {
// 	resetBox();
// 	blue.style.top = "-100px"
// }

// orange.onclick = function () {
// 	resetBox();
// 	orange.style.top = "-100px"
// }

// function resetBox() {
// 	red.style.top = "0"
// 	blue.style.top = "0"
// 	green.style.top = "0"
// 	orange.style.top = "0"
// }


// keyborrd
let txt = ''

document.body.onkeydown = function (e) {
	console.log(e.keyCode)
	if(e.keyCode == 81) {
		btnQ.style.boxShadow = "0 0 4px #999"
		txt += 'q'
		msg.value = txt;
	}
}


document.body.onkeyup = function (e) {
	console.log(e.keyCode)
	if(e.keyCode == 81) {
		btnQ.style.boxShadow = "0 5px 10px #999"
	}
}








