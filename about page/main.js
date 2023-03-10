const Dark = document.cookie
  .split('; ')
  .find((row) => row.startsWith('Dark='))
  ?.split('=')[1];
var r = document.querySelector(':root');

const L = localStorage.getItem("lang");

window.onload = function(){   
  
    if(L=='ar'){
      translate(L,'lng-tag');   
    }else{
      translate('en','lng-tag');   
    }

    if (Dark=="true") {
    r.style.setProperty('--TitleParbackground-color', 'black');
    r.style.setProperty('--ButttonGradiantColor', 'linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB)');
    r.style.setProperty('--Apartment', 'black');
    r.style.setProperty('--FontColor', 'white');
    r.style.setProperty('--IconColor','blue');
    r.style.setProperty('--BodyBackground','gray');

  } else {
    r.style.setProperty('--TitleParbackground-color', '#0080ff');
    r.style.setProperty('--ButttonGradiantColor', 'linear-gradient(144deg,#d79eff, #bbb0ff 50%,#b7faff)');
    r.style.setProperty('--Apartment', 'white');
    r.style.setProperty('--FontColor', 'blue');
    r.style.setProperty('--IconColor','white');
    r.style.setProperty('--BodyBackground','white');

  }
  // document.body.style.flexDirection = "column";
  // document.body.style.alignItems = "center";
  document.getElementById("PreLoader").style.display="none";
   

    var pic = localStorage.getItem("pic")
   
  if (pic == null) {
        document.getElementById("profilepic").src = "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg";
    }
    else {
      
      document.getElementById("profilepic").src = pic;
    }
    
  }
  
  