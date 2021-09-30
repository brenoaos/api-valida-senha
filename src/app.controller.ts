import { BadRequestException, Body, Controller, Get, Post } from '@nestjs/common';
import { ApiResponse, ApiUseTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { BodySenhaDTO } from './dto/app.dto';

@ApiUseTags('Api Senha')
@Controller('')
export class AppController {
  constructor(private readonly service: AppService) { }


  @Get('')
  root() {
    return `API Online</br>
           ${new Date().toISOString()}</br>`
  }


  @ApiResponse({

    status: 201,
    description: 'Retona verdadeiro se a senha estiver no padrão especificado.'

  })
  @Post('senha/validar')
  senha(

    @Body() body: BodySenhaDTO

  ): boolean {

    if (body.hasOwnProperty('senha')) {

      return this.service.validarSenha(body.senha);

    }

    throw new BadRequestException('Senha não definida.');

  }

}
