// Variaveis de seleção de elementos
const urlApi = "https://kitsu.io/api/edge";
const input = document.querySelector('#input');
const searchBtn = document.querySelector("#btn")
const pesquisa = document.querySelector('.pesquisa')




// Funções
const showPesquisa = async (valor) => {
	const urlSearch = `https://api.jikan.moe/v4/anime?q=${valor}&sfw`

	const res = await fetch(urlSearch)
	const dados = await res.json()

	return dados;

}


const mostrarValor = async (valor) => {
	const dados = await showPesquisa(valor)
	
	// console.log(dados);
	
	
	dados['data'].forEach(animes => {

		
		const ul = document.createElement('ul')
		ul.setAttribute("id", "ul")
		const li = document.createElement("li")
		ul.append(li)
		li.innerText = animes.title
		pesquisa.appendChild(ul)
		
		
		const img = document.createElement("img")
		img.setAttribute("src", `${animes.images.jpg.large_image_url}`)
		img.setAttribute("class", "imagens")
		ul.appendChild(img)
		
	});
	
}

function limpaContent() {
	input.value = ""
	input.focus()
}


function limpaImg() {
	pesquisa.innerHTML = ""
	// console.log(pesquisa);
}


// Eventos

searchBtn.addEventListener('click', (e) => {
	e.preventDefault()
	
	const valor = input.value;
	
	mostrarValor(valor)
	
	limpaContent()
	
	limpaImg()
	
	
})

input.addEventListener("keypress", (e) => {
	if (e.keyCode === 13) {
		limpaImg()
		return mostrarValor()
	}

	
})








