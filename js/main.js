$(function(){
    // 인기순
$.ajax({
    url:"https://api.themoviedb.org/3/movie/popular?api_key=ce8ce557f85eb5b4175ee66f08002107&page=1&language=ko-KR",
    data:{"key":"value"},
    type:"post",
    success:function(json){
        console.log(json);
        $("#popular_wrap").html('')
        let movie_list=json.results;

    for(let i=0;i<5;i++){
        let page=`
        <div class="movie_wrap">
            <div class="movie_poster">
                <img src="${'https://image.tmdb.org/t/p/w342/'+movie_list[i].poster_path}">
            </div>
            <div class="movie_info">
                <span class="movie_title">${movie_list[i].title}</span>
                <span class="movie_review">평균<span class="material-symbols-outlined star">grade</span>${movie_list[i].vote_average}</span>
            </div>
        </div>`
            $("#popular_wrap").append(page)
        }
      }
    })
    // 현재상영순
    $.ajax({
        url:"w",
        data:{"key":"value"},
        type:"post",
        success:function(json){
            console.log(json);
            $("#now_playing_wrap").html('')
            let movie_list=json.results;
        for(let i=0;i<5;i++){
            let page=`
            <div class="movie_wrap">
                <div class="movie_poster">
                    <img src="${'https://image.tmdb.org/t/p/w342/'+movie_list[i].poster_path}">
                </div>
                <div class="movie_info">
                    <span class="movie_title">${movie_list[i].title}</span>
                    <span class="movie_review">평균<span class="material-symbols-outlined star">grade</span>${movie_list[i].vote_average}</span>
                </div>
            </div>`
                $("#now_playing_wrap").append(page)
            }
        }
    })

    //hero영역에 보여질 영화포스터
    $.getJSON('')

})