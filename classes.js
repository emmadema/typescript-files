var Cat = /** @class */ (function () {
    function Cat() {
        this.name = "Nemo";
    }
    Cat.prototype.hello = function (person) {
        console.log("Hello " + person);
    };
    return Cat;
}());
var malcolm = new Cat();
malcolm.saying = "I hate winter";
console.log(malcolm.saying);
malcolm.hello('Toad');
