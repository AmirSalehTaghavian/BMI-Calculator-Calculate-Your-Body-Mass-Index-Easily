

let $ = document

const weightElem = $.getElementById('weight')
const heightElem= $.getElementById('height')
const weightval= $.getElementById('weight-val')
const heightval= $.getElementById('height-val')
const bmiresult= $.getElementById('result')
const categoryElem= $.getElementById('category')

function bmi() {
    let weightInputvalue = weightElem.value 
    let heightInputvalue = heightElem.value 

weightval.innerHTML = weightInputvalue +'kg'
heightval.innerHTML = heightInputvalue +'cm'

    let bmiValue = (weightInputvalue / (Math.pow(heightInputvalue/100,2))).toFixed(1)

    console.log(bmiValue);

    bmiresult.innerHTML = bmiValue

    if(bmiValue < 18.5){
categoryElem.innerHTML = 'Underweight'
bmiresult.style.cssText= 'color:#ffc44d'
    }else if(bmiValue>=18.5 && bmiValue< 24.5){
categoryElem.innerHTML = 'Normalweight'
bmiresult.style.cssText= 'color:#0be881'
    }else if(bmiValue>=25 && bmiValue< 29.9){
categoryElem.innerHTML = 'Overweight'
bmiresult.style.cssText= 'color:#ff884d'
    }else{
categoryElem.innerHTML = 'Obese'
bmiresult.style.cssText= 'color:#ff5e4d'
    }
}



weightElem.addEventListener('input', bmi)
heightElem.addEventListener('input', bmi)