import express from 'express';

const App = express();

App.listen(process.env.PORT || 3000, ()=>{
    console.log("Servidor en puerto  3000");
})


