const limit = {
    maxEnergy: 10,
    minEnergy: 0
}

const defaults = {
    roundNumber: 1,
    energy: 3,
    energyControl: 0
}

const current = {
    roundNumber: defaults.roundNumber,
    energy: defaults.energy,
}

const round = document.querySelector('.round')
const energyCount = document.querySelector('.energyCount')

const usedCount = document.querySelector('.energyUsed .count')
const usedAdd = document.querySelector('.energyUsed .add')
const usedSubtract = document.querySelector('.energyUsed .subtract')

const gainedCount = document.querySelector('.energyGained .count')
const gainedAdd = document.querySelector('.energyGained .add')
const gainedSubtract = document.querySelector('.energyGained .subtract')

const destroyedCount = document.querySelector('.energyDestroyed .count')
const destroyedAdd = document.querySelector('.energyDestroyed .add')
const destroyedSubtract = document.querySelector('.energyDestroyed .subtract')

const endTurn = document.querySelector('.endTurn')
const reset = document.querySelector('.reset')

let usedCurrentCount = defaults.energyControl
let gainedCurrentCount = defaults.energyControl
let destroyedCurrentCount = defaults.energyControl

reset.addEventListener('click', () => {
    round.innerText = `Round ${defaults.roundNumber}`
    energyCount.innerText = defaults.energy
    current.roundNumber = defaults.roundNumber
    current.energy = defaults.energy
    usedCount.innerText = defaults.energyControl
    usedCurrentCount = defaults.energyControl
    gainedCount.innerText = defaults.energyControl
    gainedCurrentCount = defaults.energyControl
    destroyedCount.innerText = defaults.energyControl
    destroyedCurrentCount = defaults.energyControl
})

endTurn.addEventListener('click', () => {
    current.roundNumber++

    if (current.energy <= limit.maxEnergy)
        current.energy = current.energy + (current.energy == 9 ? 1 : 2)

    if (current.energy > limit.maxEnergy)
        current.energy = limit.maxEnergy

    else if (current.energy < limit.minEnergy)
        current.energy = 2

    round.innerText = `Round ${current.roundNumber}`
    energyCount.innerText = current.energy

    usedCount.innerText = defaults.energyControl
    usedCurrentCount = defaults.energyControl
    gainedCount.innerText = defaults.energyControl
    gainedCurrentCount = defaults.energyControl
    destroyedCount.innerText = defaults.energyControl
    destroyedCurrentCount = defaults.energyControl
})

usedAdd.addEventListener('click', () => {

    if (usedCurrentCount <= current.energy + 1) {
        usedCurrentCount++
        usedCount.innerText = usedCurrentCount
        current.energy--
        energyCount.innerText = current.energy
    }
})

usedSubtract.addEventListener('click', () => {
    if (usedCurrentCount > limit.minEnergy) {
        usedCurrentCount--
        usedCount.innerText = usedCurrentCount
        current.energy++
        energyCount.innerText = current.energy
    }
})

gainedAdd.addEventListener('click', () => {
    if (current.energy < limit.maxEnergy) {
        gainedCurrentCount++
        gainedCount.innerText = gainedCurrentCount
        current.energy++
        energyCount.innerText = current.energy
    }
})

gainedSubtract.addEventListener('click', () => {
    if (gainedCurrentCount > limit.minEnergy) {
        gainedCurrentCount--
        gainedCount.innerText = gainedCurrentCount
        current.energy--
        energyCount.innerText = current.energy
    }
})

destroyedAdd.addEventListener('click', () => {
    if (destroyedCurrentCount + current.energy <= limit.maxEnergy
        && current.energy > limit.minEnergy) {
        destroyedCurrentCount++
        destroyedCount.innerText = destroyedCurrentCount
        current.energy--
        energyCount.innerText = current.energy
    }
})

destroyedSubtract.addEventListener('click', () => {
    if (destroyedCurrentCount > limit.minEnergy) {
        destroyedCurrentCount--
        destroyedCount.innerText = destroyedCurrentCount
        current.energy++
        energyCount.innerText = current.energy
    }
})