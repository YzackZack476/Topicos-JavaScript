console.log("🟢 App running");

// Obtener elemento del DOM
let msg1 = document.getElementById("message1");
let msg2 = document.getElementById("message2");
let loading = document.getElementById("loaging");

// Setear variables
let dataReady = false;

// Colocar mensaje de inicio
msg1.innerHTML = "Loading...";

// Una funcion asincrona devuelve automaticamente una promesa
async function getData(){
    return new Promise((resolve,reject)=>{
        // Devuelve un nombre despues de #n segundos
        let data = {
            "Nombre": "Listo",
            "Edad":27
        }

        setTimeout(()=>{resolve(data);},10000);
    });
}


async function waitGetData(){
    let data = await getData();
    dataReady = true;
    msg1.remove();
    loading.remove();
    msg2.innerHTML = data.Nombre;
}


// Traeme datos
waitGetData();

// Mientras tanto muestra que el programa se ejecuto chido
console.log("▶️ Ejecucion completa sin errores");