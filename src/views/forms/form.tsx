import React from 'react';
import { useFormState } from './formStateHandler'; // Adjust the import path as needed
import WalletForm from './formComponent/walletForm';
// import ColorForm from './formComponent/colorForm';
import ThemeForm from './formComponent/themeForm';

const MyForm: React.FC = () => {
  const {
    currentStep,
    form1,
    firstFormValues,
    form2,
    // color,
    isCrosschain,
    selectedPlatforms,
    onOffRampType,
    onRampPlatforms,
    offRampPlatforms,
    onFinishFirstForm,
    onFinishSecondForm,
    // handleColorChange,
    handleCrosschainChange,
    handlePlatformChange,
    handleApiKeyChange,
    handleOnOffRampChange,
    handleOnRampPlatformsChange,
    handleOffRampPlatformsChange,
    goToPreviousStep,
    handleNextStep,
    primaryColor,
    secondaryColor,
    backgroundColor,
    textColor,
    handlePrimaryColorChange,
    handleSecondaryColorChange,
    handleBackgroundColorChange,
    handleTextColorChange,
  } = useFormState();

  return (
    <div className="px-4">
      {currentStep === 1 && (
        <WalletForm
          form={form1}
          isCrosschain={isCrosschain}
          selectedPlatforms={selectedPlatforms}
          onOffRampType={onOffRampType}
          onRampPlatforms={onRampPlatforms}
          offRampPlatforms={offRampPlatforms}
          handleCrosschainChange={handleCrosschainChange}
          handlePlatformChange={handlePlatformChange}
          handleApiKeyChange={handleApiKeyChange}
          handleOnOffRampChange={handleOnOffRampChange}
          handleOnRampPlatformsChange={handleOnRampPlatformsChange}
          handleOffRampPlatformsChange={handleOffRampPlatformsChange}
          goToPreviousStep={goToPreviousStep}
          handleNextStep={handleNextStep}
          onFinish={onFinishFirstForm}
        />
      )}

      {/* {currentStep === 2 && (
        <ColorForm
          form={form2}
          color={color}
          handleColorChange={handleColorChange}
          goToPreviousStep={goToPreviousStep}
          onFinish={onFinishSecondForm}
          handleNextStep={handleNextStep}
        />
      )} */}

    {currentStep === 2 && (
          <ThemeForm
          form={form2}
          firstFormValues={firstFormValues}
          primaryColor={primaryColor}
          handlePrimaryColorChange={handlePrimaryColorChange}
          secondaryColor={secondaryColor}
          handleSecondaryColorChange={handleSecondaryColorChange}
          backgroundColor={backgroundColor}
          handleBackgroundColorChange={handleBackgroundColorChange}
          textColor={textColor}
          handleTextColorChange={handleTextColorChange}
          goToPreviousStep={goToPreviousStep}
          onFinish={onFinishSecondForm}
          handleNextStep={handleNextStep}
        />
        
      )}

    </div>
  );
};

export default MyForm;
