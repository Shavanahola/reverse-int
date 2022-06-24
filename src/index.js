module.exports = function reverse(n) {
    if (n < 0) {
        return Number([...Math.abs(n).toString()].reverse().join(""));
    }
    return Number([...n.toString()].reverse().join(""));
};
