import { H1 } from "../typographies/Headlines";
import TextField from "../ui/TextField";

interface PaymentProps {
  cardNumber: string;
  cardHolderName: string;
  expireDate: string;
  updateFormData: (fields: Partial<PaymentProps>) => void;
}

function Payment(props: PaymentProps) {
  const { cardNumber, cardHolderName, expireDate, updateFormData } = props;

  return (
    <>
      <H1>Payment Info</H1>

      <TextField
        onChange={(e) => updateFormData({ cardNumber: e.target.value })}
        value={cardNumber}
        type="number"
        label="Card Number"
        autoFocus
      />
      <TextField
        onChange={(e) => updateFormData({ cardHolderName: e.target.value })}
        value={cardHolderName}
        label="Card Holder Name"
      />
      <TextField
        onChange={(e) => updateFormData({ expireDate: e.target.value })}
        value={expireDate}
        type="date"
        label="Expiry Date"
      />
    </>
  );
}

export default Payment;
