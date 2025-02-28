import { Controller, Get, HostParam } from '@nestjs/common';
import { AccountService } from './account.service';

@Controller({ host: `:account.${process.env.ACCOUNT_HOST}` })
export class AccountController {
  constructor(private readonly accountService: AccountService) { }

  @Get()
  index(@HostParam('account') account:string) {
    return `Index page for account ${account}`;
  }
}
