import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // Connecting SQLite via TypeORM
import { NotesModule } from './notes/notes.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'dev.sqlite', // file will be created automatocally
      autoLoadEntities: true, // picks up all @Entity() classes
      synchronize: true, // dev only: auto-create tables
    }),
    NotesModule,
  ],
})
export class AppModule {}
