//var redondeo_abajo = Math.floor(1.8);
//console.log(redondeo_abajo);

//var redondeo_arriba = Math.ceil(1.8);
//console.log(redondeo_arriba);

//var random = Math.random();
// Aleatorio entre 0 y 1
// console.log(aleatorio);

//generamos un aleatorio entre 0-100


    //Obtener el num que el usuario ingresó en el input

    //comparar entre el num aleatorio y el num que ingreso

    //desplegar mensaje

    var aleatorio0_100 = Math.ceil((Math.random()*100));
    console.log(aleatorio0_100);

    function adivinarNumero(){
    var num_persona=document.querySelector("#adivina").value;
    console.log(num_persona);
    if(num_persona<aleatorio0_100){
        document.querySelector(".resultado").innerText="el número debería ser mayor";
    }
    else if(num_persona>aleatorio0_100){
        document.querySelector(".resultado").innerText="el número debería ser menor";
    }
    else{
        document.querySelector(".resultado").innerText="el número es correcto";
    }
}