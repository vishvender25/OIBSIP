let cel = document.getElementById("Celcius")
let feh = document.getElementById("Fahrenit")

cel.addEventListener("input", function(){
   let c = this.value;
   let f = (1.8*c) + 32
   feh.value = f
}
)

feh.addEventListener("input", function(){
    let f = this.value;
    let c = (5/9*(f-32))
    cel.value = c
 }
 )