import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CartSummaryComponent } from "./cartSummary.component";
import { CategoryFilterComponent } from "./categoryFilter.component";
import { PaginationComponent } from "./pagination.component";
import { ProductListComponent } from "./productList.component";
import { RatingsComponent } from "./ratings.component";
import { ProductSelectionComponent } from "./productSelection.component";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { CartDetailComponent } from "./cardDetail.component";
import { OrderConfirmationComponent } from "./checkout/orderConfirmation.component";
import { CheckoutDetailsComponent } from "./checkout/checkoutDetails.component";
import { CheckoutPaymentComponent } from "./checkout/checkoutPayment.component";
import { CheckoutSummaryComponent } from "./checkout/checkoutSummary.component";

@NgModule({
  declarations: [
    CartSummaryComponent,
    CategoryFilterComponent,
    PaginationComponent,
    ProductListComponent,
    RatingsComponent,
    ProductSelectionComponent,
    CartDetailComponent,
    CheckoutDetailsComponent,
    CheckoutPaymentComponent,
    CheckoutSummaryComponent,
    OrderConfirmationComponent
  ],
  imports: [BrowserModule, RouterModule, FormsModule],
  exports: [ProductSelectionComponent]
})
export class StoreModule {}
