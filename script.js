var allStudents = []
var editIndex;

function AddInfo() {

    var student = {
        FirstName: fn.value,
        LastName: ln.value,
        Email: em.value,
        Password: ps.value,
    }
    allStudents.push(student)
    fn.value = "";
    ln.value = "";
    em.value = "";
    ps.value = "";
    displayStudents();
    console.log(allStudents)

}

function displayStudents(index) {
    display.innerHTML = "";
    display.innerHTML += ` <table class="table table-striped" id="myTable"
   
    <tr>
    <th>S/N</th>
       <th>First Name</th>
       <th>Last Name</th>
        <th>Email</th>
        <th>Actions</th>
    </tr>

`
    for (let index = 0; index < allStudents.length; index++) {
        myTable.innerHTML += ` <tr>
        <td>${index+1}</td>
        <td>${allStudents[index].FirstName}</td>
    <td>${allStudents[index].LastName}</td>
    <td>${allStudents[index].Email}</td>
    <td>
    <button onclick="deleteStudent(${index})" style="border: none;"><i class="fa-solid fa-trash fa-lg" style="color: #dd1313;"></i></button>
    <button onclick="editStudent(${index})" style="border: none;" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa-solid fa-pencil fa-lg" style="color: #0d1dfd;"></i></button>
    </td>
    </tr>
    `
        display.innerHTML += `</table>`
    }
}

function deleteStudent(index) {
    allStudents.splice(index, 1)
    displayStudents();
}

function editStudent(index) {
    editedIndex = index
}

function SaveStudent(editedIndex) {

    var replacement = {
        FirstName: editedFn.value,
        LastName: editedLn.value,
        Email: editedEm.value,
        Password: editedPs.value,
    }
    allStudents.splice(editedIndex, 1, replacement)
    console.log(editedFn.value);
    displayStudents();



}