import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetUser } from '../auth/getUser.decorator';
import { JwtAuthGuard } from './../auth/jwt-auth.guard';
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

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  @ApiResponse({ status: 200, description: 'Get a books successfully' })
  async getById(@Param('id') id: string): Promise<Book> {
    return await this.bookService.getById(id);
  }
}
