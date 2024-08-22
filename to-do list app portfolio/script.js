const inputBox = document.querySelector('#input-box');
const listContainer = document.querySelector('#list-container');


function addTask(){

    if(inputBox.value === ''){
        alert('Please enter a task');
    } else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();

    } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }


}, false);

//To store the input data in the browser so the user can retrieve whenever he comes back.

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

//To display the data whenever the user comes back to the website.

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();