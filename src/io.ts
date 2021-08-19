import socketIOClient from 'socket.io-client'

class IoConnector {
    connect: any;

    init = () => {
        if(!this.connect) {
            this.connect = socketIOClient('http://localhost:3001', {
                withCredentials: true,
                extraHeaders: {
                    "genomusx": "1.0"
                }
            });
        }
    }

    get = () => {
        if(this.connect) {
            return this.connect;
        } else {
            this.init();
            return this.connect;
        }
    }
}

const socket = new IoConnector();

export default socket;