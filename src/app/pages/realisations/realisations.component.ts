import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxImageGalleryComponent, GALLERY_CONF, GALLERY_IMAGE } from 'ngx-image-gallery';

export enum Filter {
  ALL = 1,
  PEINTURE = 2,
  MUR = 3,
  SOL = 4
}

@Component({
  selector: 'app-realisations',
  templateUrl: './realisations.component.html',
  styleUrls: ['./realisations.component.scss']
})
export class RealisationsComponent implements OnInit {
  @ViewChild(NgxImageGalleryComponent) ngxImageGallery: NgxImageGalleryComponent;
  public currentFilter: Filter;
  public filter = Filter;

  public selectedGallery;
  public filteredAllGallery = [
    { url: './assets/img/realisations/img-banniere2.jpg' },
    { url: './assets/img/realisations/image-banniere.jpg' },
    { url: './assets/img/realisations/img-expertise-400x261.jpg' },
    { url: './assets/img/realisations/img-resize.png' },
    { url: './assets/img/realisations/placeholder1.jpg' },
    { url: './assets/img/realisations/placeholder2.jpg' },
    { url: './assets/img/realisations/placeholder3.jpg' },
    { url: './assets/img/realisations/placeholder4.jpg' },
    { url: './assets/img/realisations/placeholder5.jpg' }
  ];
  public filteredMurGallery = [
    { url: './assets/img/realisations/image-banniere.jpg' },
    { url: './assets/img/realisations/img-resize.png' },
    { url: './assets/img/realisations/placeholder2.jpg' },
    { url: './assets/img/realisations/placeholder4.jpg' }
  ];
  public filteredSolGallery = [
    { url: './assets/img/realisations/placeholder1.jpg' },
    { url: './assets/img/realisations/placeholder3.jpg' },
    { url: './assets/img/realisations/placeholder4.jpg' },
    { url: './assets/img/realisations/placeholder5.jpg' }
  ];
  public filteredPeintureGallery = [
    { url: './assets/img/realisations/img-banniere2.jpg' }
  ];
  public mapFilterToGallery = new Map<Filter, Array<any>>([
    [Filter.ALL, this.filteredAllGallery],
    [Filter.SOL, this.filteredSolGallery],
    [Filter.PEINTURE, this.filteredPeintureGallery],
    [Filter.MUR, this.filteredMurGallery]
  ]);
  public conf: GALLERY_CONF = {
    imageOffset: '0px',
    showDeleteControl: false,
    showImageTitle: false,
    inline: true,
    showThumbnails: false,
    reactToMouseWheel: false
  };

  constructor() {
    this.currentFilter = Filter.ALL;
  }

  ngOnInit() {
    this.filterImages(Filter.ALL);
  }

  // METHODS
  // open gallery
  openGallery(index: number = 0) {
    this.ngxImageGallery.open(index);
  }

  // close gallery
  closeGallery() {
    this.ngxImageGallery.close();
  }

  // set new active(visible) image in gallery
  newImage(index: number = 0) {
    this.ngxImageGallery.setActiveImage(index);
  }

  // next image in gallery
  nextImage(index: number = 0) {
    this.ngxImageGallery.next();
  }

  // prev image in gallery
  prevImage(index: number = 0) {
    this.ngxImageGallery.prev();
  }

  filterImages(filter: Filter) {
    this.selectedGallery = this.mapFilterToGallery.get(filter);
  }

  onClickFilterAll() {
    this.filterImages(Filter.ALL);
    this.currentFilter = Filter.ALL;
  }

  onClickFilterPeinture() {
    this.filterImages(Filter.PEINTURE);
    this.currentFilter = Filter.PEINTURE;
  }

  onClickFilterMur() {
    this.filterImages(Filter.MUR);
    this.currentFilter = Filter.MUR;
  }

  onClickFilterSol() {
    this.filterImages(Filter.SOL);
    this.currentFilter = Filter.SOL;
  }

  onClickImage(image) {
    const selectedGallery = this.mapFilterToGallery.get(this.currentFilter);
    const index = selectedGallery.indexOf(image);
    this.ngxImageGallery.setActiveImage(index);
  }
}
