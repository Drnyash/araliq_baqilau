let school = { 
    name: "Amjilt Cyber School",
    phoneNumber: 777,
    student:[{        
        studentName: "Daniyar",
        top: 18,
        progress: 78,
        lessons: 6,
    },
    {
        studentName: "Aizere",
        top: 14,
        progress: 23,
        lessons: 8,  
    },
    {
        studentName: "Qasym",
        top: 12,
        progress: 90,
        lessons: 2,   
    },
    {
        studentName: "Aisha",
        top: 14,
        progress: 54,
        lessons: 6, 
    },
    {
        studentName: "Kausar",
        top: 17,
        progress: 100,
        lessons: 2, 
    }
]
}
//2
function Schoool(){ 
let changeSchoolName = prompt("Mektep atin auistiriniz:")
if(changeSchoolName){
    school.name = changeSchoolName
    console.log(school);
}else{
    console.log(school);  
}
}
Schoool()
//3
function Phone(){ 
let changePhoneNumber = +prompt("Zhana telefon nomirin engiziniz:")
if(changePhoneNumber){
    school.phoneNumber = changePhoneNumber
    console.log(school);
}else{
    console.log(school);
}
}
Phone()
//4
function listStudentNames(){
    let list = school.student.map((student) => student.studentName)
    alert(list)
}
listStudentNames()



//5
function zhanaStudent(){ 
let name = prompt("Student atin engiziniz:")
let ortashaUlgerim = prompt("Studenttin ortasha ulgerimin engiziniz:")
let sabaqSani = prompt("Studenttin sabaq sanin engiziniz:")
let top = prompt("Student tobin engiziniz:")
let addStudent = school.student.push({"studentName:" + name + " , " +"progress:"+ortashaUlgerim +" , "+"lessons:"+sabaqSani+" , "+"top:"+top})
console.log(school.student);

}
zhanaStudent()



function menu(){
    let surak = +prompt("1 den 6 ga deiin san tandaniiz:")
    if(surak == 1){
        school()
    }else if(surak == 2){
        Phone()
    }else if(surak == 3){
        listStudentNames()
    }else if(surak == 4){

    }else if(surak == 5){

    }else if(surak == toqtat){
        alert("")
    }else{
        alert("qate teru")
    }
}
