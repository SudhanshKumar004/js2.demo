function day3(){
    let a = parseInt(window.prompt("Enter number 1"));
    let b = parseInt(window.prompt("Enter number 2"));
    window.alert(a+b);
}

day3();

function dayy3(){
    let a = parseInt(window.prompt("Enter a number"));
    let b = parseInt(window.prompt("Enter number 2"));
    window.alert(a+b);
}

dayy3();


// ECMA(European Computer Manufacturers Association ) script 6 is the official name of java script..



// Difference between 
//      re-declare  re-initialize
// var     yes         yes
// let     no          yes
// const   no          no

function dayyy3(){
    var a = 55;
    console.log(a);

    // var
    var a = "day3";
    console.log(a);

    // let
    let b = 55;
    b = "day3";
    console.log(b);

    // const
    const c = 55;
    console.log(c);

}

dayyy3();