import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounce, interval, Subscription } from 'rxjs';
import { SnippetService } from 'src/app/services/snippetService';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  constructor(private snippetService: SnippetService) {}

  form = new FormGroup({
    code: new FormControl(''),
    prefix: new FormControl(''),
    description: new FormControl(''),
  });
  debounced!: Subscription;

  ngOnInit(): void {
    this.debounced = this.form.valueChanges
      .pipe(debounce(() => interval(500)))
      .subscribe((data: any) => this.snippetService.sendValue(data));
  }

  ngOnDestroy() {
    this.debounced.unsubscribe();
  }
}
