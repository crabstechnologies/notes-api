import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // Connecting SQLite via TypeORM
import { NotesModule } from './notes/notes.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

const rawSynchronizeEnv = process.env.TYPEORM_SYNC;
const shouldSynchronize =
  rawSynchronizeEnv === undefined
    ? true
    : rawSynchronizeEnv.toLowerCase() === 'true';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'dev.sqlite', // file will be created automatocally
      autoLoadEntities: true, // picks up all @Entity() classes
      synchronize: shouldSynchronize, // controlled via env var
    }),
    NotesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
