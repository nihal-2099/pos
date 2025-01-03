import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-popup',
  standalone: false,

  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss'
})
export class PopupComponent {

  @Input() text: string = '';
  @Output() dataEmitter: any = new EventEmitter();

  @Input() isDataVisible: boolean = false;
  @Output() closeModalEvent: any = new EventEmitter(false)


  // @Input() isDataVisible: boolean = true;


  sendData() {
    const data = 'Hello from Child Component!';
    this.dataEmitter.emit(data); // Emit the data
  }



  closeModal(): void {
    this.isDataVisible = false;
    this.closeModalEvent.emit(true);
    
  }

  submitForm(event: any) {
    console.log(event)
    this.dataEmitter.emit(event); // Emit the data


    // this.isDataVisible = false;
  }

}
