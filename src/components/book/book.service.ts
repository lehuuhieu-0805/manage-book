import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import {
  IUserRepository,
  USER_REPOSITORY,
} from './../user/interface/user.repository.interface';
import { User } from './../user/user.entity';
import { Book } from './book.entity';
import { CreateBookDto } from './dto/createBook.dto';
import {
  BOOK_REPOSITORY,
  IBookRepository,
} from './interface/book.repository.interface';
import { IBookService } from './interface/book.service.interface';

@Injectable()
export class BookService implements IBookService {
  constructor(
    @Inject(BOOK_REPOSITORY)
    private readonly bookRepository: IBookRepository,

    @Inject(USER_REPOSITORY)
    private readonly userRepository: IUserRepository,
  ) {}

  async getById(id: string): Promise<Book> {
    const book: Book = await this.bookRepository.findById(id);
    if (book) {
      return book;
    }
    throw new NotFoundException();
  }

  async create(bookDto: CreateBookDto, user: User): Promise<Book> {
    const book = new Book();
    book.name = bookDto.name;
    book.description = bookDto.description;
    book.user = user;
    return await this.bookRepository.create(book);
  }
}
