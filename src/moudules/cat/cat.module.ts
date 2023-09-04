import { Module } from '@nestjs/common';
import { CatController } from './cat.controller';
import { CatService } from './cat.service';

@Module({
  imports: [], // 当前模块所依赖的其他模块
  controllers: [CatController], // 当前模块的控制器
  providers: [CatService], // 当前模块中提供的服务、提供者和其他可注入的对象
  exports: [], // 将当前模块的某个组件导出，其他模块才可以导入当前模块中导出的组件。
})
export class CatModule {}
