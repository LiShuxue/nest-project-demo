import { Controller, ForbiddenException, Get, Query } from '@nestjs/common';
import { CatService } from './cat.service';
import { MyInterceptor } from 'src/interceptor';
import { ValidationPipe } from 'src/pipe';

@Controller('cat')
export class CatController {
  // 当控制器被实例化的时候，CatService会被注入，自动实例化catService（默认是单例的，如果已经存在，直接返回）
  constructor(private readonly catService: CatService) {}

  @Get()
  findAll(@Query('id', ValidationPipe) id: number) {
    console.log('controller');
    // throw new ForbiddenException();
    const catList = this.catService.findAll();
    return catList;
  }
}
