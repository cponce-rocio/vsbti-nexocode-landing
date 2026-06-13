import { loadStripe } from "@stripe/stripe-js";

export const stripePromise = loadStripe(
  "pk_test_TU_PUBLIC_KEY_DE_STRIPE"
);
