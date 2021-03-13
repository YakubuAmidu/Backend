import axios from 'axios';
import { showAlert } from './alerts';

const stripe = Stripe(
  'pk_test_51ITriqBkudMmVn56xyCZFBLbYNASe2IZk3eEdfVeKUk60lIPZ1Leo7DzFVjpnRXuTr13G9I36jY0haA3MoNmm8fQ00cjrlWsoc'
);

export const bookTour = async (tourId) => {
  try {
    // 1) Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
    // console.log(session);

    // 2) Create checkout form + change credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
