// game suit jawa

// function for computer
const optionComp = () => {

    // variable computer random option
    const comp = Math.random() // output: float

    // optional
    if(comp < 0.32){
        return 'orang'
    }else if(comp >= 0.32 && comp < 0.72){
        return 'gajah'
    }else{
        return 'semut'
    }
}

// function for random
const randomImage = () => {

    // image random
    const mixImage = document.getElementById('img-computer')
    const image = ['gajah', 'orang', 'semut']
    let index = 0
    const startTime = new Date().getTime()

    setInterval(() => {
        if(new Date().getTime() - startTime > 1000){                        
            return clearInterval
        }
        mixImage.setAttribute('src', 'assets/'+image[index++]+'.png')
        if(index == image.length) index = 0
    }, 200)
}

// function for rule
const ruleGame = (player, comp) => {

    // rules gameplay
    if(player == comp){
        return 'DRAW!!'
    }else if(player == 'orang'){
        return (comp == 'semut') ? 'WINNER :)' : 'LOSER :p'
    }else if(player == 'semut'){
        return (comp == 'gajah') ? 'WINNER :)' : 'LOSER :p'
    }else{
        return (comp == 'orang') ? 'WINNER :)' : 'LOSER :p'
    }
}

// function score
const score = (result) => {
    let compScore = document.getElementById('comp-score')
    let playerScore = document.getElementById('player-score')
    if(result == 'LOSER :p'){
        return compScore.innerText++
    }else if(result == 'WINNER :)'){
        return playerScore.innerText++
    }else{
        alert('Not Change')
    }
}

// variable event
const select = document.querySelectorAll('li img')

select.forEach((press) => {
    
    // menentukan hasil pilihan player
    press.addEventListener('click', () => {
        
        // variabel
        const comp = optionComp()
        const player = press.id
        const result = ruleGame(player, comp)
        

        randomImage()

        setTimeout(() => {
            const change = document.getElementById('img-computer')
            const showResult = document.getElementById('result')

            // show result
            change.setAttribute('src', 'assets/'+comp+'.png')
            showResult.innerText = result

            score(result)
        }, 1000)
    })
})


























// const orang = document.getElementById('orang')
// const gajah = document.getElementById('gajah')
// const semut = document.getElementById('semut')

// // event
// // orang.addEventListener('click', (event) => {
    
// //     // variabel
// //     const comp = optionComp()
// //     const player = orang.id
// //     const result = ruleGame(player, comp)
// //     const change = document.getElementById('img-computer')
// //     const showResult = document.getElementById('result')

// //     // show result
// //     if(result == 'draw'){
// //         change.setAttribute('src', 'assets/'+comp+'.png')
// //         showResult.innerText = 'DRAW!!'
// //     }else if(result == 'win'){
// //         change.setAttribute('src', 'assets/'+comp+'.png')
// //         showResult.innerText = 'WINNER!!'
// //     }else{
// //         change.setAttribute('src', 'assets/'+comp+'.png')
// //         showResult.innerText = 'LOSER!!'
// //     }
// //     event.preventDefault()
// // })