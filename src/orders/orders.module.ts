import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { PrismaService } from 'src/shared/interceptors/services/prisma.service';

@Module({
  providers: [OrdersService],
  controllers: [OrdersController, PrismaService],
})
export class OrdersModule {}
