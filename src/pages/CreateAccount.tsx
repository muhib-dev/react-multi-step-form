import styled from "styled-components";
import { Card } from "../components/ui/Card";
import useFormSteps from "../hooks/useFormSteps";
import Account from "../components/forms/Account";
import Payment from "../components/forms/Payment";
import Personal from "../components/forms/Personal";
import { FormEvent, useState } from "react";
import { Button } from "../components/ui/Button";

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ControlButtons = styled.div`
  margin-top: 2rem;
`;

const Progressbar = styled.div`
  width: 100%;
  margin-bottom: 1rem;

  ul {
    padding: 0;
    display: flex;
    justify-content: space-between;
    counter-reset: step;
  }

  ul li {
    list-style-type: none;
    position: relative;
    flex: 1;
    text-align: center;
    cursor: pointer;
  }
  ul li:last-child:after {
    content: none;
  }

  ul li.active:after {
    background-color: #1cc076;
  }
  ul li.active:before {
    background-color: #1cc076;
    color: #fff;
    border: none;
  }

  ul li:before {
    counter-increment: step;
    content: counter(step);
    line-height: 30px;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    border: 1px solid #ddd;
    display: block;
    text-align: center;
    margin: 0 auto 10px;
    background-color: white;
    text-align: center;
  }

  ul li:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 4px;
    background-color: #ddd;
    top: 15px;
    left: 50%;
    z-index: -1;
  }
`;

interface formData {
  email: string;
  password: string;
  confirmPassword: string;
  cardNumber: string;
  cardHolderName: string;
  expireDate: string;
  name: string;
  address: string;
  dateOfBirth: string;
}

const INIT_FIELDS: formData = {
  email: "",
  password: "",
  confirmPassword: "",
  cardNumber: "",
  cardHolderName: "",
  expireDate: "",
  name: "",
  address: "",
  dateOfBirth: "",
};

const CreateAccount = () => {
  const [formState, setFormState] = useState(INIT_FIELDS);

  //update form on input change
  const updateFormData = (fields: Partial<formData>) => {
    setFormState((prev) => {
      return { ...prev, ...fields };
    });
  };

  const { currentIndex, form, next, prev, isFirstStep, isLastStep } =
    useFormSteps([
      <Account {...formState} updateFormData={updateFormData} />,
      <Payment {...formState} updateFormData={updateFormData} />,
      <Personal {...formState} updateFormData={updateFormData} />,
    ]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!isLastStep) return next();

    console.log(formState);
    alert(JSON.stringify(formState));
  };

  return (
    <Container>
      <Progressbar>
        <ul>
          <li className={currentIndex >= 1 ? "active" : ""}>Account</li>
          <li className={currentIndex >= 2 ? "active" : ""}>Payment</li>
          <li>Personal</li>
        </ul>
      </Progressbar>

      <Card>
        <form onSubmit={onSubmit}>
          {form}

          <ControlButtons>
            {!isFirstStep && (
              <Button variant="outlined" onClick={prev}>
                Previous
              </Button>
            )}

            <Button type="submit">
              {isLastStep ? "Create Account" : "Next"}
            </Button>
          </ControlButtons>
        </form>
      </Card>
    </Container>
  );
};

export default CreateAccount;
