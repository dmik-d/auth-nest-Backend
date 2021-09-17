import { Module } from '@nestjs/common';
import { NotesService } from './notes.service';
import { NotesResolver } from './notes.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Note } from './models/note';

@Module({
  imports:[
    TypeOrmModule.forFeature([Note])
  ],
  providers: [NotesService, NotesResolver]
})
export class NotesModule {}
