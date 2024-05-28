function checkArmstrong() {
    let num = document.getElementById('numberInput').value;
    let resultElement = document.getElementById('result');

    // Validate the input
    if (num === '') {
        resultElement.textContent = 'Please enter a number';
        resultElement.style.color = 'red';
        return;
    }

    if (isNaN(num)) {
        resultElement.textContent = 'Please enter a valid number';
        resultElement.style.color = 'red';
        return;
    }

    // Original JavaScript logic
    let numLen = num.length;
    let list1 = [];
    let res = 0;

    for (let i = 0; i < numLen; i++) {
        list1.push(parseInt(num[i]));
    }

    for (let i = 0; i < list1.length; i++) {
        res += list1[i] ** numLen;
    }

    if (res == num) {
        resultElement.textContent = `${num} is an Armstrong number`;
        resultElement.style.color = 'green';
    } else {
        resultElement.textContent = `${num} is not an Armstrong number`;
        resultElement.style.color = 'red';
    }
}