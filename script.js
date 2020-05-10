console.log("hello");
//identify form
let noteForm = document.querySelector('#note-form')
console.log(noteForm)

//event listener for new note button
noteForm.addEventListener("submit", function(event) {
    console.log("submit pressed");
    event.preventDefault();
})
