import { Component, Input, Output, EventEmitter, output } from '@angular/core';
import { type User } from './user.model';
// type User = { id: string; avatar: string; name: string };

// Component decorator
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // Input decorator
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected:boolean = false;
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  @Output() select = new EventEmitter<string>();
  // select = output<string>();

  // alternate to decorator approach
  // avatar = input.required<string>();
  // name = input.required<string>();

  // only updates when avatar changes
  // imagePath = computed(() => {
  //   'assets/users/' + this.avatar();
  // });

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser (){
    this.select.emit(this.user.id);
  }
}
