import { Component, OnInit } from '@angular/core';
import {SalonsService} from '../salons.service';
import { Salon } from '../salons';

@Component({
  selector: 'app-salons',
  templateUrl: './salons.component.html',
  styleUrls: ['./salons.component.css']
})
export class SalonsComponent implements OnInit {

salons: Salon[] = [];

  constructor(private salonservice: SalonsService) { }

  ngOnInit() {
    this.salonservice.getSalons().subscribe((salons: Salon[]) => this.salons = salons);
   }

}
