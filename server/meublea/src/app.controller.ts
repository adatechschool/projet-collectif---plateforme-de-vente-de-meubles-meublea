import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get('/hello')
  getHello(): string {
    return 'Bienvenue sur le serveur Nest.js !';
  }
}
