import { Component } from '@angular/core';
import { Select2Component, OptionData } from '../select2/index';

@Component({
  moduleId: module.id,
  selector: 'app-demo2',
  templateUrl: 'demo2.component.html',
  styleUrls: ['demo2.component.css'],
  directives: [Select2Component]
})
export class Demo2Component {
  public items: Array<OptionData> = [
    {
      id: 'dog',
      text: 'Dog'
    },
    {
      id: 'cat',
      text: 'Cat'
    },
    {
      id: 'horse',
      text: 'Horse'
    }
  ];
}
