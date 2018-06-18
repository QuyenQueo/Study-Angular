import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';

@Injectable()
export class CheckLoginGuard implements CanActivate {
    constructor(
        // private loginService: LoginService
    ) {}
    canActivate() {
        // const IsLog = this.loginService.IsLogged();
        // if (IsLog) {
        //     return IsLog;
        // } else {
        //     alert('Bạn phải đăng nhập tài khoản Admin mới xem được')
        //     return false;
        // }

        return true;
    }
}
