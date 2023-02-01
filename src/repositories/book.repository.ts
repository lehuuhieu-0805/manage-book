import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './../components/book/book.entity';
import { IBookRepository } from './../components/book/interface/book.repository.interface';
import { BaseAbstractRepository } from './base/base.abstract.repository';

@Injectable()
export class BookRepository
  extends BaseAbstractRepository<Book>
  implements IBookRepository
{
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
  ) {
    super(bookRepository);
  }
}
