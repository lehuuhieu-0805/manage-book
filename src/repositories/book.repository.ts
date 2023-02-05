import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateBookDto } from 'src/components/book/dto/updateBook.dto';
import { Repository, UpdateResult } from 'typeorm';
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

  async updateBook(id: string, updateBookDto: UpdateBookDto): Promise<number> {
    const result: UpdateResult = await this.bookRepository
      .createQueryBuilder()
      .update({
        name: updateBookDto.name,
        description: updateBookDto.description,
      })
      .where('id = :id', { id: id })
      .execute();

    return result.affected;
  }
}
