// Task 2 - Employee Cards Dynamic Addition

// Select the container where employee cards will be added
const employeeContainer = document.getElementById("employeeContainer");

// Function to add an employee card
function addEmployeeCard(name, position) {
    // Create the card
    const card = document.createElement("div");
    card.setAttribute("class", "employee-card");

    // Create name heading
    const nameHeading = document.createElement("h3");
    nameHeading.textContent = name;

    // Create position paragraph
    const positionParagraph = document.createElement("p");
    positionParagraph.textContent = position;

    // Create remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.onclick = function(event) {
        card.remove(); // Remove the card when clicked
        event.stopPropagation(); // Prevent bubbling
    };

    // Append all elements to the card
    card.appendChild(nameHeading);
    card.appendChild(positionParagraph);
    card.appendChild(removeButton);

    // Append the card to the container
    employeeContainer.appendChild(card);
}

// Test: Adding an employee card
addEmployeeCard("Sophia Kirschner", "Account Executive");
addEmployeeCard("Fabiana Requena", "Account Director");

// Task 3 - Bulk Update on Employee Cards

// Function to highlight all employee cards
function highlightEmployeeCards() {
    // Select all employee cards using querySelectorAll
    const employeeCards = document.querySelectorAll('.employee-card');

    // Convert NodeList to Array using Array.from()
    const employeeCardsArray = Array.from(employeeCards);

    // Use .forEach() to loop through each card and add the highlight class
    employeeCardsArray.forEach(function(card) {
        card.classList.add('highlight'); // Add the highlight class to each card
    });
}



