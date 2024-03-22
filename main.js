var motivos = [
    " Eles sao velozes",
    "Eles sao furiosos",
    "super motores",
    "Sao Lindos",
      "Sao Rapidos"
  ];
  
  var imagens = [ "https://2.bp.blogspot.com/-g5TTT7AgNws/WnzvR77VpZI/AAAAAAAACKU/54Swc33pdPg64me3CXYCpcy8nyeglB8FACLcBGAs/s640/McLaren-Senna%2B%252829%2529.jpg",
    "https://i.pinimg.com/originals/5c/c4/79/5cc479ceb74f8eafe7e84c069e13a0dc.png",
    "https://i.pinimg.com/originals/67/66/88/676688cb19cc5f449c1b8e861d5ad376.jpg","https://onlycars.com.br/wp-content/uploads/2020/06/honda-civic-rebaixado-branco.jpg",         "https://w0.peakpx.com/wallpaper/685/488/HD-wallpaper-nissan-gt-r-nismo-nissan-gtr-nissan-cars-behance.jpg",   "://whttpsww.google.com/url?sa=i&url=https%3A%2F%2Fcars.mclaren.com%2Fbr-pt%2Fultimate-series%2Fmclaren-senna&psig=AOvVaw36kT02I-hmGb1LGjBlUTrQ&ust=1711110620446000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJCanPethYUDFQAAAAAdAAAAABA"
                 
  ];
  
  var i = 0;
  function proximo() {  document.getElementById("album").src = imagens[i];
      document.getElementById("texto").innerHTML = motivos[i];
      
      i++;  
     if(i>4){
       i=0;
     }
  }