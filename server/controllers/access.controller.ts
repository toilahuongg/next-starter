import { Request, Response } from 'express';
import { CREATED, OK } from '@server/core/success.response';
import AccessService from '@server/services/access.service';

class AccessController {
  static async signUp(req: Request, res: Response) {
    new CREATED({
      message: 'Registered OK!',
      metadata: await AccessService.signUp(req.body, req.device!),
    }).send(res);
  }

  static async login(req: Request, res: Response) {
    new OK({
      message: 'Login success!',
      metadata: await AccessService.login(req.body, req.device!),
    }).send(res);
  }

  static async logout(req: Request, res: Response) {
    new OK({
      message: 'Logout success!',
      metadata: await AccessService.logout(req.userId!, req.deviceId!),
    }).send(res);
  }

  static async refreshToken(req: Request, res: Response) {
    new OK({
      message: 'Get accessToken success!',
      metadata: await AccessService.refreshToken({
        refreshToken: req.refreshToken!,
        deviceId: req.deviceId!,
      }),
    }).send(res);
  }
}

export default AccessController;
