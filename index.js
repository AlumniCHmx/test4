const cajas = document.querySelectorAll('.blurred-box')
cajas.forEach(function (element) {
  element.setAttribute('onclick', 'print(this)')
})

const areasArray = {
  1: `<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSevniR3awP-vLNOLdCzr9y5HYcSaW6aBNbBLImquei3erx3-g/viewform?embedded=true" width="99%" height="${window.innerHeight - 25}" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>`,
  2: `<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScsXbDch8JbAqYYr22RmDd2AsRlzQYhW_wALhf978jvngBXVg/viewform?embedded=true" width="99%" height="${window.innerHeight - 25}" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>`,
  3: `<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScUyEH95Efcr9s9ebJORqoACs3ZdfdMIxpmf0qtcWfCUVCI1w/viewform?embedded=true" width="99%" height="${window.innerHeight - 25}" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>`,
  4: `<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdj478w4_StG03LtnC0R0a9-tFSfJVJMgyGBI6w20hwkpnuXQ/viewform?embedded=true" width="99%" height="${window.innerHeight - 25}" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>`
}

function print (e) {
  document.getElementsByTagName('h1')[0].style.display = 'none'
  document.getElementById('navSection').style.display = 'none'
  const tipo = e.getAttribute('data-tipo')
  const area = e.getAttribute('data-area')

  document.getElementById('content').style.display = 'block'
  const exam = `pdf/examen-muestra-2020-${tipo}.pdf`
  PDFObject.embed(exam, '#example1')

  const formulario = document.getElementById('answers')
  formulario.innerHTML = areasArray[area]

  document.getElementById('content').style.height = `${window.innerHeight - 25}px`
  contador()
}

function contador () {
  const later = new Date()
  later.setHours(later.getHours() + 3)

  console.log(later)

  $('#clock').countdown(later, function (event) {
    $(this).html(event.strftime('%H:%M:%S'))
  })
}
