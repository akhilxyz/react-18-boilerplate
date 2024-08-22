import { useState } from 'react';
import { Form, message } from 'antd';

export const useFormState = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [form1] = Form.useForm();
  const [form2] = Form.useForm();
  const [color, setColor] = useState<string>('#fff');
  const [isCrosschain, setIsCrosschain] = useState<boolean>(false);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [apiKeys, setApiKeys] = useState<{ [key: string]: string }>({});
  const [onOffRampType, setOnOffRampType] = useState<string | null>(null);
  const [onRampPlatforms, setOnRampPlatforms] = useState<string[]>([]);
  const [offRampPlatforms, setOffRampPlatforms] = useState<string[]>([]);

  // Adding the theme color states
  const [primaryColor, setPrimaryColor] = useState<string>('#429bf5');
  const [secondaryColor, setSecondaryColor] = useState<string>('#e8e8e8');
  const [backgroundColor, setBackgroundColor] = useState<string>('#ffffff');
  const [textColor, setTextColor] = useState<string>('#000000');
  const [firstFormValues, setFirstFormValues] = useState()
  const onFinishFirstForm = (values: any) => {
    console.log('First Form values: ', values);
    setFirstFormValues(values)
    setCurrentStep(2);
  };  

  const onFinishSecondForm = (values: any) => {
    console.log('Second Form values: ', { ...values, color, apiKeys, primaryColor, secondaryColor, backgroundColor, textColor });
    message.success('Form submitted successfully!');
    // setCurrentStep(3);
  };

  const handleColorChange = (color: any) => {
    setColor(color.hex);
  };

  const handlePrimaryColorChange = (color: any) => {
    setPrimaryColor(color.hex);
  };

  const handleSecondaryColorChange = (color: any) => {
    setSecondaryColor(color.hex);
  };

  const handleBackgroundColorChange = (color: any) => {
    setBackgroundColor(color.hex);
  };

  const handleTextColorChange = (color: any) => {
    setTextColor(color.hex);
  };

  const handleCrosschainChange = (value: string) => {
    setIsCrosschain(value === 'yes');
  };

  const handlePlatformChange = (value: string[]) => {
    setSelectedPlatforms(value);
  };

  const handleApiKeyChange = (platform: string, key: string) => {
    setApiKeys((prev) => ({ ...prev, [platform]: key }));
  };

  const handleOnOffRampChange = (value: string) => {
    setOnOffRampType(value);
    if (value === 'on_ramp') {
      setOnRampPlatforms([]);
    } else if (value === 'off_ramp') {
      setOffRampPlatforms([]);
    }
  };

  const handleOnRampPlatformsChange = (value: string[]) => {
    setOnRampPlatforms(value);
  };

  const handleOffRampPlatformsChange = (value: string[]) => {
    setOffRampPlatforms(value);
  };

  const goToPreviousStep = () => {
    setCurrentStep(1);
  };

  const handleNextStep = () => {
    if (currentStep === 1) {
      form1.validateFields()
        .then(() => {
          setCurrentStep(2);
        })
        .catch((errorInfo) => {
          console.log('Validation Failed:', errorInfo);
          message.error('Please fill in all required fields.');
        });
    } else if (currentStep === 2) {
      form2.validateFields()
        .then(() => {
          setCurrentStep(3);
        })
        .catch((errorInfo) => {
          console.log('Validation Failed:', errorInfo);
          message.error('Please fill in all required fields.');
        });
    }
  };
  
  return {
    currentStep,
    form1,
    firstFormValues,
    form2,
    color,
    isCrosschain,
    selectedPlatforms,
    apiKeys,
    onOffRampType,
    onRampPlatforms,
    offRampPlatforms,
    primaryColor,
    secondaryColor,
    backgroundColor,
    textColor,
    onFinishFirstForm,
    onFinishSecondForm,
    handleColorChange,
    handlePrimaryColorChange,
    handleSecondaryColorChange,
    handleBackgroundColorChange,
    handleTextColorChange,
    handleCrosschainChange,
    handlePlatformChange,
    handleApiKeyChange,
    handleOnOffRampChange,
    handleOnRampPlatformsChange,
    handleOffRampPlatformsChange,
    goToPreviousStep,
    handleNextStep,
  };
};
