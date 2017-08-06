let calculator = document.getElementById('calculator');
let btns = document.getElementsByClassName('btn');
let  result = document.getElementById("result");
// let buttons = ['7','8','9','/','4','5','6','*','1','2','3','-','0','.','=','+']
//

let array = [];

for(var i = 0; i < btns.length; i++){
  btns[i].addEventListener("click", callBack);
  // result.contexText = btns[i];
  // console.log(btns[i]);
}

function callBack(e) {
  // console.log("Button hit", e.target.innerHTML);
  result.textContent += e.target.innerHTML;
if (e.target.innerHTML === "=") {
  // console.log("You pressed equal");
  let sum = eval(array.join(""));

  array = [sum];

result.textContent = sum;
} else if (e.target.innerHTML === "Clear") {
  array = [];

result.textContent = "";
} else {

  array.push(e.target.innerHTML);
  console.log(array);
}

}
console.log(array);

// eval()
