import {Component, OnInit} from '@angular/core';
import {UserAdvancedInfoDto, UserGender} from '../model';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FormApiService} from "../form-api.service";

@Component({
  selector: 'app-reactive-user-advanced-info',
  templateUrl: './reactive-user-advanced-info.component.html',
  styleUrls: ['./reactive-user-advanced-info.component.css'],
})
export class ReactiveUserAdvancedInfoComponent implements OnInit {

    form = new FormGroup({
        firstName: new FormControl<string | undefined>(undefined, [Validators.required]),
        lastName: new FormControl<string | undefined>(undefined, [Validators.required]),
        age: new FormControl<number | undefined>(undefined, [Validators.required, Validators.min(18)]),
        gender: new FormControl<UserGender | undefined>(UserGender.MALE),
        address: new FormGroup({
            street: new FormControl<string | undefined>(undefined, [Validators.required]),
            city: new FormControl<string | undefined>(undefined, [Validators.required]),
            country: new FormControl<string | undefined>(undefined, [Validators.required]),
        }),
    });

    readonly UserGender = UserGender;

    constructor(
        private formApiService: FormApiService,
    ) {}

    async ngOnInit() {
        const userAdvancedInfo = await this.formApiService.getUserAdvancedInfo();
        this.form.patchValue(userAdvancedInfo);
    }

    async submitForm() {
        if (this.form.valid) {
            await this.formApiService.submitUserAdvancedInfo(this.form.value as UserAdvancedInfoDto);
        }
    }

    resetForm() {
        this.form.reset();
        this.form.get('gender')!.setValue(UserGender.MALE);
    }

}