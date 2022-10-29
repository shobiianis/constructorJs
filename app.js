function Students(name,age,rollNo){

this.name = name,
this.age=age,
this.rollNo=rollNo


}

Students.prototype.school="CITY SCHOOL";

var student1=new Students("shoaib",22, 9213)
var student2=new Students("John",19, 1234)
var student3=new Students("sara",18, 5678)

    console.log(student1,student2,student3)