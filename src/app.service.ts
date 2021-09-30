import { Injectable } from '@nestjs/common';
import { BodySenhaDTO } from './dto/app.dto';

@Injectable()
export class AppService {
  validarSenha(senha: string): boolean {
    return !!senha.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()-+])(?:([0-9a-zA-Z!@#$%^&*()-+])(?!\1)){9,}/i);
  }

}
