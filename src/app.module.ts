import { Module } from '@nestjs/common';
import { EvoServicesModule } from './evoservices/evoservice.module';
import { EvoServicesPostModule } from './evo-services-post/evo-services-post.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot(),
    EvoServicesModule, 
    EvoServicesPostModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
