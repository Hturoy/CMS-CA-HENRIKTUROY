const url = "https://henrikturoy.no/wp-json/wc/store/products/"
const content = document.querySelector (".content")



const listProducts = (products) => {
	content.innerHTML = "";
	for (let i of products) {
		console.log(i)
		let newContent = ``
		for (image of i.images) {
			newContent+= `<ul> <a href="./details.html?id=${i.id}">
			<h2>${i.name}</h2>

			<img src="${image.thumbnail}"></img>
			<p>Price: ${i.prices.price}${i.prices.currency_prefix}</p>
			<p>Rating: ${i.average_rating}</p>
			<button>View more</button>
		</a></ul>`
		}
		content.innerHTML += newContent;
	}

}







fetch(url, {
	"method": "GET",
})

.then(response => response.json())
.then(data => listProducts(data))
.catch(error =>{
	console.error(error.message);
	content.innerHTML = `<div class="error">An error has occurred</div>`

})



