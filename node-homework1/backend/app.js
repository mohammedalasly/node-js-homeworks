const http = require('http');

const stateUrl = "http://localhost:8080";
let state = 10;
console.log(stateUrl);
function handelRequest(request, response) {
    console.log(request.url);
    if (request.url === "/state") {
        response.writeHead(200, { "Content-Type": "text/plain" })
        response.end(state.toString());
    }
    else if (request.url === "/add") {
        state++;
        response.writeHead(200, { "Content-Type": "text/plain" })
        response.end(state.toString());
    }
    else if (request.url === "/subtract") {
        state--;
        response.writeHead(200, { "Content-Type": "text/plain" })
        response.end(state.toString());
    }
    else if (request.url === "/reset") {
        state = 10;
        response.writeHead(200, { "Content-Type": "text/plain" })
        response.end(state.toString());
    }
    else if (request.url === "/bad") {
        response.writeHead(404, { "Content-Type": "text/html" })
        response.end("<img src ='https://image.shutterstock.com/image-illustration/boy-urinating-450w-343936052.jpg' alt = 'pee'/><h1><mark>Oops! Page Not Found.</mark></h1>");
    }

}

const server = http.createServer(handelRequest)

server.listen(8080, function (error) {
    if (error) console.error(error);
    else console.log("Listening on port 8080...")
});
