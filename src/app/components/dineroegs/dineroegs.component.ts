import { Component, OnInit, Input } from '@angular/core';
import { dineroeg } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-dineroegs',
  templateUrl: './dineroegs.component.html',
  styleUrls: ['./dineroegs.component.scss'],
})
export class DineroegsComponent implements OnInit {

   @Input() dineroegs: dineroeg[] = [];

  constructor() { }

  ngOnInit() {
    console.log(this.dineroegs);

  }
 

}
