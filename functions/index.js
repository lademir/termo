function getRandomIntInclusive() {
    // min = Math.ceil(min);
    // max = Math.floor(max);
    const min = 1
    const max = 5
    return Math.floor(Math.random() * (max - min)) + min;
}

export { getRandomIntInclusive }