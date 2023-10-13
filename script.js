function calculate(){ //write function() then name of the function
    let number1AsText = document.getElementById("number1").value;
    let number2AsText = document.getElementById("number2").value; //add value
    let number1 = Number.parseFloat(number1AsText)
    let number2 = Number.parseFloat(number2AsText)
    let result = number1 + number2; //result equal to numer1 + number2
    showText("mathSpan", result) //pass the result
}

function showDate(){
    let today = new Date(); //to make date readable
    let formattedDate = today.toLocaleDateString(); //converting date object into string, this format corresponds to browser setting
    showText("dateDiv", formattedDate);
}

function changeText(){
    let elementText = document.getElementById("stringDiv").innerText; //since element is not input, we will write innerText property
    let upperCaseText = elementText.toUpperCase();
    showText("stringDiv", upperCaseText);
}

function showText(id, text){ //first parameter is id and second one is text that we want to show in element
    var element = document.getElementById(id);
    element.innerHTML = text;
}