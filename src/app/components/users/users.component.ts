import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal, untracked } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { UserSignalsStateService, UserState } from '../../services/user-signals-state.service';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent { 
  private commonService = inject(CommonService)

  company = this.userState.select('company');
  constructor(private userState: UserSignalsStateService) {}
  changeCompany() {
    const newCompany = faker.company.name();
    this.userState.setState({ company: newCompany } as UserState);
  }
}
