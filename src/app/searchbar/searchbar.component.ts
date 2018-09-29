import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  musicname: null
  @Output() open: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  searchForMusic = function(event){
    if (event.keyCode === 13) {
      this.open.emit(this.musicname);
    }
  }
}