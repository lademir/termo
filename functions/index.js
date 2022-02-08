import bd from '../pages/api/bd'

function getRandomIntInclusive() {
    // min = Math.ceil(min);
    // max = Math.floor(max);
    const min = 1
    const max = bd.length + 1
    return Math.floor(Math.random() * (max - min)) + min;
    // return 98
}


export { getRandomIntInclusive }