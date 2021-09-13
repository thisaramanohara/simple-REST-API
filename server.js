//to host the api

const http = require('http')

const PORT = process.env.PORT || 5001

const server = http.createServer((req, res) => {
    if (req.url === '/api' && req.method === 'GET') {
        res.writeHead(200, {'Content-Type':'application/json'})
        res.end(JSON.stringify({message:'Hi Thisara Manohara'}))
    }
})

server.listen(PORT, ()=> {
    console.log(`Server started on PORT: ${PORT}`);
})