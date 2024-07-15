function showOutput(){
    let firstNumber = document.querySelector("#first-number").value;
    let secondNumber = document.querySelector("#second-number").value;
    let number = firstNumber * secondNumber;
    document.querySelector("#output").textContent = "The answer you get when you multiply " + firstNumber + " and " +  secondNumber + 
    ", is " + number
    document.querySelector("#output").style.color = "red";
}
document.querySelector("#btn").addEventListener("click", showOutput)