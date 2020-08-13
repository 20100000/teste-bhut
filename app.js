import express from 'express';
import login from './app/api/login/router';
import carro from './app/api/carro/router';
import cors from 'cors';
import mJwt from './lib/middlewareJwt';
const app = express();
app.use(express.json());

app.use(cors());
app.use(login.path, login.router);

app.use(mJwt);
app.use(carro.path, carro.router);


app.listen(3000, () => {
    console.log('localhost:3000');
});
