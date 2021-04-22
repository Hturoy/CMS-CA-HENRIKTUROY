const getUrl = document.location.search

const content = document.querySelector (".contentDetails")
const para = new URLSearchParams (getUrl)
const id = para.get("id")
console.log(id)

const url = `https://henrikturoy.no/wp-json/wc/store/products/${id}`

const listProducts = (products) => {
	content.innerHTML = "";
let newContent = ``
	for (image of products.images) {
		 newContent = `<ul><a href="./details.html?id=${products.id}">
        <h2>${products.name}</h2>

        <img src="${image.thumbnail}"></img>
        <p>Price: ${products.prices.price}${products.prices.currency_prefix}</p>
        <p>Rating: ${products.average_rating}</p>
    </ul></a>`
    }
		content.innerHTML += newContent;
	

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
