import { AppService } from '@application/services/app.service';
import { Module } from '@nestjs/common';
import { AppController } from '@presenters/app.controller';
import { UserModule } from './user.module';

@Module({
  imports: [UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
