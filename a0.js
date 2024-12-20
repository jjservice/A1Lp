// Select all the elements in the HTML page
// and assign them to a variable
let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

// Specify globally used values
let track_index = 0;
let isPlaying = false;
let updateTimer;

// Create the audio element for the player
let curr_track = document.createElement('audio');

// Define the list of tracks that have to be played
let track_list = [
    {
        name: "Solo $exo",
        artist: "Myke Towers",
        image: "mykepic2.jpg",
        path: "Myke Towers - Solo $exo.mp3"
    },
    {
        name: "Alto Riesgo",
        artist: "Myke Towers",
        image: "MYKEPIC3333.jpg",
        path: "Myke Towers - Alto Riesgo.mp3"
    },
    {
        name: "Celos",
        artist: "Myke Towers & J Balvin",
        image: "CELOSPIC.jpg",
        path: "Myke Towers & J Balvin - Celos.mp3"
    },
    {
        name: "Pauta y Flow",
        artist: "Myke Towers",
        image: "mykepic4.jpg",
        path: "Myke Towers - Pauta y Flow.mp3"
    },
    {
        name: "Piensan",
        artist: "Myke Towers",
        image: "mikepiensanpi.jpg",
        path: "Myke Towers - Piensan (Video Oficial).mp3"
    },
    {
        name: "Joven Leyenda",
        artist: "Myke Towers",
        image: "MYKEPIC3333.jpg",
        path: "Myke Towers - Joven Leyenda.mp3"
    },

    {
        name: "Dígitos",
        artist: "Arcangel X Myke Towers",
        image: "MIKEARCPICCC.jpg",
        path: "Arcangel, Myke Towers -Dígitos.mp3"
    },
    {
        name: "Inocente",
        artist: "Myke Towers",
        image: "INOCENTEMIKEPIC.jpg",
        path: "Myke Towers - Inocente.mp3"
    },
    {
        name: "VAMO A DALE",
        artist: "Myke Towers ft Cosculluela",
        image: "1COCUMIKEPIC.jpg",
        path: "Myke Towers & Cosculluela - VAMO A DARLE (Visualizer).mp3"
    },
    {
        name: "DIABLITA",
        artist: "Myke Towers ft Youngchimi",
        image: "DIABLITAPIC.jpg",
        path: "Myke Towers & Yovngchimi - DIABLITA (Visualizer).mp3"
    },
    {
        name: "La Tranza",
        artist: "Bulin47 X myke towers",
        image: "TRABULINMIKEPIC.jpg",
        path: "Bulin 47 x Myke Towers - La Tranza (Video Oficial).mp3"
    },
    {
        name: "DON & TEGO",
        artist: "Myke Towers & Arcangel",
        image: "MIKEARCPICCC.jpg",
        path: "Myke Towers & Arcangel - DON & TEGO.mp3"
    },
    {
        name: "MAYOR",
        artist: "Myke Towers x Yandel",
        image: "MIKEYANDELP[IC.jpg",
        path: "MAYOR - Myke Towers & Yandel.mp3"
    },
    {
        name: "Gallery Dept",
        artist: "Myke Towers",
        image: "mykepic2.jpg",
        path: "Myke Towers - Gallery Dept.mp3"
    },
    {
        name: "SEXO DESENFRENADO",
        artist: "Myke Towers",
        image: "MIKEPIC22222.jpg",
        path: "Myke Towers - SEXO DESENFRENADO.mp3"
    },
    {
        name: "Los Angeles",
        artist: "Myke Towers",
        image: "MYKEPIC3333.jpg",
        path: "Myke Towers - Los Angeles.mp3"
    }, 
    {
        name: "Ajedrez",
        artist: "Myke Towers",
        image: "1MYKEPIC1.jpg",
        path: "Myke Towers - Ajedréz (Lyric Video) (1).mp3"
    },
    {
        name: "Cuando me Ven",
        artist: "Myke Towers",
        image: "1MYKEPIC1.jpg",
        path: "Myke Towers - Cuando Me Ven (Lyric Video).mp3"
    },
    {
        name: "AUNQUE LLEGUE OTRO",
        artist: "Myke Towers & Jay Wheeler",
        image: "mykejaypic.jpg",
        path: "Myke Towers & Jay Wheeler - AUNQUE LLEGUE OTRO.mp3"
    },
    {
        name: "34.PFA",
        artist: "Myke Towers",
        image: "1MYKEPIC1.jpg",
        path: "Myke Towers - PFA (Lyric Video).mp3"
    },
    {
        name: "ADIVINO",
        artist: "Myke Towers x Bad Bunny",
        image: "mykebadadivinopic.jpg",
        path: "Myke Towers, Bad Bunny - ADIVINO.mp3"
    },
    {
        name: "Fast Money",
        artist: "Ñengo Flow ft Myke Towers",
        image: "FASTMONEYPC.jpg",
        path: "Ñengo Flow x Myke Towers - Fast Money [Official Video].mp3"
    },
    {
        name: "DINERO y FAMA",
        artist: "Myke Towers & Omar Montes ",
        image: "MykeDineroYfamaPic.jpg",
        path: "Myke Towers & Omar Montes - DINERO y FAMA.mp3"
    },
    {
        name: "OBVIO",
        artist: "Myke Towers",
        image: "MykeObvioPIC.jpg",
        path: "Myke Towers - OBVIO (Visualizer).mp3"
    },
    {
        name: "Trending",
        artist: "Dei V ft Myke Towers",
        image: "TrendiDeiviTowerPic.jpg",
        path: "Dei V, Myke Towers - Trending Remix (LetraLyrics).mp3"
    },
];


