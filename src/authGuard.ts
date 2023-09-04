import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    console.log('guard');
    const request = context.switchToHttp().getRequest();
    return validateRequest(request);
  }
}

const validateRequest = (req) => {
  return true;
};
