/* eslint-disable */
import React from 'react';
import { Form, Button, Row, Col } from 'antd';
import { SketchPicker } from 'react-color';
// import Preview from './preview';
import MainScreen from '../preview/MainScreen';

interface ThemeFormProps {
  form: any;
  primaryColor: string;
  handlePrimaryColorChange: (color: any) => void;
  secondaryColor: string;
  handleSecondaryColorChange: (color: any) => void;
  backgroundColor: string;
  handleBackgroundColorChange: (color: any) => void;
  textColor: string;
  handleTextColorChange: (color: any) => void;
  goToPreviousStep: () => void;
  onFinish: (values: any) => void;
  handleNextStep :any;
  firstFormValues :any;
}

const ThemeForm: React.FC<ThemeFormProps> = ({
  form,
  primaryColor,
  handlePrimaryColorChange,
  secondaryColor,
//   handleNextStep,
  handleSecondaryColorChange,
  backgroundColor,
  handleBackgroundColorChange,
  textColor,
  handleTextColorChange,
  goToPreviousStep,
  onFinish,
  firstFormValues,
}) => (
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    {/* Form Section */}
    <div style={{ width: '40%' }}>
      <h1 className="text-3xl font-bold text-gray-900 p-4">Theme Manager</h1>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        initialValues={{
          primaryColor,
          secondaryColor,
          backgroundColor,
          textColor,
        }}
      >
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Primary Color"
              name="primaryColor"
              rules={[{ required: true, message: 'Please pick the primary color!' }]}
            >
              <SketchPicker
                color={primaryColor}
                onChangeComplete={handlePrimaryColorChange}
              />walletname
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Secondary Color"
              name="secondaryColor"
              rules={[{ required: true, message: 'Please pick the secondary color!' }]}
            >
              <SketchPicker
                color={secondaryColor}
                onChangeComplete={handleSecondaryColorChange}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Background Color"
              name="backgroundColor"
              rules={[{ required: true, message: 'Please pick the background color!' }]}
            >
              <SketchPicker
                color={backgroundColor}
                onChangeComplete={handleBackgroundColorChange}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Text Color"
              name="textColor"
              rules={[{ required: true, message: 'Please pick the text color!' }]}
            >
              <SketchPicker
                color={textColor}
                onChangeComplete={handleTextColorChange}
              />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item>
          <Button type="default" onClick={goToPreviousStep} style={{ marginRight: '8px' }}>
            Back
          </Button>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>

    {/* Preview Section */}
    <MainScreen 
     firstFormValues={firstFormValues}
     backgroundColor={backgroundColor}
     textColor={textColor}
     secondaryColor={secondaryColor} 
     primaryColor={primaryColor}
    />
    {/* <Preview
    firstFormValues={firstFormValues}
    backgroundColor={backgroundColor}
    textColor={textColor}
    secondaryColor={secondaryColor} 
    primaryColor={primaryColor}
    /> */}
  </div>
);

export default ThemeForm;
