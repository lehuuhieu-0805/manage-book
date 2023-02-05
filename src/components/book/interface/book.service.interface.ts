import { User } from './../../user/user.entity';
import { Book } from './../book.entity';
import { CreateBookDto } from './../dto/createBook.dto';
import { UpdateBookDto } from './../dto/updateBook.dto';

export const BOOK_SERVICE = 'BOOK SERVICE';

export interface IBookService {
  create(bookDto: CreateBookDto, user: User): Promise<Book>;
  getById(id: string): Promise<Book>;
  update(id: string, updateBookDto: UpdateBookDto): Promise<Book>;
}
