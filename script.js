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
var gradiantPicker = new iro.ColorPicker("#gradiantPicker", {
  width: 200,
  colors: [
  	"rgb(0, 255, 0)",
  	"rgb(255, 0, 0)",
	],
  borderWidth: 2,
  borderColor: "#fff",
  layout: [
    {
      component: iro.ui.Box,
    },
    {
      component: iro.ui.Slider,
      options: {
        sliderType: 'hue'
      }
    }
  ]
});

// gradiant name
const gradBkg = document.querySelector(".gradiant");
const range = document.querySelector("#range");
const gradName = document.querySelector(".gradientName");

	// listener
gradiantPicker.on('color:change', colorUpdateGrad);
range.addEventListener("input", colorUpdateGrad);

	// function
function colorUpdateGrad() {
	gradBkg.style.background = `linear-gradient(${range.value}deg, ${gradiantPicker.colors[0].hexString}, ${gradiantPicker.colors[1].hexString})`;
	gradName.innerHTML = `background: linear-gradient(${range.value}deg, ${gradiantPicker.colors[0].hexString}, ${gradiantPicker.colors[1].hexString})`;
}


