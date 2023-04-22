import ReivewForm from "@components/testimonial/review_form";
import ReviewLayout from "@components/testimonial/review_layout";
import React, { useEffect } from "react";

import { ReviewFormProps } from "../utils/types/types";

export default function TestimonialLayout() {
  return (
    <>
      <ReviewLayout />
      {/* <ReivewForm onSubmitReview={onSubmit} /> */}
    </>
  );
}
