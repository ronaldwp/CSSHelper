// color picker
// iro.js
const colorPicker = new iro.ColorPicker('#picker', {
	// size
	width: 250,
	// UI coponent stacking direction
	layoutDirection: "vertical",
	// initial colors
	color: "#80cbc4",
});

// color name
colorPicker.on('color:change', function(color){
	// color code change on h1 tag
	const colorName =  document.querySelector("#colorName");
	colorName.innerHTML = color.hexString;
	// color change on #colorBox
	const colorBox = document.querySelector("#colorBox");
	colorBox.style.backgroundColor = color.hexString;
});


// gradiant generator
// iro.js
const colorPickerTwo = new iro.ColorPicker('#pickerTwo', {
	// size
	width: 250,
	// colors
	colors: [
		"#f44336",
		"#9c27b0",
	],
	//border-width
	borderWidth: 3,
	// border-color
	borderColor: "#fff"
});

// gradiant name



// console.log(colorPickerTwo.colors[0].hexString);
// console.log(colorPickerTwo.colors[1].hexString);



