import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Controller('/users')
export class UserController {
  constructor(private userRepository: UserRepository) {}

  @Post()
  async createUser(@Body() dataUser) {
    this.userRepository.save(dataUser);
  }

  @Get()
  async getUser() {
    return this.userRepository.getAll();
  }
}
