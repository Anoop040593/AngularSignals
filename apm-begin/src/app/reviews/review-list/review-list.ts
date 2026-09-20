import { Component, inject } from '@angular/core';
import { ReviewService } from '../review.service';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.html',
  styleUrl: './review-list.css',
})
export class ReviewList {
  private reviewService = inject(ReviewService);
  reviews = this.reviewService.reviewsResource.value; //this is referring the review resource
  isLoading = this.reviewService.reviewsResource.isLoading;
}
