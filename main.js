// require relevant modules
const colors = require('colors');
const add = require('./add');
const subtraction = require('./subtraction');
const multiply = require('./multiply');
const divide = require('./divide');
const prompt = require('prompt');

// interact with the user

var schema = {
    properties: {

        number: {
            description: 'enter numbers seperated with comma'.blue,
            type: 'string',
            message: 'this is not a number',
            required: true
        },

        arithemic_operator: {
            description: 'choose mathematical operation: -,+,*,/'.blue,
            type: 'string',
            message: 'this is not an arithemic operator',
            required: true
        },
    }
};

//
// Start the prompt
//
prompt.start();

//
// Get two properties from the user: numbers , math operator
//
prompt.get(schema, function (err, result) {
    //
    // Log the results.

    if (result.arithemic_operator === '-') {
        var nums = result.number;
        // handle the strings (turn to a numbers)
        var splits = nums.split(',').map(function (item) {
            return parseInt(item);
        })
        console.log('The result is: ' + colors.red(subtraction(splits)))
    } else if (result.arithemic_operator === '+') {
        var nums = result.number;
        var splits = nums.split(',').map(function (item) {
            return parseInt(item);
        })
        console.log('The result is: ' + colors.red(add(splits)))
    } else if (result.arithemic_operator === '*') {
        var nums = result.number;
        var splits = nums.split(',').map(function (item) {
            return parseInt(item);
        })
        console.log('The result is: ' + colors.red(multiply(splits)))
    } else if (result.arithemic_operator === '/') {
        var nums = result.number;
        var splits = nums.split(',').map(function (item) {
            return parseInt(item);
        })
        console.log('The result is: ' + colors.red(divide(splits)))
    } else {
        console.log('invalid number or operator')
    }


});