import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserSignalsStateService } from '../../services/user-signals-state.service';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsComponent { 
  readonly address = this.userState.select('address');
  
  constructor(private userState: UserSignalsStateService) {}

  changeAddress() {
    const newAddress = faker.address.streetAddress(true);

    this.userState.set('address', newAddress);
  }
}
