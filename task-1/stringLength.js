
function stringLength(string) {
    const length = string.length;

    if(length < 1 || length > 10) {
        throw new Error('Invalid String!');
    }

    return length;
}

module.exports = stringLength;