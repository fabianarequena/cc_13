// Task 2 - Adding Employee Cards Dynamically
function addEmployeeCard(name, position) {
    const container = document.getElementById("employeeContainer");
    
    // Create employee card
    const card = document.createElement("div");
    card.classList.add("employee-card");
    
    // Employee name
    const employeeName = document.createElement("h3");
    employeeName.textContent = name;
    
    // Employee position
    const employeePosition = document.createElement("p");
    employeePosition.textContent = position;
    
    // Remove button
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", function(event) {
        event.stopPropagation(); // Prevent event bubbling
        container.removeChild(card);
    });
    
    // Edit functionality
    card.addEventListener("dblclick", function() {
        editEmployeeCard(card, employeeName, employeePosition);
    });
    
    // Append elements to card
    card.appendChild(employeeName);
    card.appendChild(employeePosition);
    card.appendChild(removeButton);
    
    // Append card to container
    container.appendChild(card);
}

// Task 3 - Bulk Update on Employee Cards
function highlightAllEmployees() {
    const cards = Array.from(document.querySelectorAll(".employee-card"));
    cards.forEach(card => {
        card.classList.add("highlight"); // Assume 'highlight' class is defined in CSS
    });
}

// Task 4 - Implementing Removal of Employee Cards with Event Bubbling
document.getElementById("employeeContainer").addEventListener("click", function() {
    console.log("An employee card was clicked!");
});

// Task 5 - Inline Editing of Employee Details
function editEmployeeCard(card, nameElement, positionElement) {
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.value = nameElement.textContent;
    
    const positionInput = document.createElement("input");
    positionInput.type = "text";
    positionInput.value = positionElement.textContent;
    
    const saveButton = document.createElement("button");
    saveButton.textContent = "Save";
    saveButton.addEventListener("click", function() {
        nameElement.textContent = nameInput.value;
        positionElement.textContent = positionInput.value;
        
        card.replaceChild(nameElement, nameInput);
        card.replaceChild(positionElement, positionInput);
        card.replaceChild(removeButton, saveButton);
    });
    
    card.replaceChild(nameInput, nameElement);
    card.replaceChild(positionInput, positionElement);
    card.replaceChild(saveButton, card.querySelector("button"));
}

// Example usage
addEmployeeCard("Fabiana Requena", "Account Executive");
addEmployeeCard("Sophia Kirschner", "Account Manager");