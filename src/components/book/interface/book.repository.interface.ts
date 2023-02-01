import { IBaseRepository } from 'src/repositories/base/base.interface.repository';
import { Book } from '../book.entity';

export const BOOK_REPOSITORY = 'BOOK REPOSITORY';

export interface IBookRepository extends IBaseRepository<Book> {}
