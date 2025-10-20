import { PartialType, ApiPropertyOptional } from '@nestjs/swagger';
import { CreateNoteDto } from './create-note.dto';
import { IsOptional, IsString, Length } from 'class-validator';

export class UpdateNoteDto extends PartialType(CreateNoteDto) {
    @ApiPropertyOptional({ maxLength: 100 })
    @IsOptional()
    @IsString()
    @Length(1, 100)
    title?: string;

    @ApiPropertyOptional({ maxLength: 2000 })
    @IsOptional()
    @IsString()
    @Length(1, 1000)
    content?: string;
}
