// DTO or object Model

import { ApiProperty } from '@nestjs/swagger';

class Info {
    @ApiProperty()
    title:string;
    @ApiProperty()
    score:number;
    @ApiProperty()
    description:string;
    @ApiProperty()
    dateOfCreation: Date;
}

export class CreateAboutDTO {
    @ApiProperty()
    title:  string; // String is shorthand for {type: String}
    @ApiProperty()
    author: string;
    @ApiProperty({ default: [], isArray: true })
    body;
    @ApiProperty()
    date: Date;
    @ApiProperty()
    info: Info

}