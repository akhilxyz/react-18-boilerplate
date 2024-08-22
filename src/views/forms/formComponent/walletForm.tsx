/* eslint-disable */ 

import { Form, Input, Select, Button } from 'antd';
import { useCallApi } from '@/hooks/callApi';
import { API } from '@/api';
import React from 'react';
const { Option } = Select;

interface WalletFormProps {
  form: any;
  isCrosschain: boolean;
  selectedPlatforms: string[];
  onOffRampType: string | null;
  onRampPlatforms: string[];
  offRampPlatforms: string[];
  handleCrosschainChange: (value: string) => void;
  handlePlatformChange: any;
  handleApiKeyChange: (platform: string, value: string) => void;
  handleOnOffRampChange: (value: string) => void;
  handleOnRampPlatformsChange: (value: string[]) => void;
  handleOffRampPlatformsChange: (value: string[]) => void;
  goToPreviousStep: () => void;
  handleNextStep: () => void;
  onFinish: (values: any) => void;
}

const WalletForm: React.FC<WalletFormProps> = ({
  form,
  isCrosschain,
  selectedPlatforms,
  onOffRampType,
  onRampPlatforms,
  offRampPlatforms,
  handleCrosschainChange,
  handlePlatformChange,
  handleApiKeyChange,
  handleOnOffRampChange,
  handleOnRampPlatformsChange,
  handleOffRampPlatformsChange,
  goToPreviousStep,
  handleNextStep,
  onFinish,
}) => {
  // Define a wrapper function for onFinish that also calls handleNextStep
  const handleSubmit = (values: any) => {
    onFinish(values);
    handleNextStep();
  };

  const blockChains = useCallApi(API.walletApi.blockchainList);

  const crossChains = useCallApi(API.walletApi.crosschainList , {}  , [isCrosschain] , [isCrosschain]);

  const rampType = onOffRampType === 'on_ramp' ? 'ON-RAMP' : 'OFF-RAMP';

  const ramps = useCallApi(API.walletApi.rampsList, { query: rampType } , [rampType] , [onOffRampType] );

  return (
    <>
      <h1 className="text-3xl font-bold text-gray-900 p-4">Wallet</h1>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
      >
        <Form.Item
          label="Wallet Name"
          name="walletname"
          rules={[{ required: true, message: 'Please input your wallet name!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Chain Name"
          name="chain_name"
          rules={[{ required: true, message: 'Please select your chain name!' }]}
        >
          <Select mode="multiple" placeholder="Select chains">
            {
              blockChains?.response?.map((chains: any) => {
                return <Option value={chains.name} key={chains.id}>{chains.name}</Option>
              })
            }
            {/* 
                <Option value="ethereum">Ethereum</Option>
                <Option value="binance">Binance Smart Chain</Option>
                <Option value="polygon">Polygon</Option> */}
            {/* Add more options as needed */}
          </Select>
        </Form.Item>

        <Form.Item
          label="Crosschain"
          name="crosschain"
          rules={[{ required: true, message: 'Please select a crosschain!' }]}
        >
          <Select placeholder="Select a crosschain" onChange={handleCrosschainChange}>
            <Option value="yes">Yes</Option>
            <Option value="no">No</Option>
          </Select>
        </Form.Item>

        {isCrosschain && (
          <>
            <Form.Item
              label="Select Crosschain Platforms"
              name="crosschain_platform"
              rules={[{ required: true, message: 'Please select at least one crosschain platform!' }]}
            >
              <Select mode="multiple" placeholder="Select platforms" onChange={handlePlatformChange}>
                {
                  crossChains?.response?.map((chains: any) => {
                    return <Option value={chains.name} key={chains.id + 'WALLET_crossChains'}>{chains.name}</Option>
                  })
                }
                {/* <Option value="swft">SWFT</Option>
                <Option value="0x">0x</Option> */}
              </Select>
            </Form.Item>

            {selectedPlatforms.map((platform :any) => (
              <Form.Item
                
                key={platform.id + 'WALLET_platform'}
                label={`API Key for ${platform}`}
                name={`api_key_${platform}`}
                rules={[{ required: true, message: `Please input API key for ${platform}!` }]}
              >
                <Input
                  placeholder={`Enter API key for ${platform}`}
                  onChange={(e) => handleApiKeyChange(platform, e.target.value)}
                />
              </Form.Item>
            ))}
          </>
        )}

        <Form.Item
          label="On/Off Ramp"
          name="on_off_ramp"
          rules={[{ required: true, message: 'Please select an On/Off Ramp!' }]}
        >
          <Select placeholder="Select On/Off Ramp" onChange={handleOnOffRampChange}>
            <Option value="on_ramp">On Ramp</Option>
            <Option value="off_ramp">Off Ramp</Option>
          </Select>
        </Form.Item>

        {onOffRampType === 'on_ramp' && (
          <>
            <Form.Item
              label="Select On Ramp Platforms"
              name="on_ramp_platforms"
              rules={[{ required: true, message: 'Please select at least one On Ramp platform!' }]}
            >
              <Select mode="multiple" placeholder="Select On Ramp Platforms" onChange={handleOnRampPlatformsChange}>
              {
                  ramps?.response?.map((chains: any) => {
                    return <Option value={chains.name} key={chains.id + 'WALLET_chains'}>{chains.name}</Option>
                  })
                }

                {/* <Option value="onramp_a">Onramp A</Option>
                <Option value="onramp_b">Onramp B</Option>
                Add more On Ramp options as needed */}
              </Select>
            </Form.Item>

            {onRampPlatforms.map(platform => (
              <Form.Item
                key={platform}
                label={`API Key for ${platform}`}
                name={`api_key_on_ramp_${platform}`}
                rules={[{ required: true, message: `Please input API key for ${platform}!` }]}
              >
                <Input
                  placeholder={`Enter API key for ${platform}`}
                  onChange={(e) => handleApiKeyChange(platform, e.target.value)}
                />
              </Form.Item>
            ))}
          </>
        )}

        {onOffRampType === 'off_ramp' && (
          <>
            <Form.Item
              label="Select Off Ramp Platforms"
              name="off_ramp_platforms"
              rules={[{ required: true, message: 'Please select at least one Off Ramp platform!' }]}
            >
              <Select mode="multiple" placeholder="Select Off Ramp Platforms" onChange={handleOffRampPlatformsChange}>
              {
                  ramps?.response?.map((chains: any) => {
                    return <Option value={chains.name}>{chains.name}</Option>
                  })
                }

                {/* <Option value="offramp_a">Offramp A</Option>
                <Option value="offramp_b">Offramp B</Option> */}
                {/* Add more Off Ramp options as needed */}
              </Select>
            </Form.Item>

            {offRampPlatforms.map(platform => (
              <Form.Item
                key={platform}
                label={`API Key for ${platform}`}
                name={`api_key_off_ramp_${platform}`}
                rules={[{ required: true, message: `Please input API key for ${platform}!` }]}
              >
                <Input
                  placeholder={`Enter API key for ${platform}`}
                  onChange={(e) => handleApiKeyChange(platform, e.target.value)}
                />
              </Form.Item>
            ))}
          </>
        )}

        <Form.Item>
          <Button type="default" onClick={goToPreviousStep} style={{ marginRight: '8px' }}>
            Back
          </Button>
          <Button type="primary" htmlType="submit">
            Next Page
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default WalletForm;
