

window.onload = function(){

    function creakLink(){
        let e = document.createElement('a');
        e.textContent = "Durham College";
        e.href = "https://durhamcollege.ca/";
        e.target = "_blank";
        document.body.append(e);
    }

    document.querySelector("#btn1").addEventListener('click', creakLink);

    let students = ["Mira", "Mia", "Sam", "Tom"];

    function createlist(){
        let list = document.createElement('ul');
        for (let i = 0; i < students.length;i++){
            let item = document.createElement('li');
            item.textContent = students[i];
            list.append(item);

        }
        document.querySelector('#output').append(list)
    }

    document.querySelector('#btn2').addEventListener("click", createlist)
};