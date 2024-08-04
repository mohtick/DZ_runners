

import express from '../../http/server.js';
import http from 'node:http';

const port = 8000;






const run = async () => new Promise((resolve, reject) => {
    express.set('port', port);
    const server = http.createServer(express);


    server.listen(port);
    server.on('error', onError);
    server.on('listening', onListening);



    /**
     * Event listener for HTTP server "error" event.
     */

    function onError(error) {
        if (error.syscall !== 'listen') {
            throw error;
        }

        const bind = typeof port === 'string'
            ? 'Pipe ' + port
            : 'Port ' + port;

        // handle specific listen errors with friendly messages
        switch (error.code) {
            case 'EACCES':
                console.error(bind + ' requires elevated privileges');

                break;
            case 'EADDRINUSE':
                console.error(bind + ' is already in use');

                break;
            default:
                throw error;
        }
        reject();
    }

    /**
     * Event listener for HTTP server "listening" event.
     */

    function onListening() {
        const addr = server.address();
        const bind = typeof addr === 'string'
            ? 'pipe ' + addr
            : 'port ' + addr.port;
        console.log('Http server UP!!!')
        resolve();
    }

});

export default run;

