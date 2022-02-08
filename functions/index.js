function getRandomIntInclusive() {
    // min = Math.ceil(min);
    // max = Math.floor(max);
    const min = 1
    const max = 808
    return Math.floor(Math.random() * (max - min)) + min;
    // return 98
}


export { getRandomIntInclusive }