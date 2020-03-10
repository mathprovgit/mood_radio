        function audioPlayer(){
            var currentSong = 0;
            $("#audioPlayer")[0].src = $("#playlist_beer li a")[0];
            $("#audioPlayer")[0].play();
            $("#playlist_beer li a").click(function(e){
               e.preventDefault(); 
               $("#audioPlayer")[0].src = this;
               $("#audioPlayer")[0].play();
               $("#playlist_beer li").removeClass("current-song");
                currentSong = $(this).parent().index();
                $(this).parent().addClass("current-song");
            });
            
            $("#audioPlayer")[0].addEventListener("ended", function(){
               currentSong++;
                if(currentSong == $("#playlist_beer li a").length)
                    currentSong = 0;
                $("#playlist_beer li").removeClass("current-song");
                $("#playlist_beer li:eq("+currentSong+")").addClass("current-song");
                $("#audioPlayer")[0].src = $("#playlist_beer li a")[currentSong].href;
                $("#audioPlayer")[0].play();
            });
        }