let output = document.getElementById("output") //define output


async function loadSchedule(file) { //function loads and that file is the file i want to load under eventListener conditions below
    output.innerHTML = '' //empties HTML before it


    //this edits the the file thing to let me put an h3 where I can identify whose schedule I'm showing
    let personName = file.slice(1, file.length - 5);
    let capitalizedInitial = file.charAt(0).toUpperCase();
    let completedName = capitalizedInitial + personName;




    //try to get the json file and do stuff with it
    try {
        const res = await fetch(file); //get the file and convert it to what i need
        const data = await res.json();

        //whoever's schedule is shown is identified
        output.insertAdjacentHTML('beforeend', `<h3 class="name mt-5 mb-3">${completedName}'s schedule</h3>`)
        
//for every class of my data i got, put the person's info abt each class in cards
        for (const classes of data) {
            //decided to insert HTML the long way, making it = some big card string with json data in it
            const html = `

                <div class="col-md-4 col-sm-10 my-3">
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
</div>`
            output.insertAdjacentHTML('beforeend', html) //my html is now shown

        }
    } catch (err) { //if that file isn't there, this shall show.
        output.insertAdjacentHTML('beforeend', 'Error: ' + err)
    }



}

//all 3 of these tell to load person's schedule based on what key you press on keyboard
document.addEventListener("keydown", e => {
if (e.key === '1') {
        loadSchedule("kristen.json")
        return;
    }
}) 
document.addEventListener("keydown", e => {
if (e.key === '2') {
        loadSchedule("yasmina.json")
        return;
    }
}) 
document.addEventListener("keydown", e => {
if (e.key === '3') {
        loadSchedule("amelia.json")
        return;
    }
}) 



//resets so user can review default schedule with the click of that button
document.getElementById("reset").addEventListener("click", () => {
    loadSchedule("shagan.json")
})

//by default, load this schedule
loadSchedule("shagan.json")