var counterModule = (function() {

    var counter = 0;

    var incrementCounter = function() {
        return ++counter;
    };

    var resetCounter = function () {
        console.log("counter value prior to reset " + counter);
        counter = 0;
    };

    return {
        incrementCounter: incrementCounter,
        resetCounter: resetCounter
    };
})();

counterModule.incrementCounter();
counterModule.incrementCounter();
counterModule.incrementCounter();

counterModule.resetCounter();