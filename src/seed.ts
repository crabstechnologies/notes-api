import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DataSource } from 'typeorm';
import { getDataSourceToken, getRepositoryToken } from '@nestjs/typeorm';
import { Note } from './notes/entities/note.entity';
import { Repository } from 'typeorm';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule, {
    logger: ['error', 'warn', 'log'],
  });

  const dataSource = app.get<DataSource>(getDataSourceToken());
  await dataSource.initialize?.().catch(() => {}); // noop if already ready

  const notesRepo = app.get<Repository<Note>>(getRepositoryToken(Note));

  const count = await notesRepo.count();
  if (count === 0) {
    await notesRepo.save([
      { title: 'Welcome', content: 'This note was seeded ✨' },
      { title: 'Second', content: 'Edit or delete me in Thunder Client' },
    ]);
    console.log('✅ Seeded 2 notes');
  } else {
    console.log(`ℹ️ Seed skipped: ${count} notes already exist`);
  }

  await app.close();
}

bootstrap().catch((e) => {
  console.error(e);
  process.exit(1);
});
