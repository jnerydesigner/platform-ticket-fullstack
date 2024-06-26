import { UserService } from '@application/services/user.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [UserService],
})
export class UserModule {}
