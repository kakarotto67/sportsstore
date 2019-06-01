import { Component, Input } from "@angular/core";
import { Product } from "../models/product.model";

@Component({
  selector: "store-ratings",
  templateUrl: "ratings.component.html"
})
export class RatingsComponent {
  // Marks Angular input property
  // Input properties allow components to receive data from template in which they are applied
  // In this case, RatingsComponent applied in productList.component.html template (via <store-ratings>)
  // And Product value will be passed from that template to this component
  @Input()
  product: Product;

  get stars(): boolean[] {
    if (this.product != null && this.product.ratings != null) {
      // sum total starts of all ratings
      let total = this.product.ratings.map(r => r.stars).reduce((prev, curr) => prev + curr, 0);
      // get rounded average count of stars
      let count = Math.round(total / this.product.ratings.length);
      // create an array of booleans, true corresponds to filled star, false - empty
      // (e.g. for rating 3/5 it will be [true, true, true, false, false])
      return Array(5) // array of 5 elements
        .fill(false) // fill by falses by default
        .map((value, index) => {
          // if current array index less than average - use true (filled star), otherwise - false (empty star)
          return index < count;
        });
    } else {
      return [];
    }
  }
}
