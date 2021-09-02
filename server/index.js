const grpc = require('@grpc/grpc-js');

function main() {
    const server = new grpc.Server();
    server.bindAsync('127.0.0.1:50051', grpc.ServerCredentials.createInsecure(), () => {
        console.log(`Server running on port 127.0.0.1:50051`)
        server.start();
    });
}

main();