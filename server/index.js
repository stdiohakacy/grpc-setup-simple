const grpc = require('@grpc/grpc-js');
const greets = require('../server/protos/greet_pb');
const service = require('../server/protos/greet_grpc_pb');

function greet(call, callback) {
    const greeting = new greets.GreetingResponse();
    greeting.setResult(`Hello ${call.request.getGreeting().getFirstName()} ${call.request.getGreeting().getLastName()}`);
    callback(null, greeting);
}

function main() {
    const server = new grpc.Server();
    server.addService(service.GreetServiceService, { greet });
    server.bindAsync('localhost:50051', grpc.ServerCredentials.createInsecure(), () => {
        console.log(`Server running on port localhost:50051`)
        server.start();
    });
}

main();