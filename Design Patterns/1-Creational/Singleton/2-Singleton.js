var SingletonTester = (function() {
        
    function Singleton(options) {

        options = options || {};

        this.name = "SingletonTester";
        this.pointX = options.pointX || 6;
        this.pointY = options.pointY || 10;

    }

    var instnace;

    var _static = {

        name: "SingletonTester",

        getInstance: function (options) {

            if (instnace === undefined) {
                instnace = new Singleton();
            }
            return instnace;
        }
    };

    return _static;

})();

var test = SingletonTester.getInstance();