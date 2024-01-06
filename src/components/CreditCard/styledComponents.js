// Style your elements here
import styled from 'styled-components'

export const CreditCardApp = styled.div`
  display: flex;
  height: 100vh;
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`
export const CreditCardDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 50%;
  background-color: #3b4b69;
  @media screen and (max-width: 768px) {
    height: 50%;
    width: 100%;
  }
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  color: #ffffff;
  font-weight: bold;
  line-height: 20px;
  padding-top: 20px;
  text-decoration: underline;
  line-height: 1.5;
  letter-spacing: 0.8px;
  text-decoration-color: #ffd773;
  padding-bottom: 2px;
  text-decoration-thickness: 4px;
`
export const Creditcard = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  height: 50%;
  width: 80%;
  background-size: 100% 100%;
  margin-top: auto;
  margin-bottom: auto;
  border-radius: 15px;
  @media screen and (max-width: 768px) {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`
export const CardNumber = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-weight: bold;
  line-height: 20px;
  padding-top: 20px;
  line-height: 1.5;
  letter-spacing: 0.8px;
  font-size: 37px;
  padding-top: 40px;
  padding-left: 25px;
  @media screen and (max-width: 768px) {
    padding-top: 15px;
    font-size: 23px;
  }
`
export const CardHolderNameHeading = styled.p`
  font-family: 'Roboto';
  color: #c3cad9;
  font-weight: 400;
  line-height: 20px;
  padding-top: 20px;
  line-height: 1.5;
  font-size: 22px;
  padding-left: 25px;
  padding-top: 10px;
  padding-bottom: 10px;
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`
export const CardHolderName = styled.p`
  color: #d3d9e0;
  font-family: 'Roboto';
  font-weight: 400;
  line-height: 20px;
  padding-top: 20px;
  line-height: 1.5;
  font-size: 17px;
  padding-left: 25px;
  padding-top: 10px;
  padding-bottom: 10px;
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`
export const PaymentDetails = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    height: 50%;
    width: 100%;
  }
`
export const PaymentDetailsInputContainer = styled.div`
  width: 80%;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 0 15px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    height: 220px;
  }
`
export const Input = styled.input`
  height: 35px;
  width: 80%;
  outline: none;
  border: 0px;
  cursor: pointer;
  margin-bottom: 15px;
  background-color: transparent;
  color: #475569;
  font-family: 'Roboto';
  border: 1px solid #d3d9e0;
`
export const H2 = styled.h1`
  font-family: 'Roboto';
  color: #344e7a;
  font-weight: bold;
  font-size: 18px;
  padding-bottom: 15px;
`
