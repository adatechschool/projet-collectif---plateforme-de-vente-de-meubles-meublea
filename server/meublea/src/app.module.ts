import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConnectionOptions } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'votre_utilisateur',
      password: 'votre_mot_de_passe',
      database: 'votre_base_de_donnees',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    } as ConnectionOptions),
  ],
})
export class AppModule {}
