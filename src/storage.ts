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
}
