// color picker
// iro.js
const colorPicker = new iro.ColorPicker('#picker', {
	// size
	width: 250,
	// UI coponent stacking direction
	layoutDirection: "vertical",
	// initial colors
	colors: [
    '#25f54e', 
    '#2930ff', 
    '#f21f2a', 
  ]
});

// color name
const boxes = [...document.querySelectorAll("#colorBox")];
const names = [...document.querySelectorAll('#colorName')];

colorPicker.on('color:change', colorUpdatePick);

function colorUpdatePick() {
	// update color on the boxes
	boxes.forEach((e, i) => e.style.background = `${this.colors[i].hexString}`);
	// upate name
	names.forEach((e, i) => e.innerText = this.colors[i].hexString);
}

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

// box shadow
const box = document.querySelector(".box");
const offsetX = document.querySelector("#offsetX");
const offsetY = document.querySelector("#offsetY");
const blur = document.querySelector("#blur");
const spread = document.querySelector("#spread");
const opacity = document.querySelector("#opacity");
const color = document.querySelector("#colorSlider");
const boxShadowText = document.querySelector("#boxShadowText");
let rgb;
const array = [offsetX, offsetY, blur, spread, opacity, color];

array.forEach(e => {
	e.addEventListener("input", updateBox);
})

 // hex to rgb
function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function updateBox() {
	rgb = hexToRgb(color.value);
	let textValue = `${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity.value/10})`;
	box.style.boxShadow = textValue;
	// box.style.boxShadow = `${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity.value/10})`;
	boxShadowText.innerHTML = "box-shadow: " + textValue;
}

// bookmark
function rudr_favorite(a) {
  pageTitle=document.title;
  pageURL=document.location;
  try {
    // Internet Explorer solution
    eval("window.external.AddFa-vorite(pageURL, pageTitle)".replace(/-/g,''));
  }
  catch (e) {
    try {
      // Mozilla Firefox solution
      window.sidebar.addPanel(pageTitle, pageURL, "");
    }
    catch (e) {
      // Opera solution
      if (typeof(opera)=="object") {
        a.rel="sidebar";
        a.title=pageTitle;
        a.url=pageURL;
        return true;
      } else {
        // The rest browsers (i.e Chrome, Safari)
        alert('Press ' + (navigator.userAgent.toLowerCase().indexOf('mac') != -1 ? 'Cmd' : 'Ctrl') + '+D to bookmark this page.');
      }
    }
  }
  return false;
}