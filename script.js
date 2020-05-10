//identify form
let noteForm = document.querySelector("#note-form");
// console.log(noteForm);

//event listener for new note button
noteForm.addEventListener('submit',function(event){
    event.preventDefault() 
    console.log("this happened")

    let noteTextInput = document.querySelector('#notes-text')
    let noteText = noteTextInput.value

    noteTextInput.value = ''
    // createNewNote(noteText)
})


