class studentProfile{
    firstName;
    lastName;
    cls;
    clsname;
    teacher;
    teacherName;
    teacherEmail;
    grade;
    constructor(firstName,lastName,cls,clsname,teacher,teacherName,teacherEmail,grade){
        this.firstName = firstName;
        this.lastName = lastName;
        this.cls = cls;
        this.clsname = clsname;
        this.teacher = teacher;
        this.teacherName = teacherName;
        this.teacherEmail = teacherEmail;
        this.grade = grade;
    }
}

let st1 = new studentProfile("Yathish","Kumar","C1","ReactJS","ES6","Kumar","kumar@abc.com",{Math:'A',Science:'B'});
console.log(st1);
