module.exports =

    function multiply(arr) {
       
        var multiplyed = arr.reduce(function (a, b) {
            return a * b
        });
        return multiplyed;
    };