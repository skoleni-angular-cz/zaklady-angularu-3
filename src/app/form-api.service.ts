import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserBasicInfoDto, UserAdvancedInfoDto } from './model';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormApiService {

  constructor(
    private httpClient: HttpClient,
  ) {}

  getUserBasicInfo() {
    return firstValueFrom(this.httpClient.get<UserBasicInfoDto>('http://localhost:3000/user-basic-info/1'));
  }

  submitUserBasicInfo(basicInfo: UserBasicInfoDto) {
    return firstValueFrom(this.httpClient.put('http://localhost:3000/user-basic-info/1', basicInfo));
  }

  getUserAdvancedInfo() {
    return firstValueFrom(this.httpClient.get<UserAdvancedInfoDto>('http://localhost:3000/user-advanced-info/1'));
  }

  submitUserAdvancedInfo(advancedInfo: UserAdvancedInfoDto) {
    return firstValueFrom(this.httpClient.put('http://localhost:3000/user-advanced-info/1', advancedInfo));
  }

}
