// success-modal.component.ts

import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-success-modal',
  template: `
    <div *ngIf="showModal" class="modal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ title }}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>{{ message }}</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" (click)="closeModal()">Close</button>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class SuccessModalComponent {
  @Input() title: string = '';
  @Input() message: string = '';
  @ViewChild('exampleModal') exampleModal: ElementRef | undefined;
  showModal = true;

  constructor() {
    // this.openModal()
  }

  openModal() {
    const modal = new bootstrap.Modal(this.exampleModal?.nativeElement);
    modal.show();
  }

  closeModal() {
    this.showModal = false;
  }
}
