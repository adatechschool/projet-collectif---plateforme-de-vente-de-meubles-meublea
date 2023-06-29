import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Bonjour La Team Bon Courage Pour La Journee Front!';
  }
}
