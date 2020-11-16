const express = require('express');
const session = require('express-session');
const app = express();
const port = process.env.PORT || 5000;

// Add your code below

app.use(session({secret: '28828758144247498801',saveUninitialized: true, resave:true}));

app.get('/', (req, res) => {
    // Add your code below
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write(`${current_route(req)}`);
    res.write("\n\n");
    if(!req.session.history){ // Only display if new session AND requested root
        res.write("Welcome to http://localhost:5000/");
        req.session.history = ["/"]
    }else {
        res.write(route_history(req));
        req.session.history.push("/");
    }
    res.end();
});

app.get('/*', (req, res) => {
    // Add your code below
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write(`${current_route(req)}`);
    res.write("\n\n");
    if(!req.session.history){
        req.session.history = [req.path];
    }else {
        req.session.history.push(req.path);
    }
    res.write(route_history(req));
    res.end();
});
    
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

function current_route(req){
    return `Currently on route: ${req.path}`;
}

function route_history(req){
    var retval = `Previously visited:
`;
    req.session.history.forEach( (x) => {
        retval += `${x}
`;
    });
    return retval;
}