let output = document.getElementById("output")


async function loadSchedule(file) {
output.innerHTML=''


//this edits the the file string to let me put an h3 where I can identify whose schedule I'm showing
let personName=file.slice(1, file.length-5);
let capitalizedInitial=file.charAt(0).toUpperCase();
let completedName=capitalizedInitial+personName;
    try {
        const res = await fetch(file);
        const data = await res.json();
output.insertAdjacentHTML('beforeend', `<h3 class="name mt-5 mb-3">${completedName}'s schedule</h3>`)
        
        for(const classes of data) {
            output.insertAdjacentHTML('beforeend',`

                <div class="col-4 m-3">
            <div class="card h-100">
  <div class="card-body">
    <p class="card-text">
    <strong class="gottaEdit">Period ${classes.period}</strong>
    <ul>
        <li><strong>Class Name:</strong> ${classes.className}</li>
        <li><strong>Teacher:</strong> ${classes.teacher}</li>
        <li><strong>Room</strong> ${classes.roomNumber}</li>
        <li><strong>Subject Area:</strong> ${classes.subjectArea}</li>
    </ul>
    </p>
  </div>
</div>
</div>`)


        }
    } catch (err) {
        output.insertAdjacentHTML('beforeend', 'Error: ' + err)
    }



}

loadSchedule("shagan.json")
document.getElementById("btn").addEventListener("keydown", btn => {
    if (btn.key === '1') {
        loadSchedule("kristen.json")
    } else if (btn.key === '2') {
        loadSchedule("yasmina.json")
    } else if (btn.key === '3') {
        loadSchedule("amelia.json")
    } else {
       loadSchedule("shagan.json")
    }

    

})

