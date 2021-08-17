import { Module } from '@nestjs/common';
import { AboutModule } from './about/about.module';
import { MongooseModule } from '@nestjs/mongoose';

import { config } from './config'

@Module({
  imports: [AboutModule, MongooseModule.forRoot(config.url)]
})
export class AppModule {}
