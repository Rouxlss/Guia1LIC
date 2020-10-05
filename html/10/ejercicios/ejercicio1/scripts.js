
const links = document.querySelectorAll('.menuPagina li');

links[0].addEventListener('click', ()=> {
    $.ajax({
        url:'./pages/home.html',
        type:'get',
        success: function(data){
         $('#content').html(data);
        }
      });
});

links[1].addEventListener('click', ()=> {
    $.ajax({
        url:'./pages/news.html',
        type:'get',
        success: function(data){
         $('#content').html(data);
        }
      });
});

links[2].addEventListener('click', ()=> {
    $.ajax({
        url:'./pages/contact.html',
        type:'get',
        success: function(data){
         $('#content').html(data);
        }
      });
});

links[3].addEventListener('click', ()=> {
    $.ajax({
        url:'./pages/info.html',
        type:'get',
        success: function(data){
         $('#content').html(data);
        }
      });
});