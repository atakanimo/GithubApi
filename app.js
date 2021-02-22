const form = document.getElementById("GithubForm");
const input = document.getElementById("inputText");

const ui = new UI();
const github = new Github();

eventListeners();

function eventListeners() {

    form.addEventListener("submit", getData);
}

function getData(e) {

    const userName = input.value.trim();    

    if (userName === "") {
        ui.BlankAlert("This Field Can't be Empty!");
    }

    else {
        github.getGithubData(userName)
            .then(response => {

                if (response.user.message === "Not Found") {

                    ui.BlankAlert("Users Not Found!");

                }
                else {
                    ui.addUserInf(response.user);
                    ui.addUserRepos(response.repo);
                    ui.scrool();
                }
            })
    }

    e.preventDefault();
};

