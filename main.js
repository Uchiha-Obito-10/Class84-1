names = [];

function submit() {
    var name_1 = document.getElementById("s1").value;
    var name_2 = document.getElementById("s2").value;
    var name_3 = document.getElementById("s3").value;
    var name_4 = document.getElementById("s4").value;

    names.push(name_1);
    names.push(name_2);
    names.push(name_3);
    names.push(name_4);

    console.log(names);

    document.getElementById("display").innerHTML = names;
    
}
