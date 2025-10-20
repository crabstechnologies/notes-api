import { IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateNoteDto {
    @ApiProperty({ example: 'Grocery list', maxLength: 100 })
    @IsString()
    @Length(1, 100)
    title: string;

    @ApiProperty({ example: 'Milk, Bread, Eggs', maxLength: 2000 })
    @IsString()
    @Length(1, 1000)
    content: string;
}
