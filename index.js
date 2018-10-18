var altura=window.innerHeight;

var maxAlt=altura-20;

document.getElementById("content").style.height=`${maxAlt}px`
document.getElementById('doc').setAttribute("height",maxAlt)

PDFObject.embed("CBImath.pdf", "#example1");