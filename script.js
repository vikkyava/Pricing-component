

const slider = document.getElementById('range-slider');
const numberOfViews = document.getElementById("view-amount");
const frequency = document.querySelectorAll(".frequency");
const price = document.querySelectorAll(".price");
const toggle = document.getElementById("toggle");
let newValue = slider.value

function updateSliderBackground() {
    let newValue = slider.value
    const min = slider.min || 0;
    const max = slider.max || 100;
    const range = max - min;
    const percentage = ((newValue - min) / range) * 100;
    const backgroundColor = `linear-gradient(90deg, #66FFFF ${percentage}%, #d3d3d3 ${percentage}%)`;
    slider.style.background = backgroundColor;
}

slider.addEventListener('input', updateSliderBackground);

// Set the initial background
updateSliderBackground();

const textValues = [{ price: 8,pageViews: '10K PAGEVIEWS'},
{ price: 12,pageViews: '50K PAGEVIEWS'},
{ price: 16,pageViews: '100K PAGEVIEWS'},
{ price: 24,pageViews: '500K PAGEVIEWS'},
{ price: 36,pageViews: '1M PAGEVIEWS'}
];

function updateSliderText() {
    let currentValue = textValues[slider.value - 1]
    numberOfViews.textContent = currentValue.pageViews
    price.forEach((number, index) => {
        if (toggle.checked) {
            let newAmount = currentValue.price * 12;
            newAmount = (75 / 100) * newAmount;
            number.textContent = `$${newAmount}.00`;
            frequency.forEach(item => item.innerText = "/ year")
            return;
        }
        let newAmount = currentValue.price;
        number.textContent = `$${newAmount}.00`;
        frequency.forEach(item => item.innerText = "/ month")
    })
    
}
console.log(frequency.innerHTML)

let selectedValue = textValues[0]
slider.addEventListener('input', function () {
    const sliderValue = parseInt(slider.value);
    updateSliderText(sliderValue);
    selectedValue = textValues[sliderValue];
});


// selectedValue = textValues[newValue]

function handleChange() {
    updateSliderText(parseInt(slider.value));
}
toggle.addEventListener('change', handleChange)


