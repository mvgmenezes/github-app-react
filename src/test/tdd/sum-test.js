const sum = require('./sum')

console.assert(
    typeof sum === 'function', 'Sum should is a function'
)

console.assert(
    sum(1,2)=== 3,
    'sum(1,2)=== 3' 

)

console.assert(
    sum(2,3)=== 5,
    'sum(2,3)=== 5' 

)
console.log('All tests passed!')