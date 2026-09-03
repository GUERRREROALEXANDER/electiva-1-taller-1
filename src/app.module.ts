import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { ProductoController } from './producto/producto.controller';

@Module({
  imports: [],
  controllers: [AppController, UsersController, ProductoController],
  providers: [AppService],
})
export class AppModule {}
