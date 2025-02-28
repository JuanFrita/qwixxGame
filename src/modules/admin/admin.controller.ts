import { Controller, Get } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller({ host: process.env.ADMIN_HOST })
export class AdminController {
  constructor(private readonly adminService: AdminService) { }

  @Get()
  index() {
    return 'Index page for admins';
  }
}
