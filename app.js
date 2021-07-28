document.addEventListener('DOMContentLoaded', () => {
    //card options 
    const cardArray = [
        {
            name: 'abra',
            img: 'images/abra.jpg'
        },
        {
            name: 'abra',
            img: 'images/abra.jpg'
        },
        {
            name: 'blastoise',
            img: 'images/blastoise.jpg'
        },
        {
            name: 'blastoise',
            img: 'images/blastoise.jpg'
        },
        {
            name: 'charizard',
            img: 'images/charizard.jpg'
        },
        {
            name: 'charizard',
            img: 'images/charizard.jpg'
        },
        {
            name: 'haunter',
            img: 'images/haunter.jpg'
        },
        {
            name: 'haunter',
            img: 'images/haunter.jpg'
        },
        {
            name: 'lugia',
            img: 'images/lugia.jpg'
        },
        {
            name: 'lugia',
            img: 'images/lugia.jpg'
        },
        {
            name: 'pikachu',
            img: 'images/pikachu.jpg'
        },
        {
            name: 'pikachu',
            img: 'images/pikachu.jpg'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []

    //board creation
    function createBoard(){
        for (let i = 0; i < cardArray.length; i++){
            const card = document.createElement('img')
            card.setAttribute('src', 'images/rocket.jpg')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    //check for match
    function checkForMatch(){
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        if(optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', 'images/rocket.jpg')
            cards[optionTwoId].setAttribute('src', 'images/rocket.jpg')
            alert('You have clicked the same pokemon!')
        }
        else if (cardsChosen[0] === cardsChosen[1]){
            alert('You have caught a ' + cardsChosen[0] + ' !')
            cards[optionOneId].setAttribute('src', 'images/pokeball.jpg')
            cards[optionTwoId].setAttribute('src', 'images/pokeball.jpg')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
        }else{
            cards[optionOneId].setAttribute('src', 'images/rocket.jpg')
            cards[optionTwoId].setAttribute('src', 'images/rocket.jpg')
            alert('keep this up and they will steal them')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2){
          resultDisplay.textContent = 'Congratulations, you caught them all!!'
        }
    }

    //flip card
    function flipCard() {
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
          setTimeout(checkForMatch, 500)
        }
    }

    createBoard()

})