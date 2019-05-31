import { Component } from "@angular/core";
import { Repository } from "../models/repository";
import { Product } from "../models/product.model";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "product-detail",
  templateUrl: "productDetail.component.html"
})
export class ProductDetailComponent {
  constructor(
    private repo: Repository,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    // Setup direct url routing
    let id = Number.parseInt(activatedRoute.snapshot.params["id"]);
    if (id) {
      this.repo.getProduct(id);
    } else {
      router.navigateByUrl("/");
    }
  }

  get product(): Product {
    return this.repo.product;
  }
}
