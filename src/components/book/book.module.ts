import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookRepository } from './../../repositories/book.repository';
import { UserModule } from './../user/user.module';
import { BookController } from './book.controller';
import { Book } from './book.entity';
import { BookService } from './book.service';
import { BOOK_REPOSITORY } from './interface/book.repository.interface';
import { BOOK_SERVICE } from './interface/book.service.interface';

@Module({
  imports: [TypeOrmModule.forFeature([Book]), UserModule],
  controllers: [BookController],
  providers: [
    {
      provide: BOOK_SERVICE,
      useClass: BookService,
    },
    {
      provide: BOOK_REPOSITORY,
      useClass: BookRepository,
    },
  ],
})
export class BookModule {}
