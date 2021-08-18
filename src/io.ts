import socketIOClient from 'socket.io-client'

class IoConntector {
    connect: any;
    constructor() {
        this.connect = socketIOClient('http://localhost:3001');
    }

    get() {
        if(this.connect) {
            return this.connect;
        } else {
            this.connect = socketIOClient('http://localhost:3001');
        }
    }
}

const socket = new IoConntector();

export default socket;