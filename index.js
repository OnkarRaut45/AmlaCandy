document.querySelector(".menu").addEventListener("click", function(){
    for(var i =0;i<3;i++){
      if(document.querySelectorAll(".content")[i].style.display != "block"){
        document.querySelectorAll(".content")[i].style.display = "block";
      }
      else{
        document.querySelectorAll(".content")[i].style.display = "none";
      }
    }
});
