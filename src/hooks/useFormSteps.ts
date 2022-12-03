import { ReactElement, useState } from "react";

const useFormSteps = (forms: ReactElement[]) => {
  const [formIndex, setFormIndex] = useState(0);
  const totalForms = forms.length - 1;

  //step next
  const nextForm = () => {
    setFormIndex((index) => {
      if (index >= totalForms) return index;

      return index + 1;
    });
  };

  //step previous
  const prevForm = () => {
    setFormIndex((index) => {
      if (index <= 0) return index;

      return index - 1;
    });
  };

  //goto form
  const gotoForm = (index: number) => {
    setFormIndex(index);
  };

  return {
    next: nextForm,
    prev: prevForm,
    goto: gotoForm,
    form: forms[formIndex],
    currentIndex: formIndex,
    totalForms: totalForms,
    isFirstStep: formIndex === 0,
    isLastStep: formIndex === totalForms,
  };
};

export default useFormSteps;
