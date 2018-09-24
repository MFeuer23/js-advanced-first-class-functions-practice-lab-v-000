// Code your solution in this file!
function logDriverNames(array) {
  array.forEach(function cb (el, i, array) {
    console.log(el.name);
  })
}

function logDriversByHometown(array, location) {
  array.forEach(function cb (el, i, array) {
    if (el.hometown === location) {
      console.log(el.name);
    }
  })
}

function compareNumbers(a, b) {
  return a - b;
}

function driversByRevenue(array) {
  return array.sort(compareNumbers(array[0].revenue, array[1].revenue))
}