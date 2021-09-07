document.addEventListener('DOMContentLoaded', () => {
    // card options
    const cardArray = [
        {
            name: 'ariel',
            img: 'images/ariel.png'
        },
        {
            name: 'ariel',
            img: 'images/ariel.png'
        },
        {
            name: 'aurora',
            img: 'images/aurora.png'
        },
        {
            name: 'aurora',
            img: 'images/aurora.png'
        },
        {
            name: 'belle',
            img: 'images/belle.png'
        },
        {
            name: 'belle',
            img: 'images/belle.png'
        },
        {
            name: 'cinderella',
            img: 'images/cinderella.png'
        },
        {
            name: 'cinderella',
            img: 'images/cinderella.png'
        },
        {
            name: 'jasmine',
            img: 'images/jasmine.png'
        },
        {
            name: 'jasmine',
            img: 'images/jasmine.png'
        },
        // {
        //     name: 'merideth',
        //     img: 'images/merideth.png'
        // },
        // {
        //     name: 'merideth',
        //     img: 'images/merideth.png'
        // },
        // {
        //     name: 'moana',
        //     img: 'images/moana.png'
        // },
        // {
        //     name: 'moana',
        //     img: 'images/moana.png'
        // },
        {
            name: 'mulan',
            img: 'images/mulan.png'
        },
        {
            name: 'mulan',
            img: 'images/mulan.png'
        },
        // {
        //     name: 'pocahontas',
        //     img: 'images/pocahontas.png'
        // },
        // {
        //     name: 'pocahontas',
        //     img: 'images/pocahontas.png'
        // },
        // {
        //     name: 'rapunzel',
        //     img: 'images/rapunzel.png'
        // },
        // {
        //     name: 'rapunzel',
        //     img: 'images/rapunzel.png'
        // },
        // {
        //     name: 'snow white',
        //     img: 'images/snowWhite.png'
        // },
        // {
        //     name: 'snow white',
        //     img: 'images/snowWhite.png'
        // },
        // {
        //     name: 'tiana',
        //     img: 'images/tiana.png'
        // },
        // {
        //     name: 'tiana',
        //     img: 'images/tiana.png'
        // },
    ]

    cardArray.sort( () => 0.5 - Math.random())

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];

    // create board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src', 'images/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        };
    };

    // check matching cards
    function checkForMatch() {
        const cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];

        if(optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
            // alert('You have clicked the same image!')
          }
          else if (cardsChosen[0] === cardsChosen[1]) {
            // alert('You found a match')
            cards[optionOneId].setAttribute('src', 'images/white.png')
            cards[optionTwoId].setAttribute('src', 'images/white.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
          } else {
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
            // alert('Sorry, try again')
          }
          cardsChosen = []
          cardsChosenId = []
          resultDisplay.textContent = cardsWon.length
          if  (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congratulations! You found them all!'
          }
        }

    // flipping the cards
    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)

        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()
})

function refreshPage() {
    window.location.reload();
}