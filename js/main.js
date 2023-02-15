$(function(){

    $('[data-vbg]').youtube_background();
    // 인기순
    $.ajax({
        url:"https://api.themoviedb.org/3/movie/popular?api_key=ce8ce557f85eb5b4175ee66f08002107&page=1&language=ko-KR",
        data:{"key":"value"},
        type:"post",
        success:function(json){
            console.log(json);
            $("#popular_wrap").html('')
            let movie_list=json.results;

        for(let i=0;i<10;i++){
            let page=`
            <div class="swiper-slide">
                <div class="movie_poster">
                    <img src="${'https://image.tmdb.org/t/p/w342/'+movie_list[i].poster_path}">
                </div>
                <div class="movie_info">
                    <span class="movie_title">${movie_list[i].title}</span>
                    <span class="movie_review">
                        <span class="material-symbols-outlined star">grade</span>${movie_list[i].vote_average}
                        &nbsp;|&nbsp;리뷰(999)
                    </span>
                </div>
            </div>`
                $("#popular_wrap").append(page);
            }
        }
    })
    // 현재상영순
    $.ajax({
        url:"https://api.themoviedb.org/3/movie/now_playing?api_key=ce8ce557f85eb5b4175ee66f08002107&page=2&language=ko-KR",
        data:{"key":"value"},
        type:"post",
        success:function(json){
            console.log(json);
            $("#now_playing_wrap").html('')
            let movie_list=json.results;
        for(let i=0;i<10;i++){
            let page=`
            <div class="swiper-slide">
                <div class="movie_poster">
                    <img src="${'https://image.tmdb.org/t/p/w342/'+movie_list[i].poster_path}">
                </div>
                <div class="movie_info">
                    <span class="movie_title">${movie_list[i].title}</span>
                    <span class="movie_review">
                        <span class="material-symbols-outlined star">grade</span>${movie_list[i].vote_average}
                        &nbsp;|&nbsp;리뷰(999)
                    </span>
                </div>
            </div>`
                $("#now_playing_wrap").append(page);
            }
        }
    })

    // 특정 장르 width_genres=장르번호 =>콤마로 나열 가능 
    $.ajax({
        url:"https://api.themoviedb.org/3/discover/movie?api_key=ce8ce557f85eb5b4175ee66f08002107&with_genres=28,14&page=1&language=ko-KR",
        data:{"key":"value"},
        type:"get",
        success:function(json){
            console.log(json);
            $("#recommend_wrap").html('');
            let movie_list=json.results;
            console.log(movie_list);
        for(let i=0;i<10;i++){
            let page=`
            <div class="swiper-slide">
                <div class="movie_poster">
                    <img src="${'https://image.tmdb.org/t/p/w342/'+movie_list[i].poster_path}">
                </div>
                <div class="movie_info">
                    <span class="movie_title">${movie_list[i].title}</span>
                    <span class="movie_review">
                        <span class="material-symbols-outlined star">grade</span>${movie_list[i].vote_average}
                        &nbsp;|&nbsp;리뷰(999)
                    </span>
                </div>
            </div>`
                $("#recommend_wrap").append(page);
            }
        }
    })
    // 로그인 아이콘 선택 시 모달창 d/p
    $('.login_icon').click(function(){
        $('.blackbg').fadeIn();
        $('.login_box').show();
    })
    $('.blackbg,login_closebtn').click(function(){
        $('.blackbg').fadeOut();
        $('.login_box').hide();
    })
    // 슬라이드
    var swiper = new Swiper(".swiper", {
        slidesPerView: 5,
        spaceBetween: 20,
        centeredSlides: false,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
})