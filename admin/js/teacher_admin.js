const data_all = JSON.parse(window.localStorage.getItem('data_all'));

id = localStorage.length;
console.log(id)
userForm.id.value = id;

function delete_user(obj){
    row = obj.parentElement.parentElement;
    id = row.firstElementChild.innerHTML;
    localStorage.removeItem(id);
    row.remove();
}

function edit_user(obj) {
    row = obj.parentElement.parentElement.children;
    userForm.id.value = row[0].innerHTML;
    userForm.fullName.value = row[1].innerHTML;
    userForm.position.value = row[2].innerHTML;
    userForm.dateOfBorned.value = row[3].innerHTML;
    userForm.phone.value = row[4].innerHTML;
    userForm.email.value = row[5].innerHTML;
    userForm.address.value = row[6].innerHTML;
}


function read_data() {
    tbody = document.getElementById("data");
    tbody.innerHTML = null;

    console.log(data_all.teachers[0]);
    for (i = 0; i < data_all.teachers.length; i++) {
        row = tbody.insertRow(-1);
        cell0 = row.insertCell(0);
        cell1 = row.insertCell(1);
        cell2 = row.insertCell(2);
        cell3 = row.insertCell(3);
        cell4 = row.insertCell(4);
        cell5 = row.insertCell(5);
        cell6 = row.insertCell(6);
        cell7 = row.insertCell(7);
        cell8 = row.insertCell(8);
         user_data = JSON.parse(localStorage.getItem(localStorage.key(i)));

        cell0.innerHTML = data_all.teachers[i].id;
        cell1.innerHTML = data_all.teachers[i].name;
        cell2.innerHTML = data_all.teachers[i].position;
        cell3.innerHTML = data_all.teachers[i].dateOfBorned;
        cell4.innerHTML = data_all.teachers[i].phone;
        cell5.innerHTML = data_all.teachers[i].email;
        cell6.innerHTML = data_all.teachers[i].address;
        cell7.innerHTML = `<span onclick="edit_user(this)"><i class="fas fa-edit"></i><span>`;
        cell8.innerHTML = `<span onclick="delete_user(this)"><i class="fas fa-trash"></i><span>`;

    }

}