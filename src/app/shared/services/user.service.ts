import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class UserService {

  public users: BehaviorSubject<string[]> = new BehaviorSubject([]);

  public addUser(name: string): void {
    const temp = this.users.value;
    temp.push(name)
    this.users.next(temp);
  }

}
