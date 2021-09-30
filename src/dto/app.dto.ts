import { ApiModelProperty } from '@nestjs/swagger';

export class BodySenhaDTO {
    @ApiModelProperty()
    senha: string;
}