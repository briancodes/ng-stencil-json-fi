import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <bc-json-file-input
      #inputRef
      multiple
      preview-json
      (filesLoaded)="handleFilesLoaded($event)"
    >
      <button>Load JSON Files</button>
    </bc-json-file-input>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('inputRef') inputRef: ElementRef<HTMLBcJsonFileInputElement>;

  handleFilesLoaded(event: CustomEvent) {
    console.log('filesLoaded:', event.detail);
  }

  ngAfterViewInit() {
    // Adding listener the vanilla JS way...
    this.inputRef.nativeElement.addEventListener(
      'filesRead',
      (event: CustomEvent) => {
        console.log('filesRead: ', event.detail);
      }
    );
  }
}
