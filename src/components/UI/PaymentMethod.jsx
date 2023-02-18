import React from "react";
import masterCard from "../../assets/all-images/master-card.jpg";
import paypal from "../../assets/all-images/paypal.jpg";
import "../../styles/payment-method.css";
import { Container, Row, Col } from "reactstrap";

const PaymentMethod = () => {
 

  return (


    
    <section className="payment__method">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12">
            <h2 className="section__title payment__method-title">
              How do you want to pay?
            </h2>
          </Col>
        </Row>
        <div className="payment">
          <label htmlFor="" className="d-flex align-items-center gap-2">
            <input type="radio" /> Direct Bank Transfer
          </label>
        </div>

        <div className="payment mt-3">
          <label htmlFor="" className="d-flex align-items-center gap-2">
            <input type="radio" /> Cheque Payment
          </label>
        </div>

        <div className="payment mt-3 d-flex align-items-center justify-content-between">
          <label htmlFor="" className="d-flex align-items-center gap-2">
            <input type="radio" /> Master Card
          </label>

          <img src={masterCard} alt="" />
        </div>

        <div className="payment mt-3 d-flex align-items-center justify-content-between">
          <label htmlFor="" className="d-flex align-items-center gap-2">
            <input type="radio" /> Paypal
          </label>

          <img src={paypal} alt="" />
        </div>
        <div className="payment text-end mt-5">
          <button>Reserve Now</button>
        </div>
      </Container>
    </section>
  );
};

export default PaymentMethod;
