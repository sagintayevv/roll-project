function calcCartPrice() {

    const cartWrapper = document.querySelector('.cart-wrapper')
    const priceElements = cartWrapper.querySelectorAll('.price__currency')

    const totalpriceEl = document.querySelector('.total-price')
    const deliveryCost = document.querySelector('.delivery-cost')
    const cartDelivery = document.querySelector('[data-cart-delivery]')


    let totalPrice = 0

    priceElements.forEach(function (item) {

        const amountEl = item.closest('.cart-item').querySelector('[data-counter]')

        totalPrice += parseInt(item.innerText) * parseInt(amountEl.innerText)

    })

    totalpriceEl.innerText = totalPrice


    if (totalPrice > 0) {
        cartDelivery.classList.remove('none')
    } else {
        cartDelivery.classList.add('none')
    }

    if (totalPrice >= 600) {
        deliveryCost.classList.add('free')
        deliveryCost.innerText = 'бесплатно'
    }
    else {
        deliveryCost.classList.remove('free')
        deliveryCost.innerText = '250 ₽'
    }
}