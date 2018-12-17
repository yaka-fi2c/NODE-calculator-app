module.exports =

    function divide(arr) {
        
        var divided = arr.reduce(function (a, b) {
            return a / b
        });
        return divided;
    };