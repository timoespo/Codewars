//It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script. Return the average of the given array rounded down to its nearest integer.
function getAverage(marks) {
    let total = 0
    for (let i = 0 ; i < marks.length ; i++) {
     total += marks[i]   
    } return Math.floor(total / marks.length)
}

//test cases
getAverage([2,2,2,2]) // 2
getAverage([1,2,3,4,5]) // 3