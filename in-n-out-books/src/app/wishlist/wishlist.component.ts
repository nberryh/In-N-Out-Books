// Name: Nolan Berryhill
// File: wishlist.component.ts
// Date: 12/03/2023
// Description: TS file for wishlist

// Angular specific imports
import { Component } from '@angular/core';
import { IWishlistItem } from '../wishlist-item.interface';

// Selector, template, styleUrls for component
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})

// Export for WishlistCreateComponent
export class WishlistComponent {

  items: Array<IWishlistItem> = [];

  updateItemsHandler(item: IWishlistItem) {
    this.items.push(item);
  }

}
