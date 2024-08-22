import React from 'react';
import { Form, Input, Button } from 'antd';
import { SketchPicker } from 'react-color';

interface ColorFormProps {
  form: any;
  color: string;
  handleColorChange: (color: any) => void;
  goToPreviousStep: () => void;
  onFinish:any;
  handleNextStep : any;
}

const ColorForm: React.FC<ColorFormProps> = ({
  form,
  color,
  handleColorChange,
  goToPreviousStep,
  onFinish,
}) => (
  <>
    <h1 className="text-3xl font-bold text-gray-900 p-4">Color</h1>
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
    >
      <Form.Item
        label="Additional Info"
        name="additional_info"
        rules={[{ required: false, message: 'Please input additional info!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Pick a app Color"
        name="color_picker"
        rules={[{ required: true, message: 'Please pick a color' }]}
      >
        <SketchPicker
          color={color}
          onChangeComplete={handleColorChange}
        />
      </Form.Item>

      <Form.Item>
        <Button type="default" onClick={goToPreviousStep} style={{ marginRight: '8px' }}>
          Back
        </Button>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  </>
);

export default ColorForm;
