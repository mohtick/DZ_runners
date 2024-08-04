
import path from 'node:path';

import express from 'express';

import godoRouter from './routes/godo.js';




const server = express();
// server.listen(8000);



server.set('views', path.resolve('./http/views'));

server.set('view engine', 'ejs');

server.use(express.static('./http/public'));

server.use('/', godoRouter);


export default server;
