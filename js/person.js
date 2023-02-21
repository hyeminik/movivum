$(function(){
    console.log('hi');
    $.ajax({
        url: "https://api.themoviedb.org/3/movie/popular?api_key=ce8ce557f85eb5b4175ee66f08002107&language=ko-KR&page=5", //-> 예시... 인물이랑 관련작품
        data: {"key":"value"},
        type: "POST",
        success: function(json){
            console.log(json);
            
            let movie_list=json.results;
            for(let i=o; i<movie_list.length; i++){
                let card=`<div class=card>
                `
            }

        }
    })
})