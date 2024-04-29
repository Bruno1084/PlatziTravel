import React from "react";

const FAQ = () => {

  return (
    <section>
      <h3 className="m-6 text-red font-extrabold text-3xl">FAQ</h3>
      <div className="p-6">
        <h3 className="text-red font-bold text-xl">Payments Methods</h3>
        <p>We accept VISA, MasterCard, American Express, Paypal and Binance, We accept VISA, MasterCard, American Express, Paypal and Binance.</p>
      </div>

      <div className="p-6">
        <h3 className="text-red font-bold text-xl">Cancellation Polity</h3>
        <ul>
          <li>Cancellations made more than 30 days before the arrival date: full refund of the deposit.</li>
          <br/>
          <li>Cancellations made between 30 and 15 days before the arrival date: refund of 50% of the deposit.</li>
          <br/>
          <li>Cancellations made less than 15 days before the arrival date: no refund will be made.</li>
        </ul>
      </div>
    </section>
  );
}

export { FAQ };