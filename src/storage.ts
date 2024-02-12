import { IUser } from "./user";

export class Storage {
  private users: IUser[] = [];

  constructor() {};

  get() {
    return this.users;
  }

  add(user: IUser) {
    this.users.push(user);
  }

  update(id: string, newUser: IUser) {
    let user = this.users.find(user => user.id === id);
    user!.id = id;
    user!.name = newUser.name;
    user!.age = newUser.age;
    user!.hobbies = newUser.hobbies;
  }

  delete(id: string) {
    this.users = this.users.filter(user => user.id !== id);
  }
}
