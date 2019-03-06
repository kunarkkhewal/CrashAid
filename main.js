var afinn;

function preload(){
    afinn = loadJSON('afinn111.json')
}


function setup(){
    noCanvas();
    // console.log(afinn);

    var txt = select('#txt');
    txt.input(typing);
    // txt = txt.value;
    // console.log(" type of txt before",txt);

    // txt = String(txt);


    // console.log(" type of txt after",txt);

    function typing(){
        var words = txt.split(/\W/);
        console.log(words);
        // console.log(txt.value());
    }
}


function draw(){

}