let cats = [

    {
        name: "Jinx",
        age: 3,
        gender: "Female"
    },
    {
        name: "Winston",
        age: 5,
        gender: "Male"
    },
    {
        name: "Maxwell",
        age: 3,
        gender: "Male"
    },
    {
        name: "Longinus",
        age: 2,
        gender: "Male"
    },
    {
        name: "Satellite Dish",
        age: 2,
        gender: "Male"
    },
    {
        name: "Fishing Village",
        age: 2,
        gender: "Female"
    },
    {
        name: "Gobbler of Souls",
        age: 2,
        gender: "Male"
    },
    {
        name: "The Mist",
        age: 1,
        gender: "Male"
    },
    {
        name: "Jeremiah",
        age: 0.5,
        gender: "Male"
    },
    {
        name: "Peter Griffin",
        age: 2,
        gender: "Male"
    },
    {
        name: "Dave The Magical Cheese Wizard",
        age: 2,
        gender: "Male"
    },
    {
        name: "Michael and Michael",
        age: 0.4,
        gender: "Male both"
    },

];

let members = [];

function AddCat(addOrder) {

    members = retrieveMember();

    members.push(
        {
            name: cats[addOrder].name,
            age: cats[addOrder].age,
            gender: cats[addOrder].gender
        }
    );

    saveMember(members);

    showCats();

}

function showCats() {
    const CAT_LIST = document.getElementById("member-list");
    if (CAT_LIST != null) {
        let allMembers = "";

        members = retrieveMember();

        for (let i = 0; i < members.length; i++) {

            allMembers += `<li>${members[i].name} / ${members[i].age} / ${members[i].gender}  <button onclick="deleteMember(${i})">DELETE</button></li>`;

        }

        saveMember(members);

        CAT_LIST.innerHTML = allMembers;

    }

}

function saveMember(data) {

    var dataJSON = JSON.stringify(data);
    localStorage.setItem("members", dataJSON);

}

function retrieveMember() {

    var recoverJSON = localStorage.getItem("members");
    return JSON.parse(recoverJSON) || [];

}

showCats();