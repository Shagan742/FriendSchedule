let output=document.getElementById("output")


async function loadSchedule() {
    try {
        const res = await fetch("shagan.json")
        const data = await res.json();
        data.forEach(class => {
            output.innerHTML+=`
            <div class="card" style="width: 18rem;">
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
</div>
            `
        });
    } catch(err) {
        output.innerHTML='Error loading schedule: ' + err
    }
}

loadSchedule();


// document.getElementById("output").addEventListener("keydown", key=> {
//     if(key.key==='1') {
//         aaa
//     }
// })