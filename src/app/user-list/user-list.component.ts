import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {
  public users: string[];
  private sub : Subscription;

  constructor(
    // il faut probablement injecter un service ici !
    private userService : UserService
  ) { }

  ngOnInit() {
    // il faut initialiser les users ici avec le service
    this.sub = this.userService.users.subscribe((users : string[])=> this.users = users);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }



}
