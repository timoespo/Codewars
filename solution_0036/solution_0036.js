//You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
function getMiddle(s) {
    let position;
    let length;

    if(s.length % 2 === 1) {
        position = s.length  / 2;
        length = 1
    } else {
        position = s.length / 2 - 1
        length = 2
    }
    return s.substring(position, position + length)
}

//Another solution 
function getMiddle(s) {
    return s.substr(Math.ceil(s.length / 2- 1), s.length % 2 === 0 ? 2 : 1);
}

//test cases 
getMiddle('test') // 'es'
getMiddle('testing') // 't'
