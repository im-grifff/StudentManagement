var studentsData = [{
        id: 1,
        NIM: 105011810001,
        fullName: 'Griffin Mumu',
        gender: 'Male',
        fakultas: 'FIK',
        prodi: 'Informatika',
    },
    {
        id: 2,
        NIM: 103021810001,
        fullName: 'Starry Night',
        gender: 'Male',
        fakultas: 'FIK',
        prodi: 'Sistem Informasi',
    },
    {
        id: 3,
        NIM: 105021810002,
        fullName: 'Oktafia Menajang',
        gender: 'Female',
        fakultas: 'FIK',
        prodi: 'Informatika',
    }
]

function DataStudents(studentsData) {
    const table = document.getElementById("students");
    studentsData.forEach(item => {
        let row = table.insertRow();
        let NIM = row.insertCell(0);
        NIM.innerHTML = item.NIM;
        let fullName = row.insertCell(1);
        fullName.innerHTML = item.fullName;
        fullName.className = "fullname";
        let gender = row.insertCell(2);
        gender.innerHTML = item.gender;
        let fakultas = row.insertCell(3);
        fakultas.innerHTML = item.fakultas;
        fakultas.className = "fakultas";
        let prodi = row.insertCell(4);
        prodi.innerHTML = item.prodi;
        prodi.className = "prodi";
        let action = row.insertCell(5);
        action.innerHTML = `<button type = "button"class = "btn btn-outline-danger" onClick='onDelete(this)'><i class = "bi bi-trash"></i></button>`;
    })
}
DataStudents(studentsData);

// =====================  INPUT DATA ==================
var selectedRow = null;

function onFormSubmit(e) {
    event.preventDefault();
    var formData = readFormData();
    InsertNewRecord(formData);
    resetForm();
}

function readFormData() {
    var formData = {};
    formData["nimform"] = document.getElementById("nimform").value;
    formData["nameform"] = document.getElementById("nameform").value;

    if (document.getElementById('maleform').checked) {
        formData["gender"] = "Male";
    } else {
        formData["gender"] = "Female";
    }

    formData["fakultas"] = document.getElementById("fakultas").value;
    formData["prodi"] = document.getElementById("prodi").value;

    return formData;
}

function InsertNewRecord(data) {
    var table = document.getElementById("TabelStudents").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.lenght);

    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.nimform;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.nameform;
    cell2.className = "fullname";
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.gender;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.fakultas;
    cell4.className = "fakultas";
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.prodi;
    cell5.className = "prodi";
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = `<button type = "button"class = "btn btn-outline-danger" onClick='onDelete(this)'><i class = "bi bi-trash"></i></button>`;
}

//del

function onDelete(td) {
    if (confirm('Are you sure want to delete this student ?')) {
        row = td.parentElement.parentElement;
        document.getElementById('TabelStudents').deleteRow(row.rowIndex);
    }
    resetForm();
}

//res

function resetForm() {
    document.getElementById("nimform").value = '';
    document.getElementById("nameform").value = '';
    document.getElementById("maleform").checked = false;
    document.getElementById("femaleform").checked = false;
    document.getElementById("fakultas").value = '';
    document.getElementById("prodi").value = '';
}


// ======== SEARCHING ===============

function searchName() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchAll");
    filter = input.value.toUpperCase();
    table = document.getElementById("TabelStudents");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByClassName("fullname")[0];
        if (td) {
            txtValue = td.textContent || td.innerText || td.value;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function filter() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("filterFakultas");
    filter = input.value.toUpperCase();
    table = document.getElementById("TabelStudents");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByClassName("fakultas")[0];
        if (td) {
            txtValue = td.textContent || td.innerText || td.value;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function filter2() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("filterProdi");
    filter = input.value.toUpperCase();
    table = document.getElementById("TabelStudents");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByClassName("prodi")[0];
        if (td) {
            txtValue = td.textContent || td.innerText || td.value;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}