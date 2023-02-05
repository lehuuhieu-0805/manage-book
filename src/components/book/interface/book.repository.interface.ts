import { UpdateBookDto } from './../dto/updateBook.dto';
import { IBaseRepository } from 'src/repositories/base/base.interface.repository';
import { Book } from '../book.entity';

export const BOOK_REPOSITORY = 'BOOK REPOSITORY';

export interface IBookRepository extends IBaseRepository<Book> {
  updateBook(id: string, updateBookDto: UpdateBookDto): Promise<number>;
  deleteBook(id: string): Promise<number>;
}
