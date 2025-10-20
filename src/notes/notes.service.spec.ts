import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { NotesService } from './notes.service';
import { Note } from './entities/note.entity';

type MockRepo<T = any> = Partial<Record<keyof import('typeorm').Repository<T>, jest.Mock>>;

function createMockRepo(): MockRepo {
  return {
    create: jest.fn((dto) => dto),
    save: jest.fn(async (n) => ({ id: 1, ...n, createdAt: new Date(), updatedAt: new Date() })),
    find: jest.fn(async () => []),
    findOne: jest.fn(async ({ where: { id } }: any) => (id === 1 ? { id, title: 't', content: 'c' } : null)),
    remove: jest.fn(async () => ({})),
  };
}

describe('NotesService', () => {
  let service: NotesService;
  let repo: MockRepo;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        NotesService,
        { provide: getRepositoryToken(Note), useValue: createMockRepo() },
      ],
    }).compile();

    service = module.get(NotesService);
    repo = module.get(getRepositoryToken(Note));
  });

  it('creates a note', async () => {
    const note = await service.create({ title: 'A', content: 'B' });
    expect(repo.create).toHaveBeenCalledWith({ title: 'A', content: 'B' });
    expect(note).toMatchObject({ id: 1, title: 'A', content: 'B' });
  });

  it('throws on missing note', async () => {
    await expect(service.findOne(999)).rejects.toThrow('Note not found');
  });
});
