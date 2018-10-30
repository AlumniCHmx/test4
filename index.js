var altura=window.innerHeight;

var maxAlt=altura-20;

document.getElementById("content").style.height=`${maxAlt}px`
document.getElementById('doc').setAttribute("height",maxAlt)

var cajas=document.querySelectorAll('.blurred-box');

cajas.forEach(function(element) {
    //console.log(element.getAttribute('data-tipo'));
    element.setAttribute('onclick','print(this)')
});

function print(e){
    document.getElementsByTagName('h1')[0].style.display='none'
    document.getElementById("navSection").style.display='none'
    var tipo =e.getAttribute('data-tipo')
    
    document.getElementById("content").style.display='block'
    var exam= `pdf/Examen UAM ${tipo}.pdf`
    PDFObject.embed(exam, "#example1");

}

