// Task 1: Simple Calculator
function simpleCalculator(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return 'Invalid operator';
    }
}

// Handling the form submission for the calculator
document.getElementById('calculator-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;
    const result = simpleCalculator(num1, num2, operator);
    document.getElementById('calculator-result').textContent = `Result: ${result}`;
});

// Task 2: Array Operations
function sumOfEvenNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sum += arr[i];
        }
    }
    return sum;
}

// Handling the form submission for array operations
document.getElementById('array-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way
    const inputArray = document.getElementById('array-input').value.split(',').map(Number);
    const sumEven = sumOfEvenNumbers(inputArray);
    document.getElementById('array-result').textContent = `Sum of Even Numbers: ${sumEven}`;
});

// Task 3: Object Manipulation
let person;

function createPerson(firstName, lastName, age) {
    return {
        firstName: firstName,
        lastName: lastName,
        age: age,
        getFullName: function() {
            return `${this.firstName} ${this.lastName}`;
        },
        incrementAge: function() {
            this.age += 1;
        }
    };
}

// Handling input change for person form
document.getElementById('person-form').addEventListener('input', function() {
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const age = parseInt(document.getElementById('age').value);
    
    if (firstName && lastName && !isNaN(age)) {
        person = createPerson(firstName, lastName, age);
        document.getElementById('person-info').textContent = `Full Name: ${person.getFullName()}, Age: ${person.age}`;
        document.getElementById('increment-age-btn').style.display = 'inline-block';
    } else {
        document.getElementById('person-info').textContent = '';
        document.getElementById('increment-age-btn').style.display = 'none';
    }
});

// Handling the increment age button click
document.getElementById('increment-age-btn').addEventListener('click', function() {
    if (person) {
        person.incrementAge();
        document.getElementById('person-info').textContent = `Full Name: ${person.getFullName()}, Age: ${person.age}`;
    }
});
