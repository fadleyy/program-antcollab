const card = document.querySelector('#card')
const card2 = document.querySelector('#card2')

console.log(card)

card.addEventListener('click', () => {
    card.classList.toggle('opacity-10')
})

// card2.classList.toggle('opacity-10')