import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { CatsModule } from './modules/cats/cats.module';
import { AdminModule } from './modules/admin/admin.module';
import { AccountModule } from './modules/account/account.module';
import { CatsController } from './modules/cats/cats.controller';
import { LoggerMiddleware } from './modules/common/middleware/logger.middleware copy';
@Module({
  imports: [CatsModule, AdminModule, AccountModule],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .exclude({ path: 'cats', method: RequestMethod.GET })
      .forRoutes(CatsController);
  }
}
