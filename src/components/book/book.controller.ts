import { JwtAuthGuard } from './../auth/jwt-auth.guard';
import { Body, Controller, Inject, Post, UseGuards } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetUser } from '../auth/getUser.decorator';
import { User } from './../user/user.entity';
import { Book } from './book.entity';
import { CreateBookDto } from './dto/createBook.dto';
import { BOOK_SERVICE, IBookService } from './interface/book.service.interface';

@Controller('books')
@ApiTags('Book')
export class BookController {
  constructor(
    @Inject(BOOK_SERVICE)
    private readonly bookService: IBookService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiResponse({ status: 201, description: 'Create a book successfully' })
  async create(
    @Body() bookDto: CreateBookDto,
    @GetUser() user: User,
  ): Promise<Book> {
    return await this.bookService.create(bookDto, user);
  }
}
