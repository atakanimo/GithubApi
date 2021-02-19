const form = document.getElementById("GithubForm");
const input = document.getElementById("inputText");

const ui = new UI();
const github = new Github();

eventListeners();

function eventListeners() {

    form.addEventListener("submit",getData);
}

function getData(e) {

    const userName= input.value.trim();

    github.getGithubData(userName)
    .then(response => {
        console.log(response.user);
        ui.addUserInf(response.user);
        ui.addUserRepos(response.repo)
    })

    
    
    e.preventDefault();
}