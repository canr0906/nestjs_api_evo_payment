import { Module } from '@nestjs/common';
import { EvoServicesPostService } from './evo-services-post.service';
import { EvoServicesPostController } from './evo-services-post.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [EvoServicesPostController],
  providers: [EvoServicesPostService],
})
export class EvoServicesPostModule {}
