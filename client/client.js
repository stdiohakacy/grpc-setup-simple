const grpc = require('@grpc/grpc-js');
const services = require('../server/protos/dummy_grpc_pb');

function main() {
    console.log("Client running")
    const client = new services.DummyServiceClient('localhost:50051', grpc.credentials.createInsecure());
}

main();