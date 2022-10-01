const TandaSatu = document.getElementById('tanda1')
const kolom1 = document.getElementById('tempat1')



kolom1.addEventListener('click', function(e){
    if(TandaSatu.alt != 'tanda-o'){
        TandaSatu.src = "../image/tanda-o.png";
        TandaSatu.alt = "tanda-o";
    }else{
        TandaSatu.src = "";
        TandaSatu.alt = "";
    }
});