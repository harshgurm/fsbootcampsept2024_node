var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        console.log('Constructor is called. The values are', firstName, lastName);
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.fullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    return Person;
}());
var p = new Person('Harsh', 'Gurm');
// var p2: Person = new Person('Sam', 'Test');
// var p3: Person = new Person('Test', 'User');
// var p4: Person = new Person('George', 'Brown');
var full_name = p.fullName();
// var full_name_p2 = p2.fullName();
// var full_name_p3 = p3.fullName();
// var full_name_p4 = p4.fullName();
console.log(p);
console.log(full_name);
// console.log(full_name_p2);
// console.log(full_name_p3);
// console.log(full_name_p4);
var Male = /** @class */ (function (_super) {
    __extends(Male, _super);
    function Male(firstName, lastName, age) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.age = age;
        return _this;
    }
    return Male;
}(Person));
var home = new Male('Unique', 'Name', 30);
console.log(home.fullName());
