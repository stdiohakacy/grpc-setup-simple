// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var protos_greet_pb = require('../protos/greet_pb.js');

function serialize_greet_GreetRequest(arg) {
  if (!(arg instanceof protos_greet_pb.GreetRequest)) {
    throw new Error('Expected argument of type greet.GreetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greet_GreetRequest(buffer_arg) {
  return protos_greet_pb.GreetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_greet_GreetingResponse(arg) {
  if (!(arg instanceof protos_greet_pb.GreetingResponse)) {
    throw new Error('Expected argument of type greet.GreetingResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greet_GreetingResponse(buffer_arg) {
  return protos_greet_pb.GreetingResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var GreetServiceService = exports.GreetServiceService = {
  // unary api
greet: {
    path: '/greet.GreetService/Greet',
    requestStream: false,
    responseStream: false,
    requestType: protos_greet_pb.GreetRequest,
    responseType: protos_greet_pb.GreetingResponse,
    requestSerialize: serialize_greet_GreetRequest,
    requestDeserialize: deserialize_greet_GreetRequest,
    responseSerialize: serialize_greet_GreetingResponse,
    responseDeserialize: deserialize_greet_GreetingResponse,
  },
};

exports.GreetServiceClient = grpc.makeGenericClientConstructor(GreetServiceService);
