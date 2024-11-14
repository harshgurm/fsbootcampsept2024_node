// string example
var test = 'test value';
// number example
var val = 10;
var is_true = true;
//array only containing string values
var user = ['Andy', 'Sam', 'George', 'Harsh'];
//to allow string and number values in an array
var str_num_arr = [1, 'Array Example', 'Test User', 100];
//Another way of writing the same thing
var str_num_arr_2 = ['Array Example', 1];
//in case if you are not sure about the type
var array_example = [1, "Testing", true];
var obj_example = { id: 1, name: "Harsh" };
var student = { id: 1, name: "Same" };
var obj_example_2 = { id: 1, name: "Harsh" };
var student_2 = { id: 1, name: "Same" };
//any is to say i will accept all the types
var student_3 = { id: 1, name: "Same" };
function info(name, age) {
    return "You name is " + name + " and you are " + age + " year old";
}
var personal_info = info('Harsh', 25);
console.log(personal_info);
console.log(test);
console.log(val);
