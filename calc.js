function addNumbers() 
{
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let result = parseFloat(num1) + parseFloat(num2);
    alert('The result is: ' + result);
}

function subtractNumbers()
{
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let result = parseFloat(num1) - parseFloat(num2);
    alert('The result is: ' + result);
}

function multiplyNumbers() 
{
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let result = parseFloat(num1) * parseFloat(num2);
    alert('The result is: ' + result);
}

function divideNumbers() 
{
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    if (parseFloat(num2) === 0)
     {
        alert('Error: Division by zero is not allowed.');
    } 
    else 
    {
        let result = parseFloat(num1) / parseFloat(num2);
        alert('The result is: ' + result);
    }
}
function clearDisplay() 
{
    document.getElementById('display').value = '';
    document.getElementById('answer').innerText = '';
}