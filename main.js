name_of_the_people_array=[];
function submit(){
    var person_name_1=document.getElementById("name1").value;
    var person_name_2=document.getElementById("name2").value;
    var person_name_3=document.getElementById("name3").value;
    var person_name_4=document.getElementById("name4").value;
    name_of_the_people_array.push(person_name_1);
    name_of_the_people_array.push(person_name_2);
    name_of_the_people_array.push(person_name_3);
    name_of_the_people_array.push(person_name_4);
    console.log(name_of_the_people_array);
    document.getElementById("display_name").innerHTML=name_of_the_people_array;
}
function sorting(){
    name_of_the_people_array.sort();
    console.log(name_of_the_people_array);
    document.getElementById("display_name").innerHTML=name_of_the_people_array;
}
function search(){
var s=document.getElementById("s1").value;
var found=0;
var j;
for(j=0; j<name_of_the_people_array.lenght; j++){
if(s==name_of_the_people_array[j]){
    found=found+1;
}
}
document.getElementById("p2").innerHTML="name_found"+found+"time/s";
console.log("found_name"+found+"time/s");
}