import { AutocompleteComponent } from './../autocomplete/autocomplete.component';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ax-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  control = new FormControl();
  @ViewChild('ac') ac: AutocompleteComponent;

  constructor() {
  }

  options = [
    { id: 1, title: 'Notion', url: 'https://i.redd.it/b3esnz5ra34y.jpg' },
    { id: 2, title: 'Jira', url: 'https://i.redd.it/b3esnz5ra34y.jpg' },
    { id: 3, title: 'Slack', url: 'https://i.redd.it/b3esnz5ra34y.jpg' },
    { id: 4, title: 'Teams', url: 'https://i.redd.it/b3esnz5ra34y.jpg' },
  ];

  softwares = []

  ngOnInit() {
    // this.control.setValue('Notion');
    this.init();

  }

  init() {
    this.softwares = this.options.slice().reduce((all, x, idx) => {
      const obj = { title: '', url: '', id: idx + 1 };
      all.push(obj);
      return all;
    }, []);
  }

  ngAfterViewInit() {
    // this.control.setValue('Notion');
    this.ac.optionsClick().subscribe(option => {
      const selected = this.options.find(opt => opt.title === option);
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < this.softwares.length; i++) {
        if (this.softwares[i].title === selected.title) {
          break;
        } else if (this.softwares[i].title === '') {
          this.softwares[i] = { ...selected };
          break;
        }
      }
    });

  }

  get SELECTED() {
    return this.softwares.filter(x => x.title !== '' && x.url !== '').length || 0;
  }

  removeSelected(card) {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.softwares.length; i++) {
      if (this.softwares[i].title === card.title) {
        this.softwares[i].title = '';
        this.softwares[i].url = '';
        break;
      }
    }
  }

  submitSelected() {
    const active = this.softwares.filter(x => x.title !== '' && x.url !== '');
    // send to api;
    this.init();
  }

}
