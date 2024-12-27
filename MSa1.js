const songs = [ 
    {
        "id": 1,
        "name": "TO LOS PODERES",
        "artist": "Myke Towers",
        "img": "mykeTowersBalompiePic.jpg",
        "music": "Myke Towers - TO' LOS PODERES.mp3"
    },      
    {
        "id": 2,
        "name": "BILLY VAN",
        "artist": "Myke Towers",
        "img": "mykeTowersBalompiePic.jpg",
        "music": "Myke Towers - BILLY VAN.mp3"
    },
    {
        "id": 3,
        "name": "TÍTERES",
        "artist": "Myke Towers x Pressure 9X19",
        "img": "mykeTowersBalompiePic.jpg",
        "music": "Myke Towers & Pressure 9X19 - TÍTERES.mp3"
    },
    {
        "id": 4,
        "name": "EQUIPO DE BALOMPIÉ",
        "artist": "Myke Towers",
        "img": "mykeTowersBalompiePic.jpg",
        "music": "Myke Towers - EQUIPO DE BALOMPIÉ.mp3"
    },
    {
        "id": 5,
        "name": "Solo $exo",
        "artist": "Myke Towers",
        "img": "mykepic2.jpg",
        "music": "Myke Towers - Solo $exo.mp3"
    },
    {
        "id": 6,
        "name": "Alto Riesgo",
        "artist": "Myke Towers",
        "img": "MYKEPIC3333.jpg",
        "music": "Myke Towers - Alto Riesgo.mp3"
    },
    {
        "id": 7,
        "name": "Celos",
        "artist": "Myke Towers & J Balvin",
        "img": "CELOSPIC.jpg",
        "music": "Myke Towers & J Balvin - Celos.mp3"
    },
    {
        "id": 8,
        "name": "Piensan",
        "artist": "Myke Towers",
        "img": "mikepiensanpi.jpg",
        "music": "Myke Towers - Piensan (Video Oficial).mp3"
    },
    {
        "id": 9,
        "name": "Joven Leyenda",
        "artist": "Myke Towers",
        "img": "MYKEPIC3333.jpg",
        "music": "Myke Towers - Joven Leyenda.mp3"
    },
    {
        "id": 10,
        "name": "Dígitos",
        "artist": "Arcangel X Myke Towers",
        "img": "MIKEARCPICCC.jpg",
        "music": "Arcangel, Myke Towers - Dígitos.mp3"
    },
    {
        "id": 11,
        "name": "Inocente",
        "artist": "Myke Towers",
        "img": "INOCENTEMIKEPIC.jpg",
        "music": "Myke Towers - Inocente.mp3"
    },
    {
        "id": 12,
        "name": "VAMO A DALE",
        "artist": "Myke Towers ft Cosculluela",
        "img": "1COCUMIKEPIC.jpg",
        "music": "Myke Towers & Cosculluela - VAMO A DARLE (Visualizer).mp3"
    },
    {
        "id": 13,
        "name": "DIABLITA",
        "artist": "Myke Towers ft Youngchimi",
        "img": "DIABLITAPIC.jpg",
        "music": "Myke Towers & Yovngchimi - DIABLITA (Visualizer).mp3"
    },
    {
        "id": 14,
        "name": "La Tranza",
        "artist": "Bulin47 X myke towers",
        "img": "TRABULINMIKEPIC.jpg",
        "music": "Bulin 47 x Myke Towers - La Tranza (Video Oficial).mp3"
    },
    {
        "id": 15,
        "name": "DON & TEGO",
        "artist": "Myke Towers & Arcangel",
        "img": "MIKEARCPICCC.jpg",
        "music": "Myke Towers & Arcangel - DON & TEGO.mp3"
    },
    {
        "id": 16,
        "name": "MAYOR",
        "artist": "Myke Towers x Yandel",
        "img": "MIKEYANDELP[IC.jpg",
        "music": "MAYOR - Myke Towers & Yandel.mp3"
    },
    {
        "id": 17,
        "name": "Gallery Dept",
        "artist": "Myke Towers",
        "img": "mykepic2.jpg",
        "music": "Myke Towers - Gallery Dept.mp3"
    },
    {
        "id": 18,
        "name": "SEXO DESENFRENADO",
        "artist": "Myke Towers",
        "img": "MIKEPIC22222.jpg",
        "music": "Myke Towers - SEXO DESENFRENADO.mp3"
    },
    {
        "id": 19,
        "name": "Los Angeles",
        "artist": "Myke Towers",
        "img": "MYKEPIC3333.jpg",
        "music": "Myke Towers - Los Angeles.mp3"
    },
    {
        "id": 20,
        "name": "Ajedrez",
        "artist": "Myke Towers",
        "img": "1MYKEPIC1.jpg",
        "music": "Myke Towers - Ajedréz (Lyric Video) (1).mp3"
    },
    {
        "id": 21,
        "name": "Cuando me Ven",
        "artist": "Myke Towers",
        "img": "1MYKEPIC1.jpg",
        "music": "Myke Towers - Cuando Me Ven (Lyric Video).mp3"
    },
    {
        "id": 22,
        "name": "AUNQUE LLEGUE OTRO",
        "artist": "Myke Towers & Jay Wheeler",
        "img": "mykejaypic.jpg",
        "music": "Myke Towers & Jay Wheeler - AUNQUE LLEGUE OTRO.mp3"
    },
    {
        "id": 23,
        "name": "34.PFA",
        "artist": "Myke Towers",
        "img": "1MYKEPIC1.jpg",
        "music": "Myke Towers - PFA (Lyric Video).mp3"
    },
    {
        "id": 24,
        "name": "ADIVINO",
        "artist": "Myke Towers x Bad Bunny",
        "img": "mykebadadivinopic.jpg",
        "music": "Myke Towers, Bad Bunny - ADIVINO.mp3"
    },
    {
        "id": 25,
        "name": "Fast Money",
        "artist": "Ñengo Flow ft Myke Towers",
        "img": "FASTMONEYPC.jpg",
        "music": "Ñengo Flow x Myke Towers - Fast Money [Official Video].mp3"
    },
    {
        "id": 26,
        "name": "DINERO y FAMA",
        "artist": "Myke Towers & Omar Montes",
        "img": "MykeDineroYfamaPic.jpg",
        "music": "Myke Towers & Omar Montes - DINERO y FAMA.mp3"
    },
    {
        "id": 27,
        "name": "OBVIO",
        "artist": "Myke Towers",
        "img": "MykeObvioPIC.jpg",
        "music": "Myke Towers - OBVIO (Visualizer).mp3"
    },
    {
        "id": 28,
        "name": "Trending",
        "artist": "Dei V ft Myke Towers",
        "img": "TrendiDeiviTowerPic.jpg",
        "music": "Dei V, Myke Towers - Trending Remix (LetraLyrics).mp3"
    },
    {
        "id": 29,
        "name": "Pauta y Flow",
        "artist": "Myke Towers",
        "img": "mykepic4.jpg",
        "music": "Myke Towers - Pauta y Flow.mp3"
    }
 ];
 const searchInput = document.getElementById("search-input");
 const songList = document.getElementById("song-list");
 const audioPlayer = document.getElementById("audio-player");
 const audioSource = document.getElementById("audio-source");
 const prevButton = document.getElementById("prev-button");
 const nextButton = document.getElementById("next-button");
 const randomButton = document.getElementById("random-button");
 const playPauseButton = document.getElementById("play-pause-button");
 const progressBar = document.getElementById("progress-bar");
 const volumeSlider = document.getElementById("volume-slider");
 const muteButton = document.getElementById("mute-button");
 
 let isPlaying = false;
 let currentSongId = null;
 let isMuted = false;
 
 function renderSongs(filteredSongs = songs) {
     songList.innerHTML = "";
 
     filteredSongs.forEach(song => {
         const songItem = document.createElement("div");
         songItem.classList.add("song-item");
         songItem.dataset.songId = song.id;
         songItem.innerHTML = `
             <img src="${song.img}" alt="${song.name}">
             <span>${song.name} - ${song.artist}</span>
             <button class="play-button"><i class="fas fa-play"></i></button>
         `;
 
         const playButton = songItem.querySelector(".play-button");
         playButton.addEventListener("click", () => {
             playOrPauseSong(song, playButton);
         });
 
         songList.appendChild(songItem);
     });
 }
 
 function playOrPauseSong(song, button) {
     if (isPlaying && currentSongId === song.id) {
         audioPlayer.pause();
         button.querySelector("i").classList.replace("fa-pause", "fa-play");
         playPauseButton.querySelector("i").classList.replace("fa-pause", "fa-play");
         isPlaying = false;
     } else {
         audioSource.src = song.music;
         audioSource.dataset.songId = song.id;
         audioPlayer.load();
         audioPlayer.play();
         button.querySelector("i").classList.replace("fa-play", "fa-pause");
         playPauseButton.querySelector("i").classList.replace("fa-play", "fa-pause");
         isPlaying = true;
         currentSongId = song.id;
     }
     // Update the current song name display
     const songNameDisplay = document.getElementById("current-song-name");
     songNameDisplay.textContent = song.name;
     
     const artistNameDisplay = document.getElementById("current-artist-name");
     artistNameDisplay.textContent = song.artist;// Display the song name
      
     const idNumberDisplay = document.getElementById("current-id");
     idNumberDisplay.textContent = song.id;// Display the artist name
    }
 
 
 
 audioPlayer.addEventListener("ended", function() {
     const currentSongIndex = songs.findIndex(song => song.id === parseInt(audioSource.dataset.songId));
     const nextSongIndex = (currentSongIndex + 1) % songs.length;
     playOrPauseSong(songs[nextSongIndex], document.querySelector(`[data-song-id="${songs[nextSongIndex].id}"] .play-button`));
 });
 
 function playNextSong() {
     const currentSongIndex = songs.findIndex(song => song.id === parseInt(audioSource.dataset.songId));
     const nextSongIndex = (currentSongIndex + 1) % songs.length;
     playOrPauseSong(songs[nextSongIndex], document.querySelector(`[data-song-id="${songs[nextSongIndex].id}"] .play-button`));
 }
 
 function playPrevSong() {
     const currentSongIndex = songs.findIndex(song => song.id === parseInt(audioSource.dataset.songId));
     const prevSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
     playOrPauseSong(songs[prevSongIndex], document.querySelector(`[data-song-id="${songs[prevSongIndex].id}"] .play-button`));
 }
 
 function playRandomSong() {
     const randomIndex = Math.floor(Math.random() * songs.length);
     playOrPauseSong(songs[randomIndex], document.querySelector(`[data-song-id="${songs[randomIndex].id}"] .play-button`));
 }
 
 prevButton.addEventListener("click", playPrevSong);
 nextButton.addEventListener("click", playNextSong);
 randomButton.addEventListener("click", playRandomSong);
 
 // Handle play/pause button toggle
 playPauseButton.addEventListener("click", () => {
     if (isPlaying) {
         audioPlayer.pause();
         playPauseButton.querySelector("i").classList.replace("fa-pause", "fa-play");
         isPlaying = false;
     } else {
         if (currentSongId === null) {
             // If no song is playing, start the first song
             playOrPauseSong(songs[0], document.querySelector(`[data-song-id="${songs[0].id}"] .play-button`));
         } else {
             audioPlayer.play();
             playPauseButton.querySelector("i").classList.replace("fa-play", "fa-pause");
             isPlaying = true;
         }
     }
 });
 
 // Progress Bar update
 audioPlayer.addEventListener("timeupdate", () => {
     if (audioPlayer.duration) {
         const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
         progressBar.value = progress;
     }
 });
 
 // Seek functionality
 progressBar.addEventListener("click", (event) => {
     const seekTime = (event.offsetX / progressBar.offsetWidth) * audioPlayer.duration;
     audioPlayer.currentTime = seekTime;
 });
 
 // Handle volume control slider
 volumeSlider.addEventListener("input", (event) => {
     audioPlayer.volume = event.target.value;
 });
 
 // Handle mute/unmute button
 muteButton.addEventListener("click", () => {
     if (isMuted) {
         audioPlayer.muted = false;
         volumeSlider.value = audioPlayer.volume;
         muteButton.querySelector("i").classList.replace("fa-volume-mute", "fa-volume-up");
     } else {
         audioPlayer.muted = true;
         muteButton.querySelector("i").classList.replace("fa-volume-up", "fa-volume-mute");
     }
     isMuted = !isMuted;
 });
 
 audioPlayer.addEventListener("play", () => {
     playPauseButton.querySelector("i").classList.replace("fa-play", "fa-pause");
     isPlaying = true;
 });
 
 audioPlayer.addEventListener("pause", () => {
     playPauseButton.querySelector("i").classList.replace("fa-pause", "fa-play");
     isPlaying = false;
 });
 
 renderSongs();
 
 searchInput.addEventListener("input", function() {
     const searchQuery = searchInput.value.toLowerCase();
 
     const filteredSongs = songs.filter(song =>
         song.name.toLowerCase().includes(searchQuery) ||
         song.artist.toLowerCase().includes(searchQuery)
     );
 
     renderSongs(filteredSongs);
 });
 
 ///voice search ///
 const voiceSearchButton = document.getElementById("voice-search-button");
 
 // Check if the SpeechRecognition API is available
 const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
 
 let recognition;
 if (SpeechRecognition) {
    recognition = new SpeechRecognition();
    recognition.lang = "es-ES"; // Set language for recognition (you can change this to other languages)
    recognition.continuous = false; // Only listen for a single command
    recognition.interimResults = false; // No need for interim results
 
    // Function to start the voice recognition when the button is clicked
    voiceSearchButton.addEventListener("click", () => {
        recognition.start();
    });
 
    // Handle the speech recognition result
    recognition.addEventListener("result", (event) => {
        const transcript = event.results[0][0].transcript.toLowerCase(); // Convert to lowercase to match the song names/artists
        searchInput.value = transcript; // Set the search input to the recognized speech
 
        // Filter the songs based on the recognized voice input
        const filteredSongs = songs.filter(song =>
            song.name.toLowerCase().includes(transcript) ||
            song.artist.toLowerCase().includes(transcript)
        );
 
        renderSongs(filteredSongs); // Render the filtered song list
    });
 
    // Handle speech recognition errors
    recognition.addEventListener("error", (event) => {
        console.error("Speech recognition error:", event.error);
    });
 
    // Optionally, handle the end of recognition
    recognition.addEventListener("end", () => {
        console.log("Voice search ended");
    });
 } else {
    console.error("Sorry, Lollita can not recognized your voice");
 }
 
 // Assuming you already have the following in your HTML:
 // <audio id="notification-sound" src="notification.mp3" preload="auto"></audio>
 
 const notificationSound = document.getElementById("notification-sound");
 
 // Voice search event listener for recognition result
 recognition.addEventListener("result", (event) => {
    const transcript = event.results[0][0].transcript.toLowerCase(); // Convert to lowercase to match the song names/artists
    searchInput.value = transcript; // Set the search input to the recognized speech
 
    // Filter the songs based on the recognized voice input
    const filteredSongs = songs.filter(song =>
        song.name.toLowerCase().includes(transcript) ||
        song.artist.toLowerCase().includes(transcript)
    );
 
    renderSongs(filteredSongs); // Render the filtered song list
 
    // Play the sound notification if songs are found
    if (filteredSongs.length > 0) {
        notificationSound.play(); // Play sound if matches are found
    }
 });
 
 // Optional: Handle other events like error and end if you want to give feedback for those situations
 recognition.addEventListener("error", (event) => {
    console.error("Speech recognition error:", event.error);
 });
 
 // Optional: Handle end of recognition event
 recognition.addEventListener("end", () => {
    console.log("Voice search ended");
 });
 
 
 recognition.addEventListener("result", (event) => {
    // Get the transcript from the speech recognition result
    let transcript = event.results[0][0].transcript.toLowerCase();
 
    // Remove the period at the end of the text if it exists
    if (transcript.endsWith(".")) {
        transcript = transcript.slice(0, -1); // Remove the last character (the period)
    }
 
    // Set the search input to the recognized speech (without period)
    searchInput.value = transcript;
 
    // Filter the songs based on the recognized voice input
    const filteredSongs = songs.filter(song =>
        song.name.toLowerCase().includes(transcript) ||
        song.artist.toLowerCase().includes(transcript)
    );
 
    renderSongs(filteredSongs); // Render the filtered song list
 
    // Play the sound notification if songs are found
    if (filteredSongs.length > 0) {
        notificationSound.play(); // Play sound if matches are found
    }
 });
 
 function toggleClassPlayer(){
 
    const body = document.querySelector('body');
    body.classList.toggle('lightPlayer');
    
    }