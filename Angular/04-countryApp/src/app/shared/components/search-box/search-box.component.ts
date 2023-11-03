import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css'],
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  private debouncer = new Subject<string>();
  private debouncerSubscription?: Subscription;

  @Input()
  public placeholder: string = '';

  @Input()
  public initialValue: string = '';

  // @ViewChild( 'txtInput' )
  // public tagInput!: ElementRef<HTMLInputElement>

  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onDebounce = new EventEmitter<string>();

  emitValue(value: string): void {
    // this.onValue.emit( this.tagInput.nativeElement.value );
    this.onValue.emit(value);
  }

  ngOnInit(): void {
    this.debouncerSubscription = this.debouncer.pipe(debounceTime(500))
      .subscribe((value) => {
        this.onDebounce.emit(value);
    });
  }

  ngOnDestroy(): void {
    this.debouncerSubscription?.unsubscribe();

  }

  // * Implementar Debounce:
  onKeyPress(searchTerm: string) {
    this.debouncer.next(searchTerm);
  }
}
