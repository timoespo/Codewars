//Using Filter and Includes array methods

function gooseFilter(birds) {
  var geese = ['African', 'Roman Tufted', 'Toulouse', 'Pilgrim', 'Steinbacher']
  return birds.filter((x) => !geese.includes(x))
}