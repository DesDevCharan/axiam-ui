import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

interface Card {
  url: string;
  title: string;
}
@Component({
  selector: 'ax-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card: Card;
  @Output() emitRemoveClick = new EventEmitter<Card>();

  constructor() { }

  ngOnInit(): void {
    // this.card = {
    //   url: 'https://i.redd.it/b3esnz5ra34y.jpg',
    //   title: 'Notion'
    // };
  }

  onRemoveClick() {
    this.emitRemoveClick.emit(this.card);
  }

}
