import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileService } from './services/profile.service';
import { UsersComponent } from './components/users/users.component';
import { CommonService } from './services/common.service';
import { ProfileComponent } from './components/profile/profile.component';
import { UserSignalsStateService } from './services/user-signals-state.service';
import { SettingsComponent } from './components/settings/settings.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, UsersComponent, ProfileComponent, SettingsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private commonService = inject(CommonService)

  count = signal(1)

  changeData() {
    this.count.update(value => value + 1)
    this.commonService.count.set(this.count())
  }

  readonly user = this.userSignal.state.asReadonly();

  constructor(private userSignal: UserSignalsStateService) {}

  ngOnInit() {
    this.userSignal.setState({
      address: 'Hollywood',
      name: 'John Doe',
      company: 'Ink Co',
    });
  }
}
