export class UserRepository {
  public users = [];

  async save(user) {
    this.users.push(user);
    console.log(this.users);
  }
}
