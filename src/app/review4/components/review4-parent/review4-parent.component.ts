import { Component, OnInit } from '@angular/core';
import { Review4Message1Service } from '../../services/review4-message1.service';
import { Review4Message2Service } from '../../services/review4-message2.service';
import { Review4Message3Service } from '../../services/review4-message3.service';

@Component({
  selector: 'fg-app-review4-parent',
  templateUrl: './review4-parent.component.html',
  styleUrls: ['./review4-parent.component.scss'],
  providers: [ Review4Message2Service ],
  viewProviders: [ Review4Message3Service ]
})
export class Review4ParentComponent implements OnInit {

  constructor(
    private _service1: Review4Message1Service,
    private _service2: Review4Message2Service,
    private _service3: Review4Message3Service,
  ) { }

  ngOnInit() {
  }

}
