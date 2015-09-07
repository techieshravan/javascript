var mySingleton = (function() {

    var instance;

    function init() {

        function privateMethod() {
            console.log('I am a private method');
        }

        var privateVariable = "I am also a private";

        return {
            publicMethod : function () {
                console.log('I am a public method');
            },
            publicProperty: "I am also a public"
        };
    }

    return {
        getInstance: function() {

            if (!instance) {
                instance = init();
            }
            return instance;
        }
    };

})();