const usersInf = document.querySelector(".user-Inf");
const reposInf = document.querySelector(".repos-Inf");

class UI {

    addUserInf(user) {

        usersInf.innerHTML = `
    
        <div class="card text-center">
      <div class="card-header">
        Results
      </div>
      <div class="card-body">
      <img style="width:15%" class="img-fluid mb-2" src="${user.avatar_url}"></a>
        <h5 class="card-title">${user.name}</h5>
        <p class="card-text">Blog : ${user.blog}</p>
        <a href="#" class="btn btn-primary">Takipçi: <span class="badge badge-light">${user.followers}</span></a>
        <a href="#" class="btn btn-primary">Takip Edilen: <span class="badge badge-light">${user.following}</span></a>
        <a href="#" class="btn btn-primary">Repolar: <span class="badge badge-light">${user.public_repos}</span></a>
      </div>
      <div class="card-header">
        Repos
      </div>
    </div>
        
        `
    }

    addUserRepos(repos) {

        reposInf.innerHTML = "";

        repos.forEach(repo => {
            reposInf.innerHTML += ` 

            <div class="card text-center">
            <div class="card-header">
             </div>
       <div class="card-body">
        <a href="${repo.html_url}" target = "_blank" id = "repoName"> <h5 class="card-title">${repo.name}</h5> </a> <br>
        <p class="card-text">Description : ${repo.description}</p>
        <p class="card-text">Language : ${repo.language}</p>
        <a href="#" class="btn btn-primary">Star: <span class="badge badge-light">${repo.stargazers_count}</span></a>
        <a href="#" class="btn btn-primary">Fork: <span class="badge badge-light">${repo.forks_count}</span></a>
      </div>
      <div class="card-footer text-muted">
        Created : ${repo.created_at} <br>
        Updated : ${repo.updated_at}
      </div>
    </div>
            `
        })

    }
}