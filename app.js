  const menu = document.querySelector('.menu');
  const nav_links = document.querySelector('.nav-links');
  const navlinks = document.querySelectorAll('.nav-links li');
  //  Toggle nav
  menu.addEventListener('click', function(){
      nav_links.classList.toggle('nav-active');

      navlinks.forEach((link,index) => {
          if(link.style.animation ){
              link.style.animation = "";
          }
          else{
          link.style.animation = 'linkfade 0.5s ease forwards ' + index / 5+'s';
      }
    

      
      })
       // Burger animation
      
       menu.classList.toggle('toogle');
  })

  jQuery(document).ready(function() {

      var mouseX = 0, mouseY = 0;
      var xp = 0, yp = 0;
      
      $(document).mousemove(function(e){
        mouseX = e.pageX - 30;
        mouseY = e.pageY - 30; 
      });
        
      setInterval(function(){
        xp += ((mouseX - xp)/6);
        yp += ((mouseY - yp)/6);
        $("#circle").css({left: xp +'px', top: yp +'px'});
      }, 20);
    
    });