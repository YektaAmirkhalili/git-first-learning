function calculateBMI(){
  let h = document.getElementById('height').value;
  let w = document.getElementById('weight').value;
  let bmi = 0;
  bmi = Number(w) / ((Number(h) / 100) ** 2);

  return bmi;
}


let calc_btn = document.querySelector('.btn-calc');
let result_box = document.querySelector('.result');

calc_btn.addEventListener('click', () => {
  let b = calculateBMI();
  let result = document.createElement('p',{}, );
  result.innerText = b.toFixed(2);

  
  result_box.appendChild(result);
});






