//identify form
let noteForm = document.querySelector("#note-form");
// console.log(noteForm);

//event listener for new note button
noteForm.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("this happened");

  let noteTextInput = document.querySelector("#notes-text");
  let noteText = noteTextInput.value;
//   console.log(noteText)
//create the new note in our database
  noteTextInput.value = "";
  createNewNote(noteText)
});

//FETCH 
function createNewNote(noteText) {
    fetch("http://localhost:3000/notes/" , {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ body: noteText, done: false, created: moment().format()})
})

.then(response => response.json)
.then(data => console.log(data))}

