/*Paso 1*/import * as websockets from '@nestjs/websockets';
/*Paso 1*/import {Server, Socket} from 'socket.io';

/*Paso 1*/@websockets.WebSocketGateway()
/*Paso 1*/export class EvoServicesGateway implements websockets.OnGatewayConnection, websockets.OnGatewayDisconnect {
    /*Paso 1*/@websockets.WebSocketServer()
    /*Paso 1*/server: Server;

    /*Paso 1*/handleConnection(client: Socket) {
        console.log(`Client connected ${client.id}`);
    }
    /*Paso 1*/handleDisconnect(client: Socket) {
        console.log(`Client disconnected ${client.id}`);
    }
    /*
        Paso 2 en Postman con el identificador 'mensaje' cualquiera conectado podra emitir mensajes
        Esta forma emite a todos los clientes conectados e incluso a al emisor
    */
    @websockets.SubscribeMessage('mensaje')
    handleMessage(@websockets.MessageBody() data: any) {
        console.log(data)
        /* desde Postman cualquier cliente escuchando el evento 'mensajeserver' recibira el mensaje */
        this.server.emit('mensajeserver','Texto recivido desde el servidor')
    }

    /*
        Paso 2 en Postman con el identificador 'mensaje' cualquiera conectado podra emitir mensajes
        Esta forma emite a todos los clientes conectados pero no al emisor
    */
    @websockets.SubscribeMessage('mensajesec')
    handleMessageSec(@websockets.ConnectedSocket() client: Socket, @websockets.MessageBody() data: any) {
            console.log(data)
            /* 
            desde Postman cualquier cliente escuchando el evento 'mensajeserver' recibira el mensaje 
            Aqui es donde podemos manejar cualquier logica, como conexiones a DB, Salvar Usuarios, Leer registros, etc
            */
            client.broadcast.emit('mensajeserversec','Texto recivido desde el servidor');
    }
}