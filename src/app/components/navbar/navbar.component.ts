import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClickContactLink() {
    // this.router.navigate(['/contact']);
  }

  onClickRealisationsLink() {
    // this.router.navigate(['/realisations']);
  }

  onClickPrestationsLink() {
    // this.router.navigate(['/prestations']);
  }

  onClickPartenairesLink() {
    // this.router.navigate(['/partenaires']);
  }
}