function loadTrack(track_index) {
    // Clear the previous seek timer
    clearInterval(updateTimer);
    resetValues();
    
    // Load a new track
    curr_track.src = track_list[track_index].path;
    curr_track.load();
    
    // Update details of the track
    track_art.style.backgroundImage = 
        "url(" + track_list[track_index].image + ")";
    track_name.textContent = track_list[track_index].name;
    track_artist.textContent = track_list[track_index].artist;
    now_playing.textContent = 
        "PLAYING " + (track_index + 1) + " OF " + track_list.length;
    
    // Set an interval of 1000 milliseconds
    // for updating the seek slider
    updateTimer = setInterval(seekUpdate, 1000);
    
    // Move to the next track if the current finishes playing
    // using the 'ended' event
    curr_track.addEventListener("ended", nextTrack);
    
    // Apply a random background color
    random_bg_color();
    }
    
    function random_bg_color() {
    // Get a random number between 64 to 256
    // (for getting lighter colors)
    let red = Math.floor(Math.random() * 256) + 64;
    let green = Math.floor(Math.random() * 256) + 64;
    let blue = Math.floor(Math.random() * 256) + 64;
    
    // Construct a color with the given values
    let bgColor = "rgb(" + red + ", " + green + ", " + blue + ")";
    
    // Set the background to the new color
    document.body.style.background = bgColor;
    }
    
    // Function to reset all values to their default
    function resetValues() {
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
    }

    function playpauseTrack() {
        // Switch between playing and pausing
        // depending on the current state
        if (!isPlaying) playTrack();
        else pauseTrack();
        }
        
        function playTrack() {
        // Play the loaded track
        curr_track.play();
        isPlaying = true;
        
        // Replace icon with the pause icon
        playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
        }
        
        function pauseTrack() {
        // Pause the loaded track
        curr_track.pause();
        isPlaying = false;
        
        // Replace icon with the play icon
        playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
        }
        
        function nextTrack() {
        // Go back to the first track if the
        // current one is the last in the track list
        if (track_index < track_list.length - 1)
            track_index += 1;
        else track_index = 0;
        
        // Load and play the new track
        loadTrack(track_index);
        playTrack();
        }
        
        function prevTrack() {
        // Go back to the last track if the
        // current one is the first in the track list
        if (track_index > 0)
            track_index -= 1;
        else track_index = track_list.length - 1;
        
        // Load and play the new track
        loadTrack(track_index);
        playTrack();
        }

        function seekTo() {
            // Calculate the seek position by the
            // percentage of the seek slider 
            // and get the relative duration to the track
            seekto = curr_track.duration * (seek_slider.value / 100);
            
            // Set the current track position to the calculated seek position
            curr_track.currentTime = seekto;
            }
            
            function setVolume() {
            // Set the volume according to the
            // percentage of the volume slider set
            curr_track.volume = volume_slider.value / 100;
            }
            
            function seekUpdate() {
            let seekPosition = 0;
            
            // Check if the current track duration is a legible number
            if (!isNaN(curr_track.duration)) {
                seekPosition = curr_track.currentTime * (100 / curr_track.duration);
                seek_slider.value = seekPosition;
            
                // Calculate the time left and the total duration
                let currentMinutes = Math.floor(curr_track.currentTime / 60);
                let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
                let durationMinutes = Math.floor(curr_track.duration / 60);
                let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);
            
                // Add a zero to the single digit time values
                if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
                if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
                if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
                if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }
            
                // Display the updated duration
                curr_time.textContent = currentMinutes + ":" + currentSeconds;
                total_duration.textContent = durationMinutes + ":" + durationSeconds;
            }
            }

            // Load the first track in the tracklist
loadTrack(track_index);