import { element } from 'protractor';
import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, AfterContentInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})

export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked {

  @Input('srvElement') element: { type: string, name: string, content: string };
  @Input() name: string;
  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  ngOnInit() {
    console.log('on init called');
  }

  ngDoCheck() {
  console.log('ng do check')
  }

  ngAfterContentInit() {
console.log('ngAfterContentInit')
  }
  ngAfterContentChecked() {
    console.log('AfterContenChecked')
  }
}
