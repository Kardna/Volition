function a() {
   document.getElementById('body').classList.add('bganimation');
   setTimeout(() => {  document.getElementById('body').classList.remove('bganimation');
   document.getElementById('body').classList.add('main');
   document.getElementById("landing").style.display = "none";
    }, 1900);
    setTimeout(() => { 
        location.replace("./main/")}, 2500);
  }