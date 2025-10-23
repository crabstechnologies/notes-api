import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // Connecting SQLite via TypeORM
import { NotesModule } from './notes/notes.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

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
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
