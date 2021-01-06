import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  
  setHello(name) {
    return  `Hello ${name}`;
  }
}
