document.addEventListener('DOMContentLoaded', function () {
    let noteInput = document.getElementById('note');
    let notesList = document.getElementById('notesList');

    function makeNewNote() {
        if (!noteInput.value.trim()) return alert("Please enter a note!");

        let newElement = document.createElement('div');
        newElement.classList.add('note-card'); // Apply note card styling

        let noteText = document.createElement('p');
        noteText.textContent = noteInput.value;

        let buttonContainer = document.createElement('div'); 
        buttonContainer.classList.add('note-buttons'); // Align buttons properly

        // Create Trash Button
        let trashButton = document.createElement('button');
        trashButton.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
        trashButton.classList.add('trash-btn');
        trashButton.onclick = function () {
            newElement.remove(); // Deletes the note
        };

        // Create Color Buttons
        let blueButton = document.createElement('button');
        blueButton.classList.add('blue-btn');
        blueButton.style.backgroundColor = 'rgb(118, 127, 255)';

        let redButton = document.createElement('button');
        redButton.classList.add('red-btn');
        redButton.style.backgroundColor = 'rgb(255, 118, 118)';

        let greenButton = document.createElement('button');
        greenButton.classList.add('green-btn');
        greenButton.style.backgroundColor = 'rgb(125, 255, 118)';

        // Add buttons to button container
        buttonContainer.appendChild(blueButton);
        buttonContainer.appendChild(redButton);
        buttonContainer.appendChild(greenButton);
        buttonContainer.appendChild(trashButton);

        // Add note text and buttons to the note card
        newElement.appendChild(noteText);
        newElement.appendChild(buttonContainer);

        // Append note card to the notes list
        notesList.appendChild(newElement);

        noteInput.value = ''; // Clear input
    }

    // Ensure color change logic works
    document.addEventListener("click", function(event) {
        if (event.target.classList.contains("blue-btn") || 
            event.target.classList.contains("red-btn") || 
            event.target.classList.contains("green-btn")) {
            
            let noteCard = event.target.closest(".note-card");

            // Remove existing color classes before applying a new one
            noteCard.classList.remove("blue-note", "red-note", "green-note");

            // Apply the new color
            if (event.target.classList.contains("blue-btn")) {
                noteCard.classList.add("blue-note");
            } else if (event.target.classList.contains("red-btn")) {
                noteCard.classList.add("red-note");
            } else if (event.target.classList.contains("green-btn")) {
                noteCard.classList.add("green-note");
            }
        }
    });

    document.getElementById('addNoteBtn').onclick = makeNewNote;
});
