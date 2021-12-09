import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public onMouseDown(): void {
    console.log('onMouseDown()');
  }

  public onClick(): void {
    console.log('onClick()')
  }

  public onMouseMove(): void {
    console.log('onMouseMove()');
  }

  public never(): void {
    console.log('never()')
  }
}
