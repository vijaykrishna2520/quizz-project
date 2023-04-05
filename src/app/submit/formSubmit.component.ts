import { SimpleChange } from '@angular/core';
import { OnInit } from '@angular/core';
import { Input, SimpleChanges } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'my-submit',
  templateUrl: './formSubmit.component.html',
  styleUrls: ['./formSubmit.component.css'],
})
export class formSubmitComponent implements OnInit {
  // @Input() item: string = '';
  user: number = 0;
  val: number = 0;
  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any) => {
      this.user = params.data;
    });
  }

  send() {
    this.router.navigateByUrl('/form');
  }
}
