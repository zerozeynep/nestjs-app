import { Controller, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { GrpcMethod } from "@nestjs/microservices"

interface IHelloRequest {
  name : string;
}
interface IHelloReply {
  message : string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @GrpcMethod('AppController', 'SetHello')

   setHello(name : IHelloRequest ) : IHelloReply {
    return { message: this.appService.setHello(name.name)}
  }
}
