import { Module } from '@nestjs/common';
import { AboutModule } from './about/about.module';
import { MongooseModule } from '@nestjs/mongoose';

import { config } from './config';
// register module
// connect to MongoDB 
@Module({
  imports: [AboutModule, MongooseModule.forRoot(config.dbURL)]
})
export class AppModule {}
