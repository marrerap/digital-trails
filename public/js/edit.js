const db = require("../../models")

bioForm.addEventListener('submit', (e) => {
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('update-button')) {
        //get input
        const editField = document.getElementById(`editBio`)
        //get the text from the edit field
        const newValue = editField.value
        //send a PATCH rquest to /api/v1/todos/{id}
        fetch(`/edit`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            text: newValue
          })
        })
          .then(res => !res.ok && res.json())
          .then(data => {
            if (data.error) {
              alert(data.error)
            }
            db.Hiker.update 
          })
          //then refresh
    }
  })
})