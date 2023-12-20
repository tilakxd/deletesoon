const container = document.querySelector('.container');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    container.textContent = ''
    let pixels = input.value;
    console.log(pixels);
    if (pixels > 100) {
        pixels = 100;
        input.value = 'set to 100';
    }
    for (let i = 0; i < pixels; i++) {
        const horizantal = document.createElement('div');
        horizantal.classList.add('horizantal');
        for (let y = 0; y < pixels; y++) {
            const indv = document.createElement('div');
            indv.classList.add('indv');
            horizantal.appendChild(indv);
        }
        container.appendChild(horizantal);
        
    }
});

container.addEventListener('mouseover', function (event) {
    if (event.target.classList.contains('indv')) {
        event.target.style.backgroundColor = 'red';
    }
});


