const selectedColor = document.querySelector('#color');
const divsIn = document.querySelector('.container');
const allDivs = Object.values(divsIn.children)

selectedColor.addEventListener('input',()=>{
    divsIn.innerHTML = '';
    allDivs.forEach(el =>{
        if (selectedColor.value === 'all'){
            divsIn.appendChild(el)
        }
        else if (el.className.endsWith(selectedColor.value)){
            divsIn.appendChild(el)
        }
    })
})