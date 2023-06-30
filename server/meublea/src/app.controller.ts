import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  getHello(): string {
    return 'Bienvenue sur le serveur Nest.js !';
  }
}
