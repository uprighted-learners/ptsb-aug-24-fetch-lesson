/* 
    ? Application Programming Interface (API)
    * a way for a client to communicate with the server
    * allows for HTTP request and response lifecycle
    * part of a RESTful architecture
    * REST - representational state transfer
    * stateless, cacheable, layered system allows for req and res using:
        * CRUD: create, read, update, delete
        * HTTP methods: POST, GET, PUT, DELETE
        * HTTP requests sent from the client
            * headers
            * body (POST, PUT)
            * query parameters (GET, DELETE)
        * HTTP response received from the server
            * headers
            * payload
            * status code
*/

/* 
    ? URL or URI
    * uniform resource locator (identifier)
    * address that allows us to access web resources
    * DNS (domain name) server resolves the url string into an IP address
    
    * http:// || https:// --> protocol type
    * www.google.com --> domain
        * can have subdomains (ex: gmail.google.com)
        * .com; .de; .pl; .co.uk --> top-level domains
        * domain === IPD address (once resolved by DNS server) + port === socket
    * Port :80 for HTTP or :443 for HTTPS
    * Path
        * location and structure of content within the resource
    * Query Parameters
        * map to key-value pairs within an object
        * begin with ?
        * separated by &
        * the property is assigned to value (ex: ?name=Paul&age=24)
        * usually do not contain ''
    * Anchor
        * id's that allow us to go to specific point in the document
        * ex: #footer will take you to an element with that id attr value
*/

/* 
    ? Fetch API
    * fetch is an asynchronous function
    * we don't know how long req-res lifecycle will take
    
    * 1. Fetch your resource and return a promise
    * 2. Use .then resolver to catch fetch's return and assign to a prameter
    * 3. The parameter is part of a Response interface object
    * 4. Body of our response is inacessible. It's part of a ReadableStream object
    * 5. Utilize Response interface's .json() method to read the stream
    * 6. .json() method returns a Promise
    * 7. Resolve the promise with one more .then() resolver
    * 8. Catch the return as a data parmeter
*/

const submit = document.getElementById("submit")

submit.addEventListener("click", evt => {
    evt.preventDefault()
    let pokemon = evt.target.previousElementSibling.value
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    getData(url)
})

// fetch(url)
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

async function getData(url) {
    let res = await fetch(url)
    let data = await res.json()
    console.log(data)

    // data.results.forEach(pokemon => {
    //     let h2 = document.createElement("h2")
    //     h2.textContent = pokemon.name
    //     document.body.appendChild(h2)
    // })
}


