const serit = document.getElementById('serit')
const secenek = document.getElementById('chibiColl')
const charsAll = document.querySelectorAll('.charSelect')
const landon = document.getElementById('landonc')
const landonChar = document.getElementById('landon')
const dalia = document.getElementById('daliac')
const daliaChar = document.getElementById('dalia')
const james = document.getElementById('jamesc')
const jamesChar = document.getElementById('james')
const april = document.getElementById('aprilc')
const aprilChar = document.getElementById('april')
const theo = document.getElementById('theoc')
const theoChar = document.getElementById('theo')
const helen = document.getElementById('helenc')
const helenChar = document.getElementById('helen')
const demian = document.getElementById('demianc')
const demianChar = document.getElementById('demian')
const sydney = document.getElementById('sydneyc')
const sydneyChar = document.getElementById('sydney')
const jason = document.getElementById('jasonc')
const jasonChar = document.getElementById('jason')
const marin = document.getElementById('marinc')
const marinChar = document.getElementById('marin')


landon.addEventListener('click',()=>{
    serit.style = "background-color: #9a9c74 !important";
    secenek.classList.remove('show')
    charsAll.forEach((x)=>{
        x.classList.add('d-none')
    })
    landonChar.classList.remove('d-none')
})
dalia.addEventListener('click',()=>{
    serit.style = "background-color: #e8bf73 !important";
    secenek.classList.remove('show')
    charsAll.forEach((x)=>{
        x.classList.add('d-none')
    })
    daliaChar.classList.remove('d-none')
})
james.addEventListener('click',()=>{
    serit.style = "background-color: #e8a773 !important";
    secenek.classList.remove('show')
    charsAll.forEach((x)=>{
        x.classList.add('d-none')
    })
    jamesChar.classList.remove('d-none')
})
april.addEventListener('click',()=>{
    serit.style = "background-color: #e59c8e !important";
    secenek.classList.remove('show')
    charsAll.forEach((x)=>{
        x.classList.add('d-none')
    })
    aprilChar.classList.remove('d-none')
})
theo.addEventListener('click',()=>{
    serit.style = "background-color: #e6d5ca !important";
    secenek.classList.remove('show')
    charsAll.forEach((x)=>{
        x.classList.add('d-none')
    })
    theoChar.classList.remove('d-none')
})
helen.addEventListener('click',()=>{
    serit.style = "background-color: #709d94 !important";
    secenek.classList.remove('show')
    charsAll.forEach((x)=>{
        x.classList.add('d-none')
    })
    helenChar.classList.remove('d-none')
})
demian.addEventListener('click',()=>{
    serit.style = "background-color: #c1dfe2 !important";
    secenek.classList.remove('show')
    charsAll.forEach((x)=>{
        x.classList.add('d-none')
    })
    demianChar.classList.remove('d-none')
})
sydney.addEventListener('click',()=>{
    serit.style = "background-color: #eccece !important";
    secenek.classList.remove('show')
    charsAll.forEach((x)=>{
        x.classList.add('d-none')
    })
    sydneyChar.classList.remove('d-none')
})
jason.addEventListener('click',()=>{
    serit.style = "background-color: #6285a5 !important";
    secenek.classList.remove('show')
    charsAll.forEach((x)=>{
        x.classList.add('d-none')
    })
    jasonChar.classList.remove('d-none')
})
marin.addEventListener('click',()=>{
    serit.style = "background-color: #eee4ff !important";
    secenek.classList.remove('show')
    charsAll.forEach((x)=>{
        x.classList.add('d-none')
    })
    marinChar.classList.remove('d-none')
})
