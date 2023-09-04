import { Injectable } from '@nestjs/common';

@Injectable()
export class CatService {
  findAll() {
    console.log('service');
    // 这里可以调用数据库方法去查询数据库并返回
    return [];
  }
}
