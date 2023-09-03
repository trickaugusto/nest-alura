import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository {
  public users = [];

  async save(user) {
    this.users.push(user);
  }

  async getAll() {
    return this.users;
  }

  async validateUserByEmail(email: string) {
    const user = this.users.find(
      user => user.email === email
    );

    return user !== undefined;
  }
}
