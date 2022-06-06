//Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

const quarterOf = (month) => {
    if (month <= 3) {
        return 1
    } else if (month <= 6) {
        return 2
    } else if (month <= 9) {
        return 3
    } else if (month <= 12) {
        return 4
    }
}

///test cases
quarterOf(4) //2
quarterOf(8) //3
quarterOf(11) //4
