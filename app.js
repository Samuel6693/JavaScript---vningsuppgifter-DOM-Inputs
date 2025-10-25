// uppgift 1------------

const addTaskButton = document.getElementById('addTaskButton')
const taskInput = document.getElementById('taskInput')
const ul = document.getElementById('taskList')
const li = document.getElementById('taskItem')


addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim()
    const maxTasks = 5
        if (ul.children.length >= maxTasks) {
        alert('Maximum number of tasks reached.')
        }
        else if (taskText !== '') {
        const taskItem = document.createElement('li')
        taskItem.textContent = taskText
        taskItem.className = 'taskItem'
        const deleteBtn = document.createElement('button')
        deleteBtn.textContent = 'Delete'
        deleteBtn.className = 'deleteBtn'
        
        deleteBtn.addEventListener('click', () => {
            ul.removeChild(taskItem)
        })

        ul.append(taskItem)
        taskItem.append(deleteBtn)

        taskInput.value = ''
        }
    
    });


    // uppgift 2 -----------

const tal1 = document.getElementById('tal1');
const tla2 = document.getElementById('tal2');
const total = document.getElementById('total');

const addition = document.getElementById('addition');
const subtraction = document.getElementById('subtraction');
const multiply = document.getElementById('multiply');
const division = document.getElementById('division');

const calculate = (operation) => {
    const num1 = +tal1.value;
    const num2 = +tla2.value;
    let result;     
    switch (operation) {
        case 'addition':
            result = num1 + num2;   
            break;
        case 'subtraction':
            if (num2 > num1) {
                alert("Error: The second number cannot be greater than the first number for subtraction.");
                return;
            }
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'division':
            if (num2 === 0) {
                alert("Devisiom by zero is not allowed.")
                return;
            }
            result = num1 / num2;
            break;
        default:
            return;
    }
    total.value = result;
}

addition.addEventListener('click', () => calculate('addition'));
subtraction.addEventListener('click', () => calculate('subtraction'));
multiply.addEventListener('click', () => calculate('multiply'));
division.addEventListener('click', () => calculate('division'));


// addtion.addEventListener('click', () => {
//     const summan = +tal1.value + +tla2.value;
//     total.value = summan 
// });

// Subtraction.addEventListener('click', () => {
//     if (tla2 > tal1) {
//         alert("");
//         return;
//     } else {
//         const summan = +tal1.value - +tla2.value;
//         total.value = summan
//     }
// });

// multiply.addEventListener('click', () => {
//     const summan = +tal1.value * +tla2.value;
//     total.value = summan 
// });

// division.addEventListener('click', () => {
//     const summan = +tal1.value / +tla2.value;
//     total.value = summan 
// });


// uppgift 3 ------------

let number = document.getElementById('numberInput')

number.addEventListener ('input', (e) => {
    if (number.value < 0 || number.value > 10) {
        alert("The number must be between 0 and 10")
        e.target.style.color = "black"
    } else if (number.value < 4) {
        e.target.style.color = "red"
    } else if (number.value <= 7) {
        e.target.style.color = "orange"
    } else {
        e.target.style.color = "green"
    }
})