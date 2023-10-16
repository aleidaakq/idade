function verificar() {
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.querySelector('div#res')
   if (fano.value.length == 0 || fano.value > ano){
         window.alert('[ERRO] Verifique os dados e tente novamente!')
   } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano- Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked){
        genero= 'Homem'
        if (idade >= 0 && idade<10){
            //Criança
            img.setAttribute('src', 'imagem/bebem.png')
        } else if (idade <21){
            //Jovem
            img.setAttribute('src', 'imagem/menino.png')
        } else if (idade <50) {
            //Adulto
            img.setAttribute('src', 'imagem/homem.png')
        } else {
            //Idoso
            img.setAttribute('src', 'imagem/idoso.png')
        }
    } else{
        genero= 'Mulher'
        if (idade >= 0 && idade<10){
            //Criança
            img.setAttribute('src', 'imagem/bebef.png')
        } else if (idade <21){
            //Jovem
            img.setAttribute('src', 'imagem/menina.png')
        } else if (idade <50) {
            //Adulto
            img.setAttribute('src', 'imagem/mulher.png')
        } else {
            //Idoso
            img.setAttribute('src', 'imagem/idosa.png')
        }
        
    }
    res.style.textAlign = 'center'
    res.innerHTML= `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
}
}