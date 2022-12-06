// function normalizeSOngName(){

// 	let name = 'Zhue Feat. Yunna - Sky Is Crying';
// 	let indexTochka = name.lastIndexOf('-');
//   let sliceText = name.slice(indexTochka);

	
// 	let newName = sliceText + ' ' + name

// 	return newName;

// }

// console.log(normalizeSOngName());

// function normalizeSOngName(defualtName){

// 	let name;
//! 	let target = defualtName.indexOf('-')
//! 	let singer = defualtName.substring(0, target)
//! 	let songName = defualtName.substring(target + 2)
// 	return `${songName}-${singer}`;



// }

// console.log(normalizeSOngName('Zhue Feat. Yunna - Sky Is Crying'));


//* Projects lessons
$('#ww').hide();

let textarea = document.querySelectorAll('main__input');
let speed = 500;



let spedds = sppedValue.oninput = function(){
	output.innerText = sppedValue.value;
	console.log(sppedValue.value);
	speed = speed = sppedValue.value;

}
	


let str = 'Точки, соответствующие  звёздам, на диаграмме';


let arr = str.split(' ');

function fixArr(arr){
	let clearArr = []
	for(let i = 0; i < arr.length; i++){
		if(arr[i]!= ''){

			clearArr.push(arr[i]);
		
		}
	
	}
  return clearArr;
}


function startread(str){
	let words = fixArr(str.split(' '));
	let i = 0;


let timeID =	setInterval(function(){ 
		if(i < words.length){

		let gg = ww.innerText = words[i];
		const element =  gg;
		const getMiddle = s => s.substr(s.length - 1 >>> 1, (~s.length & 1) + 1);
		let newColor = (getMiddle(element));
		gg = gg.replace(newColor, ` <span style="color: red;">${newColor}</span>`);
		newTextoReader.innerText = '';
		$('#newTextoReader').append(gg);
		i++;
			
		}else{
		clearInterval(timeID);
		$('.main__box').show();
		$('.sppedValue').show();
		$('.output').show();
		$('.button__go').show();
		$('#button__menu').hide();
		$('.main__box-reader').hide();
    newTextoReader.innerText = '';
    ww.innerText = '';
		main__input.value = '';

	}

	
 },speed)
}

$('.main__box-reader').hide();
$('#button__menu').hide();

button__go.onclick = function(){
	if(main__input.value == ''){
	alert(`Write something to continue`)
	}else{
	$('.main__box').hide();
	$('.button__go').hide();
	$('.sppedValue').hide();
	$('.output').hide();
  $('#button__menu').show();
  $('.main__box-reader').show();
	startread(main__input.value);
	document.body.onkeydown = function (e) {
		if(e.keyCode == 32) {
			$('.main__box').show();
			$('.button__go').show();
			$('#button__menu').hide();
			$('.main__box-reader').hide();
			$('.sppedValue').show();
			$('.output').show();
			newTextoReader.innerText = '';
		}
	}
	}

}
button__menu.onclick = function(){
	$('.main__box').show();
	$('.button__go').show();
	$('#button__menu').hide();
	$('.sppedValue').show();
	$('.output').show();
	$('.main__box-reader').hide();
	newTextoReader.innerText = '';
	main__input.value = '';
}

$('#white').hide();




let bgColor = localStorage.getItem("bgColor") ||  "#fff";

if(bgColor == "#fff"){
	whiteFuncional();
}else{
	darkFuncional();
}







function darkFuncional(){
	$('.dark').hide();
    $('#white').show();
	localStorage.setItem("bgColor", "#000");

	dark__bg.classList.add('dark__bg__animation');
	dark__bg.classList.remove('dark__bg__animation1');
	setTimeout(() => {
		$('.main__input').css('backgroundColor', '#fff');
		$('.main__input').css('color', '#333');
	}, 200)
	setTimeout(() => {
		$('#output').css('color', '#fff');
	}, 300)
	setTimeout(() => {
		$('#newTextoReader').css('color', '#fff');
	}, 400)
	setTimeout(() => {
		$('#button__go').css('color', '#333');
		$('#button__go').css('backgroundColor', '#fff');
		$('#button__menu').css('color', '#333');
		$('#button__menu').css('backgroundColor', '#fff');
	}, 500)
}



function whiteFuncional(){
	$('.dark').show();
    $('#white').hide();
	localStorage.setItem("bgColor", "#fff");

	dark__bg.classList.add('dark__bg__animation1');
	dark__bg.classList.remove('dark__bg__animation');

	setTimeout(() => {
		$('.main__input').css('backgroundColor', '#333');
		$('.main__input').css('color', '#fff');
	}, 200)
	setTimeout(() => {
		$('#output').css('color', '#333');
	}, 300)
	setTimeout(() => {
		$('#newTextoReader').css('color', '#333');
	}, 400)
	setTimeout(() => {
		$('#button__go').css('color', '#fff');
		$('#button__go').css('backgroundColor', '#333');
		$('#button__menu').css('color', '#fff');
		$('#button__menu').css('backgroundColor', '#333');
	}, 500)
}


dark.onclick = function(){
	darkFuncional();
}

white.onclick = function(){
	whiteFuncional();
	
}