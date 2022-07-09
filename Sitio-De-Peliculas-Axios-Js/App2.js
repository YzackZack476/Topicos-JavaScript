console.log("🟢 App running");

// Declaracion de variables y elementos del DOM
let pagina=1;
let api_key = '8d157a298a7000985159d4ab5b3940fa';
let token_key = 'eyJhbGciOiJIUzI1NiJ9.          eyJhdWQiOiI4ZDE1N2EyOThhNzAwMDk4NTE1OWQ0YWI1YjM5NDBmYSIsInN1YiI6IjYyYzRmYWQyZjVmMWM1MDA1YTFhNzc2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Fzl1dj_Gc7IsWaG5coSImZxH8depcxwIpdY4Rubjiv8';
const btnAnterior = document.getElementById('btnAnterior');
const btnSiguiente = document.getElementById('btnSiguiente');

btnSiguiente.addEventListener('click', ()=>{
    if (pagina<9999){
        pagina+=1;
		cargarPeliculas();
	}
});

btnAnterior.addEventListener('click', ()=>{
    if (pagina>=2){
        pagina-=1;
		cargarPeliculas();
	}
});


// Consumo de una api con libreria Axios
const cargarPeliculas = async () => {
    try {
        let respuesta = await axios.get('https://api.themoviedb.org/3/movie/popular',{
            params : {
                language : 'es-MX',
                api_key: api_key,
                page:pagina
            },
            headers : {
                'Authorization': `Bearer ${token_key}`
            }
        });

        if(respuesta.status === 200){
            peliculas = '';
			respuesta.data.results.forEach(movie => {
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
		
    } catch (error) {
        console.log(error);
    }
}


console.log("▶ cargarPeliculas function has started");
cargarPeliculas();