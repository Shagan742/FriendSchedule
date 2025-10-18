let output = document.getElementById("output")


async function loadSchedule(file) {

    try {
        const res = await fetch(file);
        const data = await res.json();

        data.forEach(class => {
            output.insertAdjacentHTML('beforeend', `
            <div class="card h-100">
  <div class="card-img" id="rectangle">
  <div class="card-body">
    <p class="card-text">
    <ul>
        <li>${class.className}</li>
        <li>${class.teacher}</li>
        <li>${class.roomNumber}</li>
        <li>${class.period}</li>
        <li>${class.subjectArea}</li>
    </ul>
    </p>
  </div>
</div>`)


        })
    } catch (err) {
        output.insertAdjacentHTML('beforeend', 'Error: ' + err)
    }



}


document.getElementById("output").addEventListener("keydown", btn => {
    if (btn.key === '1') {
        loadSchedule("shagan.json")
    } else if (btn.key === '2') {
        loadSchedule("kristen.json")
    } else if (btn.key === '3') {
        loadSchedule("yasmina.json")
    } else if (btn.key === '4') {
        loadSchedule("shagan.json")
    }
})