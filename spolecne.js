const rozbalto = () => {

    const menupolozky = document.querySelector('#menu-polozky')
    menupolozky.classList.toggle('show')
    
    const ikonka = document.querySelector('i')
    ikonka.classList.remove('fa-bars')
    ikonka.classList.add('fa-xmark')
   
}

const menuTlacitko = document.querySelector('#menu-tlacitko')
menuTlacitko.addEventListener('click', rozbalto)

