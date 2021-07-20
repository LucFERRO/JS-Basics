// const ages = [40,35,26,26,25,24,24,22,23,21,21,20]
// let moyenne = 0
// let total = 0
// ages.forEach(element => {
//     total += element;
// });
// moyenne = total/ages.length;
// console.log(moyenne);
let max_char = document.getElementById('text_html').maxLength;
let inputhtml = document.getElementById("text_html");
 

inputhtml.onkeyup = inputhtml.onkeypress = function(){
    document.getElementById("live").innerHTML = this.value;

    let countdown = max_char - inputhtml.value.length;
    document.getElementById("count").innerHTML =  countdown;

    let progress_percent = 100*this.value.length/max_char;
    let progress_percent2 = progress_percent.toString().concat('%');
    document.getElementById("progress_bar").innerHTML = progress_percent2;

    let bar_width = document.getElementById("progress").style.width;
    // bar_width = progress_percent2;
    console.log(progress_percent2);

}

