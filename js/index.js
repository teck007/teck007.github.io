document.addEventListener('DOMContentLoaded', function () {
    const username = 'teck007';
    const githubRepos = document.getElementById("github-repos");
    const btnProyectos = document.getElementById("btn-proyectos");
    const content1 = document.getElementsByClassName("content-1")[0];
    const content2 = document.getElementsByClassName("content-2")[0];
    const presentation = document.getElementsByClassName("presentation")[0];

    // fetch(`https://api.github.com/users/${username}/repos`, {
    fetch(`https://api.github.com/users/teck007/repos`)
        .then(response => response.json())
        .then(repositories => {
            repositories.forEach(repo => {
                githubRepos.innerHTML += '<li class="line"><a href="'
                    + repo.html_url + '" target="blank"><h3>' + repo.name + '</h3></a>'
                    + '</li>Lenguaje: ' + repo.language
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
    content1.addEventListener("click", function () {
        content2.scrollIntoView({
             behavior: "smooth" // Para un desplazamiento suave
            // block: "start",     // Alinea la parte superior del elemento en la parte superior de la vista
            // inline: "nearest"   // Alinea el elemento de forma que esté lo más centrado posible horizontalmente
        });

    })
    btnProyectos.addEventListener("click", function () {
        githubRepos.scrollIntoView({
            behavior: "smooth", // Para un desplazamiento suave
            block: "start",     // Alinea la parte superior del elemento en la parte superior de la vista
            inline: "nearest"   // Alinea el elemento de forma que esté lo más centrado posible horizontalmente
        });

    })

    window.addEventListener('scroll', function () {
        const scrollElement = document.querySelector('.header');
        if (window.scrollY > 0) {
            scrollElement.classList.add('bg-color');
        } else {
            scrollElement.classList.remove('bg-color');
        }
    });

})

