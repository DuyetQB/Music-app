(function IIFE() {
    const list = [
    {
      id: 1,
      url:
      "https://file-am-thanh.vercel.app/Rendezvous.mp3",
      author: "DEAM",
      title: "Rendezvous",
      cover:
      "https://media.doisongvietnam.vn/u/rootimage/editor/2019/10/09/18/07/11570597652_5821.jpg"},
  
    {
      id: 2,
      url:
      "https://raw.githubusercontent.com/himalayasingh/music-player-1/master/music/1.mp3",
      author: "Alex Skindo",
      title: "Me & You",
      cover:
      "https://kenh14cdn.com/thumb_w/660/2020/7/16/1-15948998699171250460902.jpg" },
  
    {
      id: 3,
      url:
      "https://aredir.nixcdn.com/NhacCuaTui967/NowhereAlanWalkerRemixFestivale-AlanWalker-5547317.mp3?st=FbxTR2whqqD7mWFdi910RA&e=1598933680",
      author: "Alan Walker",
      title: "Nowhere",
      cover:
      "https://images.unsplash.com/photo-1605462039019-035bed21c5ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" },
  
    {
      id: 4,
      url:
      "https://raw.githubusercontent.com/himalayasingh/music-player-1/master/music/4.mp3",
      author:"Jordan Schor",
      title: "Home",
      cover:
      "https://4.bp.blogspot.com/-vIG48yQH-G0/WwqHolB3unI/AAAAAAAAADc/3inLUn0nr6YcDt4gvcpxUUYrTwmZeEqngCLcBGAs/s640/chet-lang-khi-biet-duoc-ly-do-khien-me-chong-khong-muon-toi-gop-mat-trong-tiec-sinh-nhat.jpg" },
  
    {
      id: 5,
      url:
      "https://imusic.vn/stream/zSgWoxAQ968k",
      author: "Deam",
      title: "Save me",
      cover:
      "https://lh4.googleusercontent.com/-Z2xYGjE_Ut0/Wp8xVQvR2FI/AAAAAAAAG7Y/FbU_WWG5F5ABHy5rFHfCC9klvFPYR7b5wCLcBGAs/s1600/%25E1%25BA%25A3nh%2Bc%25C3%25B4%2Bg%25C3%25A1i%2Bquay%2Bl%25C6%25B0ng%2Bv%25E1%25BB%259Bi%2Bt%25C3%25A2m%2Btr%25E1%25BA%25A1ng%2Bbu%25E1%25BB%2593n.jpg" },
  
    {
      id: 6,
      url:
      "https://imusic.vn/stream/uxisbYFixD4s",
      author: "OWL city-Carly Rae Jepsen",
      title: "Good time",
      cover:
      "https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_534,h_462/https://www.tapchidanba.xyz/wp-content/uploads/2020/04/B%E1%BB%99-s%C6%B0u-t%E1%BA%ADp-h%C3%ACnh-%E1%BA%A3nh-g%C3%A1i-xinh-tri%E1%BB%87u-like-tr%C3%AAn-FaceBook-%C4%91%E1%BA%B9p-nh%E1%BA%A5t-7-534x462.jpg" },
  
    {
      id: 7,
      url:
      "https://file-am-thanh.vercel.app/Give%20Me%20Your%20Love.mp3",
      author: "DEAM",
      title: "Give me your love ",
      cover:
      "https://images.unsplash.com/photo-1605445070167-64f15c9e8b23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" },
  
    {
      id: 8,
      url:
      "https://file-am-thanh.vercel.app/Happier.mp3",
      author: "Marshmello ft.Bastille",
      title: "Happier",
      cover:
      "https://images.unsplash.com/photo-1605532211907-3c431aeaa32c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" },
  
    {
      id: 9,
      url:
      "https://imusic.vn/stream/4vV4FnDg7TLv",
      author: "Gryffin,Elley Duhe",
      title: "Tie me down",
      cover:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Chutimon_Chuengcharoensukying_%28Cleo_Girls_Idol%29.jpg/500px-Chutimon_Chuengcharoensukying_%28Cleo_Girls_Idol%29.jpg"},
      {
     id: 10,
      url:
      "https://aredir.nixcdn.com/Unv_Audio61/FlyAway-TheFatRatAnjulie-5043089.mp3",
      author: "Alan Walker",
      title: "Fly away",
      cover:
      "https://halotravel.vn/wp-content/uploads/2020/08/lang-det-tho-cam-my-nghiep-0.jpg" },
    {
         id: 11,
      url:
      "https://file-am-thanh.vercel.app/Perfect%20(Ed%20Sheeran%20Cover).mp3",
      author: "Ed Sheeran",
      title: "Perfect",
      cover:
      "https://images.unsplash.com/photo-1605274280779-a4732e176f4b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" },
    {
         id: 12,
      url:
      "https://file-am-thanh.vercel.app/Let%20Me%20Down%20Slowly%20Cover.mp3",
      author: "Alec Benjamin",
      title: "Let me down slowly",
      cover:
      "https://dep.anh9.com/imgs/131028hinh-anh-khuon-mat-be-gai-dep-me-hoac.jpg" },
    {
         id: 13,
      url:
      "https://file-am-thanh.vercel.app/Without%20You2.mp3",
      author: "DEAM",
      title: "without you",
      cover:
      "https://ttol.vietnamnetjsc.vn//2017/09/18/15/28/mai-me-voi-ban-tri-ky-khac-gioi-bong-mot-ngay-chong-giat-minh-nhan-ra-vo-chong-da-qua-xa-xoi_2.jpg" },
    {
          id: 14,
      url:
      "https://file-am-thanh.vercel.app/Without%20You.mp3",
      author: "Avicii",
      title: "without you",
      cover:
      "https://png.pngtree.com/png-clipart/20190904/original/pngtree-hand-drawn-cartoon-girl-wearing-yellow-dress-free-button-element-png-image_4483799.jpg" },
      {
        id: 15,
      url:
      "https://aredir.nixcdn.com/NhacCuaTui994/IWantYouToKnowRemix-HellaPegato-6204760.mp3?st=Ui48H-GGqMzqJ2yhdKOmvg&e=1599575645",
      author: "Hega, Pegato",
      title: "I want you to know",
      cover:
      "https://kynguyenlamdep.com/wp-content/uploads/2020/01/hinh-anh-dep-hoa-bo-cong-anh-700x466.jpg" }];
   
  
    let currentId = 0;
    let isPlaying = false;
    let isLoop = true;
    let isShuffle = false;
    let currentAudio = "music1";
    let timer = null;
    let loopOne = false;
  
    const currentTimeIndicator = document.querySelector(".music-time__current");
    const leftTimeIndicator = document.querySelector(".music-time__last");
    const progressBar = document.getElementById("length");
    const playBtn = document.querySelector(".play");
    const cover = document.querySelector(".cover");
    const title = document.querySelector(".music-player__title");
    const author = document.querySelector(".music-player__author");
  
    const loopBtn = document.getElementById("loop");
    const shuffleBtn = document.getElementById("shuffle");
    const forwardBtn = document.getElementById("forward");
    const backwardBtn = document.getElementById("backward");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");
    const progressDiv = document.getElementById("progress");
  
    function play(e) {
      if (!isPlaying) {
        // console.log('play');
        e.target.src =
        "https://snowleo208.github.io/100-Days-of-Code/7.%20Music%20Player/img/pause.svg";
        e.target.alt = "Pause";
        isPlaying = true;
        document.getElementById(currentAudio).play();
        showTime();
      } else {
        // console.log('pause');
        e.target.src =
        "https://snowleo208.github.io/100-Days-of-Code/7.%20Music%20Player/img/play.svg";
        e.target.alt = "Play";
        document.getElementById(currentAudio).pause();
        isPlaying = false;
        clearInterval(timer);
      }
    }
  
    function changeBar() {
      const audio = document.getElementById(currentAudio);
      const percentage = (audio.currentTime / audio.duration).toFixed(3);
      progressBar.style.transition = "";
      // console.log(audio.currentTime);
  
      //set current time
      const minute = Math.floor(audio.currentTime / 60);
      const second = Math.floor(audio.currentTime % 60);
      const leftTime = audio.duration - audio.currentTime;
      currentTimeIndicator.innerHTML =
      ("0" + minute).substr(-2) + ":" + ("0" + second).substr(-2);
  
      //set left time
      const leftMinute = Math.floor(leftTime / 60);
      const leftSecond = Math.floor(leftTime % 60);
  
      leftTimeIndicator.innerHTML =
      ("0" + leftMinute).substr(-2) + ":" + ("0" + leftSecond).substr(-2);
  
      //set time bar
      progressBar.style.width = percentage * 100 + "%";
    }
  
    function showTime() {
      timer = setInterval(() => changeBar(), 500);
    }
  
    function nextMusic(mode) {
      playBtn.src =
      "https://snowleo208.github.io/100-Days-of-Code/7.%20Music%20Player/img/play.svg";
      playBtn.alt = "Play";
      document.getElementById(currentAudio).pause();
      isPlaying = false;
      clearInterval(timer);
  
      if (mode === "next") {
        currentId = currentId + 1 > list.length - 1 ? 0 : currentId + 1;
        init();
      } else {
        currentId = currentId - 1 < 0 ? list.length - 1 : currentId - 1;
        init();
      }
    }
  
    function shuffle(e) {
      isShuffle = !isShuffle;
      if (isShuffle) {
        e.target.parentNode.classList.add("is-loop");
      } else {
        e.target.parentNode.classList.remove("is-loop");
      }
    }
  
    function backward() {
      const audio = document.getElementById(currentAudio);
      audio.currentTime -= 5;
      if (!isPlaying) {
        changeBar();
      }
    }
  
    function forward() {
      const audio = document.getElementById(currentAudio);
      audio.currentTime += 5;
      if (!isPlaying) {
        changeBar();
      }
    }
  
    function stopMusic() {
      playBtn.src =
      "https://snowleo208.github.io/100-Days-of-Code/7.%20Music%20Player/img/play.svg";
      playBtn.alt = "Play";
      isPlaying = false;
    }
  
    function goToNextMusic() {
      let newId = currentId;
      while (isShuffle && !loopOne && newId === currentId) {
        newId = Math.floor(Math.random() * Math.floor(list.length - 1));
      }
  
      if (!isShuffle && !loopOne) {
        currentId = currentId + 1 > list.length - 1 ? 0 : currentId + 1;
      }
      if (!isShuffle && loopOne) {
        currentId = currentId;
      }
  
      if (isShuffle) {
        currentId = newId;
      }
      init();
      document.getElementById(currentAudio).play();
    }
  
    function loop(e) {
      const audio = document.getElementById(currentAudio);
  
      if (!isLoop && !loopOne) {
        isLoop = true;
        loopOne = false;
        // console.log('is loop');
        e.target.parentNode.classList.add("is-loop");
        e.target.src =
        "https://snowleo208.github.io/100-Days-of-Code/7.%20Music%20Player/img/loop.svg";
        audio.loop = false;
        audio.onended = e => goToNextMusic();
        console.log(isLoop, loopOne);
      } else if (isLoop && !loopOne) {
        // console.log('is loop one');
        isLoop = true;
        loopOne = true;
        e.target.parentNode.classList.add("is-loop");
        e.target.src =
        "https://snowleo208.github.io/100-Days-of-Code/7.%20Music%20Player/img/loopone.svg";
        audio.loop = true;
        audio.onended = e => goToNextMusic();
        console.log(isLoop, loopOne);
      } else {
        // console.log('not loop');
        isLoop = false;
        loopOne = false;
        e.target.parentNode.classList.remove("is-loop");
        e.target.src =
        "https://snowleo208.github.io/100-Days-of-Code/7.%20Music%20Player/img/loop.svg";
        audio.loop = false;
        audio.onended = e => stopMusic();
        console.log(isLoop, loopOne);
      }
    }
  
    function progress(e) {
      const audio = document.getElementById(currentAudio);
      //get current position and minus progress bar's x position to get current position in progress bar
      const pos =
      (e.pageX - progressDiv.getClientRects()[0].x) /
      progressDiv.getClientRects()[0].width;
      audio.currentTime = pos * audio.duration;
      changeBar();
    }
  
    function init() {
      //reset music duration and setup audio
      const audio =
      document.getElementById(currentAudio) === null ?
      new Audio() :
      document.getElementById(currentAudio);
      audio.src = list[currentId].url;
      audio.id = currentAudio;
      document.getElementById(currentAudio) === null ?
      document.body.appendChild(audio) :
      "";
  
      progressBar.style.transition = "none";
      progressBar.style.width = "0%";
      document.getElementById(currentAudio).currentTime = 0;
  
      title.innerHTML = list[currentId].title;
      author.innerHTML = list[currentId].author;
      cover.src = list[currentId].cover;
  
      //set current time
      audio.addEventListener("loadedmetadata", function () {
        const leftMinute = Math.floor(audio.duration / 60);
        const leftSecond = Math.floor(audio.duration % 60);
        currentTimeIndicator.innerHTML = "00:00";
        leftTimeIndicator.innerHTML =
        ("0" + leftMinute).substr(-2) + ":" + ("0" + leftSecond).substr(-2);
        progressBar.style.transition = "";
      });
  
      //set loop
      document.getElementById(currentAudio).onended = e => goToNextMusic(e);
    }
  
    playBtn.addEventListener("click", play);
    loopBtn.addEventListener("click", loop);
  
    shuffleBtn.addEventListener("click", shuffle);
    forwardBtn.addEventListener("click", forward);
    backwardBtn.addEventListener("click", backward);
  
    prevBtn.addEventListener("click", e => nextMusic("prev"));
    nextBtn.addEventListener("click", e => nextMusic("next"));
    progressDiv.addEventListener("click", e => {
      progress(e);
    });
  
    init();
  })();