import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatModule } from './Infrastructure/Config/Modules/Chat.module';
import { RedisModule } from './Infrastructure/Config/Modules/Redis.module';
import { ReportModule } from './Infrastructure/Config/Modules/Report.module';
import { RabbitConfig } from "src/Infrastructure/Config/Rabbit/Rabbit.Config";
import { PrismaModule } from './Infrastructure/Config/Modules/prisma.module';

@Module({
  imports: [
    ChatModule,
    RedisModule,
    ReportModule,
    PrismaModule
  ],
  controllers: [AppController],
  providers: [AppService,RabbitConfig],
})
export class AppModule {}
