
let members = [];

function initialize() {

    const MEMBER_FORM = document.getElementById("member_form");
    MEMBER_FORM.addEventListener("submit", addMember);

    showMembers();
}

function addMember(event) {
    event.preventDefault();

    const NAME = event.target.name.value;
    var age = event.target.age.value;
    var gender = event.target.gender.value;

    if (NAME == "") {

        let NAME_ERROR = document.getElementById("name-error");
        NAME_ERROR.style.visibility = "visible";

    } else {

        if (age == "" || age == "0") {

            age = "Any";
        }

        if (gender == "" || gender != "MALE") {

            if (gender != "FEMALE")

                gender = "Any";

        }

        members = retrieveMember();

        members.push({
            name: NAME,
            age: age,
            gender: gender

        })

        saveMember(members);

    }

    showMembers();
}

function showMembers() {
    const MEMBER_LIST = document.getElementById("member-list");
    let allMembers = "";

    members = retrieveMember();

    for (let i = 0; i < members.length; i++) {

        allMembers += `<li>${members[i].name} / ${members[i].age} / ${members[i].gender}  <button onclick="deleteMember(${i})">DELETE</button> <button onclick="updateMember(${i})">UPDATE</button></li>`;

    }

    saveMember(members);

    MEMBER_LIST.innerHTML = allMembers;
}


function deleteMember(memberId) {

    members = retrieveMember();
    members.splice(memberId, 1);
    saveMember(members);

    showMembers();
}

function updateMember(memberId) {

    members = retrieveMember();
    members.splice(memberId, 1);
    saveMember(members);

    var name_update = document.getElementById("name");
    var age_update = document.getElementById("age");
    var gender_update = document.getElementById("gender");

    name_update.value = NAME;
    age_update.value = age;
    gender_update.value = gender;

    showMembers();
}

function saveMember(data) {

    var dataJSON = JSON.stringify(data);
    localStorage.setItem("members", dataJSON);

}

function retrieveMember() {

    var recoverJSON = localStorage.getItem("members");
    return JSON.parse(recoverJSON) || [];

}

initialize();