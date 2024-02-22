function deleteNote(noteId){
    fetch('/delete-note',{
        method: 'POST',
        bosy: JSON.stringify({ noteId: noteId}),    
    }).then((_res)=>{
        window.location.href="/";
    })
}