
// // create a class 
// class Person {
//     constructor(name , age){
//         this.name = name;
//         this.age = age;

//     }

//     // create afunction under the classes
// talk(){
//     console.log(`hello, my name is ${this.name}`);

// }
// }

// // create a object
// let p1 =new Person("satish" , 21);
// let p2 = new Person("chandra",20);

// ======PARENT (BASE)====>

    class Person{
       ;
        constructor(name , age){
            // console.log("parent section me hu");
            this.name = name;
            this.age = age;

        }
        talk(){
            console.log(`hy , my name is ${this.name}`);
        }
    }



class Student extends Person {
constructor(name ,age , marks){
    // console.log("student section me hu");
  super(name ,age);

    this.marks = marks;
}
// talk(){
//     console.log(`hy , my name is ${this.name}`);
// }

};


class Teacher extends Person{
 constructor (name , age, subject){
        //    this.name= name;
        //    this.age= age;
        super(name , age);

           this.subject= subject;

 }
//  talk(){
//     console.log(`hy , my name is ${this.name}`);
// }
}

let s1 = new Student("satish", 22 , 99);
let t1 = new Teacher ("veena" ,39 , "CS");
