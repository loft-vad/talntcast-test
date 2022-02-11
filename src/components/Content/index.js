import { useRef, useState } from "react";
import Header from "../Header";
import StepPanel from "../StepPanel";
import s from "./style.module.scss";
import FormStart from "../FormStart";
import FormCompanyDetails from "../FormCompanyDetails";
import FormUBO from "../FormUBO";
import FormNatureOfBusiness from "../FormNatureOfBusiness";
import FormEstimatedMonthly from "../FormEstimatedMonthly";
import FormFinish from "../FormFinish";

const STEPS = [
  {
    title: "Welcome",
  },
  {
    title: "Company details",
  },
  {
    title: "Ultimate Beneficial Owner(s)",
  },
  {
    title: "Nature of business",
  },
  {
    title: "Estimated monthly volume",
  },
  {
    title: "Customer approval",
  },
];

const Content = () => {
  let [step, setStep] = useState(1);

  const fulfilledRef = useRef(null);
  const scrollToFulfilled = () => fulfilledRef.current.scrollIntoView();

  const firstStep = () => {
    scrollToFulfilled();
    setStep(1);
  };

  const prevStep = () => {
    setStep(--step);
  };

  const nextStep = () => {
    scrollToFulfilled();
    setStep(++step);
  };

  const componentMap = {
    1: <FormStart nextStep={nextStep} />,
    2: <FormCompanyDetails prevStep={prevStep} nextStep={nextStep} />,
    3: <FormUBO prevStep={prevStep} nextStep={nextStep} />,
    4: <FormNatureOfBusiness prevStep={prevStep} nextStep={nextStep} />,
    5: <FormEstimatedMonthly prevStep={prevStep} nextStep={nextStep} />,
    6: <FormFinish firstStep={firstStep} />
  };

  return (
    <div className={s.wrapper}>
      <Header />
      <div className={s.panelsWrapper}>
        {STEPS.map(({ title }, index) => (
          <StepPanel
            key={index}
            idx={index + 1}
            title={title}
            isActive={step === index + 1}
            isFulfilled={index + 1 < step}
            ref={(index === step - 1) ? fulfilledRef : null}
          >
            {componentMap[step]}
          </StepPanel>
        ))}
      </div>
    </div>
  );
};

export default Content;
