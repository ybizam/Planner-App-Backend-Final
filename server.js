console.log("----------------------------------------");
console.log("Planner App > backend > server.js");
console.log("---------------------------------------");

//----------------------------------------------
// imports
//----------------------------------------------
const app = require('./controller/app');
const port = process.env.PORT || 4201;

app.listen(port, () => {
    console.log(`Server started and accessible via http://localhost:${port}/`);
});     