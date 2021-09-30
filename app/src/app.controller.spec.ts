import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });





  describe('Testando senhas', () => {

    const casosFalsos: any[] = [
      ['', false],
      ['aa', false],
      ['ab', false],
      ['AAAbbbCc', false],
      ['AcZp7*baar', false],
      ['AcZp7*baAr', false],
      ['AcZp7 bar', false],
      ['123456', false],
      ['Qwert123', false]

    ]

    const casosVerdadeiros: any[] = [
      ['AcZp7*bar', true],
      ['(Senha123456)', true],
      ['Jz%RiQnc8#ZU', true],
      ['MHZovdnE!fw1', true],
      ['5enh@F0rte', true],
      ['Unidas@123', true],
      ['$@NuNsD@8', true]
    ]

    it.each(casosFalsos.concat(casosVerdadeiros))(
      'Testando senha "%s". Esperando %s.',
      (senha: string, valorEsperado: boolean) => {
        expect(appController.senha({ senha })).toBe(valorEsperado)
      })
  });
});
