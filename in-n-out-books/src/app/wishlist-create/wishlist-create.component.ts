// Name: Nolan Berryhill
// File: wishlist-create.component.ts
// Date: 12/03/2023
// Description: TS file for wishlist create

// Angular specific imports
import { Component, Output, EventEmitter } from '@angular/core';
import { IWishlistItem } from '../wishlist-item.interface';

// Selector, template, styleUrls for component
@Component({
  selector: 'app-wishlist-create',
  templateUrl: './wishlist-create.component.html',
  styleUrl: './wishlist-create.component.scss'
})

// Export for WishlistCreateComponent
export class WishlistCreateComponent {

  @Output() addItemEmitter = new EventEmitter<IWishlistItem>();

  item: IWishlistItem;

  constructor() {
    this.item = {} as IWishlistItem;
  }

  addItem() {
    this.addItemEmitter.emit({
      title: this.item.title,
      authors: this.item.authors
    })

    this.item = {} as IWishlistItem;
  }
}
