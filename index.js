var altura=window.innerHeight;
var maxAlt=altura-25;

var cajas=document.querySelectorAll('.blurred-box');
cajas.forEach(function(element) {
    element.setAttribute('onclick','print(this)')
});

//  ,
/*
    '<iframe id="doc" src="https://docs.google.com/forms/d/e/1FAIpQLSf2mVcd7ZKK6jw5q33uhpmt-jhOLZB3laSLu7Vhlgt8YbImpA/viewform?embedded=true" width="99%" height="820" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>'
*/


var areasArray=[
    '<iframe id="doc" src="https://docs.google.com/forms/d/e/1FAIpQLSfcD4QbQJF8N9RWkSFfYkmQL09JHAxR60-YnqgZ0VVoGLktgw/viewform?embedded=true" width="99%" height="820" frameborder="0" marginheight="0" marginwidth="0">Cargando...</iframe>',
    '<iframe id="doc" src="https://docs.google.com/forms/d/e/1FAIpQLSduacefR3VnaNRTTET9Adu_wZ9Khg-ydAzLGzzLuvP0aa6iVA/viewform?embedded=true" width="99%" height="820" frameborder="0" marginheight="0" marginwidth="0">Cargando...</iframe>',
    '<iframe id="doc" src="https://docs.google.com/forms/d/e/1FAIpQLSeaU0UOnJfK79ZfyhUCUR_xCxxGzLKHXX_miuevDqr5_WMrvw/viewform?embedded=true" width="99%" height="820" frameborder="0" marginheight="0" marginwidth="0">Cargando...</iframe>',
    '<iframe id="doc" src="https://docs.google.com/forms/d/e/1FAIpQLSeGIdzumInqd_IRKRxu4ZO030rR8xeMPKHex6KU3T8xhJX0GA/viewform?embedded=true" width="99%" height="820" frameborder="0" marginheight="0" marginwidth="0">Cargando...</iframe>'
]

function print(e){
    document.getElementsByTagName('h1')[0].style.display='none'
    document.getElementById("navSection").style.display='none'
    var tipo =e.getAttribute('data-tipo')
    var area =e.getAttribute('data-area')
    
    document.getElementById("content").style.display='block'
    var exam= `pdf/Examen UAM ${tipo}.pdf`
    PDFObject.embed(exam, "#example1");
    
    var formulario = document.getElementById("answers")

    formulario.innerHTML=areasArray[area-1]

    document.getElementById("content").style.height=`${maxAlt}px`
    document.getElementById('doc').setAttribute("height",maxAlt);

    contador();

}

function contador(){
    var later=new Date();
    later.setHours(later.getHours()+3);

    console.log(later)

    $('#clock').countdown(later, function(event) {
        $(this).html(event.strftime('%H:%M:%S'));
    });
}