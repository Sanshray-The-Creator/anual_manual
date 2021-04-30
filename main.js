student_array =[];

function submit() {

    var name_1 = document.getElementById("nost1").value;
    var name_2 = document.getElementById("nost2").value;
    var name_3 = document.getElementById("nost3").value;
    var name_4 = document.getElementById("nost4").value;

    student_array.push(name_1);
    student_array.push(name_2);
    student_array.push(name_3);
    student_array.push(name_4);

    console.log(student_array);

    document.getElementById("display_name").innerHTML = student_array;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";

}

function sorting(){
student_array.sort();
console.log(student_array);
document.getElementById("display_name").innerHTML = student_array;
}