import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { ormConfigFile } from '../ormconfig';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    TypeOrmModule.forRoot(ormConfigFile),
    TypeOrmModule.forFeature([User]),
  ],
})
export class AppModule {}
