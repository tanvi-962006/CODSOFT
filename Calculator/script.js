let buttons = document.querySelectorAll(".item");
let display = document.querySelector(".calc-input");
let operators = ["+", "-", "x", "÷", "."];

buttons.forEach(button => {
button.addEventListener("click", function(e){
    const selectedNumber = e.target.value;
    if(selectedNumber === "AC"){
        display.value = "";
        return;
    }
    else if(selectedNumber === "DEL"){
        display.value = display.value.slice(0,-1);
        return;
    }
    else if(selectedNumber === "="){
        try{
             let expression = display.value.replace(/x/g, "*").replace(/÷/g, "/");

            display.value = eval(expression);
            
        }        catch{
            display.value = "Error";
    
        }
        return;
    }
     else if(operators.includes(selectedNumber)){
            let lastChar = display.value.slice(-1);

            if(operators.includes(lastChar)){
                return;
            }

            if(display.value === "" && selectedNumber !== "-"){
                return;
            }
            display.value += selectedNumber;
        }
        else{

     
    display.value += selectedNumber;
        }
    
})
})
