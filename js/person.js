//api
$(document).ready(function(){
    fetch('https://api.themoviedb.org/3/person/12345?api_key=ce8ce557f85eb5b4175ee66f08002107&language=ko-KR')
    .then((response) => response.json())
    .then((data) => {
        const name = document.createElement("span");
        name.className = 'actor_name';
        name.textContent = data.name;

        const job = document.createElement("span");
        job.className = 'job';
        job.textContent = data.known_for_department;

        const date = document.createElement("span");
        date.className = 'date';
        date.textContent = data.birthday;

        const poster =document.createElement("img");
        poster.src=`https://image.tmdb.org/t/p/w500/${data.profile_path}`;

        // for( let i=0; i<data.genres.length; i++ ){
        //     sss += data.genres[i].name+"             ";
        // console.log(sss);
        // }
        document.querySelector(".poster").appendChild(poster);
        document.querySelector(".name").appendChild(name);
        document.querySelector(".birth").appendChild(date);
        document.querySelector(".job").appendChild(job);
        
            })
        })
    