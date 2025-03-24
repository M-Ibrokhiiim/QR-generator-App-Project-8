const input=document.getElementById('input')
const imgSrc=document.getElementById('IMGsrc')

const QRapi='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data= '


function QRgenerator(){
    if(input.value===''){
        input.classList.add('imgShake')
        imgSrc.style.display="none"
    }else{
     imgSrc.classList.add('imgClass')
     imgSrc.src=QRapi+input.value
     imgSrc.style.display="block"   
    }
}

