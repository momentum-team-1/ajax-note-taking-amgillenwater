//identify form
let noteForm = document.querySelector("#note-form");
// console.log(noteForm);
let noteList = document.querySelector("#notes");

//event listener for new note button
noteForm.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("this happened");

  let noteTextInput = document.querySelector("#notes-text");
  let noteText = noteTextInput.value;
  //   console.log(noteText)
  //create the new note in our database
  noteTextInput.value = "";
  createNewNote(noteText);
});

//FETCH
function createNewNote(noteText) {
  fetch("http://localhost:3000/notes/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      body: noteText,
      done: false,
      created: moment().format(),
    }),
  })
    .then((response) => response.json)
    .then((data) => console.log(data));
}

//RENDER FROM SERVER - USE GET REQUEST
function renderNote() {
  fetch("http://localhost:3000/notes/", {
    method: "GET",
  })
    .then((response) => response.json())
    .then(function (data) {
      console.log(data);
      //   //add note to DOM from server
      let notes = document.createElement("ul");
      for (let item of data) {
        let listItem = document.createElement("li");
        listItem.dataset.id = item.id;
        listItem.innerText = item.body;
        //what is item.item?
        let deletePage = document.createElement("span");
        deletePage.id = "delete";
        deletePage.classList.add("fa", "fa-trash", "mar-l-xs");
        listItem.appendChild(deletePage);
        notes.appendChild(listItem);
      }
      noteList.appendChild(notes);
    });
}
renderNote()

noteList.addEventListener("click", function (event) {
    console.log(event.target)
    if (event.target.matches("#delete")){
        console.log("DELETE")
    }
})




