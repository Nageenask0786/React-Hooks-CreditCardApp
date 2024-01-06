// Write your code here
import {useState} from 'react'

import {
  CreditCardApp,
  CreditCardDetails,
  Heading,
  Creditcard,
  CardNumber,
  CardHolderNameHeading,
  CardHolderName,
  PaymentDetails,
  PaymentDetailsInputContainer,
  Input,
  H2,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [cardholderName, setCardHolderName] = useState('')

  const onEnterCardName = event => {
    setCardNumber(event.target.value)
  }

  const onEnterCardHolderName = event => {
    setCardHolderName(event.target.value)
  }
  return (
    <CreditCardApp>
      <CreditCardDetails>
        <Heading>Credit Card</Heading>
        <Creditcard data-testid="creditCard">
          <CardNumber>{cardNumber}</CardNumber>
          <CardHolderNameHeading>CARDHOLDER NAME</CardHolderNameHeading>
          <CardHolderName>{cardholderName.toUpperCase()}</CardHolderName>
        </Creditcard>
      </CreditCardDetails>
      <PaymentDetails>
        <PaymentDetailsInputContainer>
          <H2>Payment Method</H2>
          <Input
            type="text"
            value={cardNumber}
            onChange={onEnterCardName}
            placeholder="Card Number"
          />
          <Input
            type="text"
            value={cardholderName}
            onChange={onEnterCardHolderName}
            placeholder="Cardholder Name"
          />
        </PaymentDetailsInputContainer>
      </PaymentDetails>
    </CreditCardApp>
  )
}

export default CreditCard
