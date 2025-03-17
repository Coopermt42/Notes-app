let noteInput = document.getElementById('note');
let notesList = document.getElementById('notesList')

function makeNewNote() {
    if (!noteInput.value.trim()) return alert("Please enter a note!");

    let newElement = document.createElement('div');
    newElement.classList.add('note-card'); // Apply note card styling

    let noteText = document.createElement('p');
    noteText.textContent = noteInput.value;

    // Create the trash can button
    let trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
    trashButton.classList.add('trash-btn');
    trashButton.onclick = function () {
        deleteNote(newElement);
    };

    /* Create the check button
    let checkButton = document.createElement('button');
    checkButton.innerHTML = '<i class="fa-regular fa-square-check"></i>';
    checkButton.classList.add('check-btn');
    checkButton.onclick = function () {
        noteText.classList.toggle('crossed-out'); // Cross out the note when clicked
    };
    */

    // Add buttons and text to the note card
    newElement.appendChild(noteText); // Add note text
    // newElement.appendChild(checkButton); // Add check button
    newElement.appendChild(trashButton); // Add trash button

    // Append note card to the notes list
    notesList.appendChild(newElement);

    noteInput.value = ''; // Clear input
}

function crossOutNote(noteElement) {
    noteElement.classList.toggle('crossed-out'); // Toggles the crossed-out class
}

function deleteNote(noteElement) {
    noteElement.remove(); // This will delete the whole note
}