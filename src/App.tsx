import React, { useState } from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './tokens/theme';
import GlobalStyle from './tokens/GlobalStyle';
import ButtonGroup from './components/Actions/ButtonGroup/ButtonGroup';
import Button from './components/Actions/Button/Button';
import Typography from './components/Foundations/Typography/Typography';
import IconButton from './components/Actions/IconButton/IconButton';
import Checkbox from './components/Inputs/Checkbox/Checkbox';
import CheckboxContained from './components/Inputs/Checkbox/CheckboxContained';
import RadioButton from './components/Inputs/RadioButton/RadioButton';
import RadioButtonContained from './components/Inputs/RadioButton/RadioButtonContained';
import TextField from './components/Inputs/TextField/TextField';
import Tag from './components/Status/Tag/Tag';
import SelectField from './components/Inputs/SelectField/SelectField';
import TabGroup from './components/Navigation/Tabs/TabGroup';
import Modal from './components/Layout/Modal/Modal';

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="App">
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', justifyContent: 'left', padding: '3rem', backgroundColor: lightTheme.colors.background.pageFaded }}>
          <Typography variant="headingS" style={{ margin: '0rem' }}>React UI Kit</Typography>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'left' }}>
            <Typography variant="bodySBold" style={{ margin: '0rem' }}>Button variants</Typography>
            <ButtonGroup>
              <Button onClick={() => {}} variant="primary">Button</Button>
              <Button onClick={() => {}} variant="secondary">Button</Button>
              <Button onClick={() => {}} variant="tertiary">Button</Button>
            </ButtonGroup>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'left' }}>
            <Typography variant="bodySBold" style={{ margin: '0rem' }}>Button sizes</Typography>
            <ButtonGroup>
              <Button onClick={() => {}} variant="primary" size="large">Button</Button>
              <Button onClick={() => {}} variant="primary" size="medium">Button</Button>
              <Button onClick={() => {}} variant="primary" size="small">Button</Button>
              <Button onClick={() => {}} variant="secondary" size="large">Button</Button>
              <Button onClick={() => {}} variant="secondary" size="medium">Button</Button>
              <Button onClick={() => {}} variant="secondary" size="small">Button</Button>
              <Button onClick={() => {}} variant="tertiary" size="large">Button</Button>
              <Button onClick={() => {}} variant="tertiary" size="medium">Button</Button>
              <Button onClick={() => {}} variant="tertiary" size="small">Button</Button>
            </ButtonGroup>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'left' }}>
            <Typography variant="bodySBold" style={{ margin: '0rem' }}>Icon button variants</Typography>
            <ButtonGroup>
              <IconButton onClick={() => {}} buttonVariant="primary" buttonSize="large" />
              <IconButton onClick={() => {}} buttonVariant="secondary" buttonSize="large" />
              <IconButton onClick={() => {}} buttonVariant="tertiary" buttonSize="large" />
            </ButtonGroup>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'left' }}>
            <Typography variant="bodySBold" style={{ margin: '0rem' }}>Icon button sizes</Typography>
            <ButtonGroup>
              <IconButton onClick={() => {}} buttonVariant="primary" buttonSize="large" />
              <IconButton onClick={() => {}} buttonVariant="primary" buttonSize="medium" />
              <IconButton onClick={() => {}} buttonVariant="primary" buttonSize="small" />
              <IconButton onClick={() => {}} buttonVariant="secondary" buttonSize="large" />
              <IconButton onClick={() => {}} buttonVariant="secondary" buttonSize="medium" />
              <IconButton onClick={() => {}} buttonVariant="secondary" buttonSize="small" />
              <IconButton onClick={() => {}} buttonVariant="tertiary" buttonSize="large" />
              <IconButton onClick={() => {}} buttonVariant="tertiary" buttonSize="medium" />
              <IconButton onClick={() => {}} buttonVariant="tertiary" buttonSize="small" />
            </ButtonGroup>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'left' }}>
            <Typography variant="bodySBold" style={{ margin: '0rem' }}>Checkbox sizes</Typography>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'left' }}>
              <Checkbox label="Checkbox" checked={false} onChange={() => {}} variant="medium" />
              <Checkbox label="Checkbox" checked={false} onChange={() => {}} variant="small" />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'left' }}>
            <Typography variant="bodySBold" style={{ margin: '0rem' }}>Contained checkbox sizes</Typography>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'left' }}>
              <CheckboxContained label="Checkbox" checked={false} onChange={() => {}} variant="medium" />
              <CheckboxContained label="Checkbox" checked={false} onChange={() => {}} variant="small" />
            </div>
          </div> 
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'left' }}>
            <Typography variant="bodySBold" style={{ margin: '0rem' }}>Radio button sizes</Typography>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'left' }}>
              <RadioButton label="Radio" checked={false} onChange={() => {}} variant="medium" />
              <RadioButton label="Radio" checked={false} onChange={() => {}} variant="small" />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'left' }}>
            <Typography variant="bodySBold" style={{ margin: '0rem' }}>Contained radio button sizes</Typography>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'left' }}>
              <RadioButtonContained label="Radio" checked={false} onChange={() => {}} variant="medium" />
              <RadioButtonContained label="Radio" checked={false} onChange={() => {}} variant="small" />
            </div>
          </div>  
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'left' }}>
            <Typography variant="bodySBold" style={{ margin: '0rem' }}>Text field</Typography>
            <TextField hasLabel={true} label="Label" value="" onChange={() => {}} helperText="Helper text goes here" />
          </div>  
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'left' }}>
            <Typography variant="bodySBold" style={{ margin: '0rem' }}>Select field</Typography>
            <SelectField 
              label="Label"
              helperText="Helper text"
              options={[{ value: '1', label: 'Option 1' }, { value: '2', label: 'Option 2' }, { value: '3', label: 'Option 3' }]} 
              value="" 
              onChange={() => {}} 
            />
          </div>               
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'left' }}>
            <Typography variant="bodySBold" style={{ margin: '0rem' }}>Tag sizes</Typography>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', justifyContent: 'left' }}>
              <Tag children="Tag" variant="medium" />
              <Tag children="Tag" variant="small" />
            </div>
          </div>  
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'left' }}>
            <Typography variant="bodySBold" style={{ margin: '0rem' }}>Tag colors</Typography>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', justifyContent: 'left' }}>
              <Tag children="Tag" variant="medium" color='neutral'/>
              <Tag children="Tag" variant="medium" color='accent'/>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'left' }}>
            <Typography variant="bodySBold" style={{ margin: '0rem' }}>Tabs</Typography>
            <TabGroup
              tabs={[
                {
                  label: 'Tab 1',
                  content: <Typography variant="bodyM">Content for Tab 1</Typography>
                },
                {
                  label: 'Tab 2',
                  content: <Typography variant="bodyM">Content for Tab 2</Typography>
                },
                {
                  label: 'Tab 3',
                  content: <Typography variant="bodyM">Content for Tab 3</Typography>
                }
              ]}
            />
          </div>                                             
          <Button onClick={() => setIsModalOpen(true)} style={{ alignSelf: 'flex-start' }}>Open modal</Button>
          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            heading="Heading goes here"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;