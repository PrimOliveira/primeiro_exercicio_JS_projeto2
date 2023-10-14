function verificar() {
 var data = new Date()
 var ano = data.getFullYear()
 var fano = document.getElementById('txtano')
 var res = document.querySelector('div#res')
 if (fano.value.length == 0 || Number (fano.value) > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente!')
} else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade cauculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10){
                //crianca
                img.src = './Imagens/foto-meninobebe.png'
                document.body.style.background = '#74eaf8'
            } else if (idade < 21){
                //jovem
                img.src = './Imagens/foto-homemjovem.png'
                document.body.style.background = '#187d27'
            } else if (idade < 50) {
                //adulto
                img.src = './Imagens/foto-homemadulto.png'
                document.body.style.background ='#1604b6d8'
            } else {
                //idoso
                img.src = './Imagens/foto-homemidoso.png' 
                document.body.style.background = '#e20d0d'
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10){
                //crianca
                img.src = './Imagens/foto-meninabebe.png'
                document.body.style.background = '#fe80c3'
            } else if (idade < 21){
                //jovem
                img.src = './Imagens/foto-mulherjovem.png'
                document.body.style.background = '#ee104b'
            } else if (idade < 50) {
                //adulto
                img.src = './Imagens/foto-mulheradulta.png'
                document.body.style.background = '#fdc50c'
            } else {
                //idoso
                img.src = './Imagens/foto-mulheridosa.png'
                document.body.style.background = '#b5793e'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}