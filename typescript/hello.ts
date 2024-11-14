// string example
var test:string = 'test value';
// number example
var val: number = 10;
var is_true:boolean = true;

//array only containing string values
var user:string[] = ['Andy', 'Sam', 'George', 'Harsh'];

//to allow string and number values in an array
var str_num_arr:(string | number )[] = [1, 'Array Example', 'Test User', 100];
//Another way of writing the same thing
var str_num_arr_2:[string, number] = ['Array Example', 1];

//in case if you are not sure about the type
var array_example:any = [1, "Testing", true];

var obj_example: {id: number, name: string} = {id: 1, name:"Harsh"};

var student: {id: number, name: string} = {id:1, name:"Same"};

type Student = {
    id: number,
    name: string
}

var obj_example_2: Student = {id: 1, name:"Harsh"};

var student_2: Student = {id:1, name:"Same"};
//any is to say i will accept all the types
var student_3: any = {id:1, name:"Same"};

function info(name: string, age: number) {
    return "You name is " + name + " and you are " + age + " year old"; 
}

var personal_info = info('Harsh', 25);
console.log(personal_info);

console.log(test);
console.log(val);