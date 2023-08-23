import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-addgroup-admin',
  templateUrl: './addgroup-admin.page.html',
  styleUrls: ['./addgroup-admin.page.scss'],
})
export class AddgroupAdminPage implements OnInit {
  inputModel = '';

  @ViewChild('ionInputEl', { static: true }) ionInputEl!: IonInput;

  onInput(ev: { target: any; }) {
    const value = ev.target!.value;

    const filteredValue = value.replace(/[^0-9]+/g, '');
    this.ionInputEl.value = this.inputModel = filteredValue;
  }

  customCounterFormatter(inputLength: number, maxLength: number) {
    return `${maxLength - inputLength} characters remaining`;
  }

  constructor() { }

  ngOnInit() {
  }

}
