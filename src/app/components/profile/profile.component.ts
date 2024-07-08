import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserSignalsStateService, UserState } from '../../services/user-signals-state.service';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent { 
  name = this.userState.select('name');
  constructor(private userState: UserSignalsStateService) {}
  changeName() {
    const newName = faker.name.fullName();
    this.userState.setState({ name: newName } as UserState);
  }
}
