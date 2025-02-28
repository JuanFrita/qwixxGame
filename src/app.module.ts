import { Module } from '@nestjs/common';
import { CatsModule } from './modules/cats/cats.module';
import { AdminModule } from './modules/admin/admin.module';
import { AccountModule } from './modules/account/account.module';
@Module({
  imports: [CatsModule, AdminModule, AccountModule],
})
export class AppModule {}
