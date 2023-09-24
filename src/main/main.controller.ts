import { Controller, Get } from '@nestjs/common';
import fs = require('fs');

@Controller()
export class MainController {
  @Get()
  rootPage() {
    const dt = fs.readFileSync('./src/main/main-page.html', 'utf8');
    return dt;
  }
}
