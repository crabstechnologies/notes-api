import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Note } from './entities/note.entity';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';

@Injectable()
export class NotesService {
  constructor(@InjectRepository(Note) private repo: Repository<Note>) {}

  create(dto: CreateNoteDto) {
    const note = this.repo.create(dto);
    return this.repo.save(note);
  }

  findAll() {
    return this.repo.find({ order: { updatedAt: 'DESC' } });
  }

  async findOne(id: number) {
    const note = await this.repo.findOne({ where: { id } });
    if (!note) throw new NotFoundException('Note not found');
    return note;
  }

  async update(id: number, dto: UpdateNoteDto) {
    const note = await this.findOne(id);
    Object.assign(note, dto);
    return this.repo.save(note);
  }

  async remove(id: number) {
    const note = await this.findOne(id);
    await this.repo.remove(note);
    return { deleted: true };
  }
}
