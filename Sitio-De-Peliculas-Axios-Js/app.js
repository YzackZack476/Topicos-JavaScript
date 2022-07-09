console.log("🟢 App running");
// Consumo de una api con Javascript puro



// Declaracion de variables
let pagina=1;
let api_key = '8d157a298a7000985159d4ab5b3940fa';
const btnAnterior = document.getElementById('btnAnterior');
const btnSiguiente = document.getElementById('btnSiguiente');


btnSiguiente.addEventListener('click', ()=>{
	if (pagina<9999){
		pagina+=1;
		cargarPeliculas();
	}
});

btnAnterior.addEventListener('click', ()=>{
	if (pagina>2){
		pagina-=1;
		cargarPeliculas();
	}
});

const cargarPeliculas = async () => {
	try{
		const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=es-MX&page=${pagina}`)
		
		const data = await respuesta.json();

		if (respuesta.status === 200){
			peliculas = '';
			data.results.forEach(movie => {
				// Por cada pelicula
				peliculas += `
					<div class="pelicula">
						<img class="poster" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}">
						<h3 class="titulo">${movie.title}</h3>
					</div>
				
				`;

			});

			console.log(`Page #${pagina}`);
			document.getElementById('contenedor').innerHTML = peliculas;

		}else if (respuesta.status === 404){
			console.log("Pelicula no encontrada");
		}
		
	}catch(error){
		console.log(error);
	}

}


console.log("▶ cargarPeliculas function has started");
cargarPeliculas();