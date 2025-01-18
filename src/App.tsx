import React, { useState, useEffect } from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './tokens/theme';
import GlobalStyle from './tokens/GlobalStyle';
import Icon from './components/Foundations/Icon/Icon';
import Button from './components/Inputs/Button/Button';
import Typography from './components/Foundations/Typography/Typography';
import CheckboxGroup from './components/Inputs/Checkbox/CheckboxGroup';
import RadioButtonGroup from './components/Inputs/RadioButton/RadioButtonGroup';

function App() {

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  const [selectedRadio, setSelectedRadio] = useState<string | null>(null);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState<string[]>([]);

  useEffect(() => {
    console.log('Selected Radio:', selectedRadio);
  }, [selectedRadio]);

  useEffect(() => {
    console.log('Selected Checkboxes:', selectedCheckboxes);
  }, [selectedCheckboxes]);

  const handleCheckboxGroupChange = (selectedValues: string[]) => {
    setSelectedCheckboxes(selectedValues);
  };

  const handleRadioButtonGroupChange = (value: string) => {
    setSelectedRadio(value);
  };

  const radioOptions = [
    { label: 'Option 1', value: 'radio1' },
    { label: 'Option 2', value: 'radio2' },
  ];

  const checkboxOptions = [
    { label: 'Checkbox 1', value: 'checkbox1' },
    { label: 'Checkbox 2', value: 'checkbox2' },
  ];

  return (
    <div className="App">
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <GlobalStyle />
        <>This is a test</>
        <Button onClick={toggleTheme} style={{ position: "fixed", top: "auto", left: "auto", right: "1rem", bottom: "1rem" }}>
          {isDarkTheme ? "Switch to light mode" : "Switch to dark mode"}
        </Button>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", padding: "1rem" }}>
        <Icon iconName={isDarkTheme ? "moon" : "sun"} iconSize="large" iconColor="primary" iconStyle={{ position: "fixed", top: "1rem", left: "auto", right: "1rem", bottom: "auto" }} />
          <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
            <Icon iconName="plus" iconSize="small" iconColor="primary" />
            <Icon iconName="plus" iconSize="medium" iconColor="primary" />
            <Icon iconName="plus" iconSize="large" iconColor="primary" />
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
            <Button variant="primary" size="small" onClick={() => console.log("Button clicked")}>Primary</Button>
            <Button variant="primary" size="medium" onClick={() => console.log("Button clicked")}>Primary</Button>
            <Button variant="primary" size="large" onClick={() => console.log("Button clicked")}>Primary</Button>
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
            <Button variant="secondary" size="small" onClick={() => console.log("Button clicked")}>Primary</Button>
            <Button variant="secondary" size="medium" onClick={() => console.log("Button clicked")}>Primary</Button>
            <Button variant="secondary" size="large" onClick={() => console.log("Button clicked")}>Primary</Button>
          </div> 
          <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
            <Button variant="tertiary" size="small" onClick={() => console.log("Button clicked")}>Primary</Button>
            <Button variant="tertiary" size="medium" onClick={() => console.log("Button clicked")}>Primary</Button>
            <Button variant="tertiary" size="large" onClick={() => console.log("Button clicked")}>Primary</Button>
          </div> 
          <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
            <Button variant="primary" disabled size="large" onClick={() => console.log("Button clicked")}>Primary</Button>
            <Button variant="secondary" disabled size="large" onClick={() => console.log("Button clicked")}>Primary</Button>
            <Button variant="tertiary" disabled size="large" onClick={() => console.log("Button clicked")}>Primary</Button>
          </div>
          <div>
            <Typography variant="bodyS">Example of some text</Typography>
            <Typography variant="bodySBold">Example of some text</Typography>
            <Typography variant="bodyM">Example of some text</Typography>
            <Typography variant="bodyMBold">Example of some text</Typography>
          </div>
          <CheckboxGroup
            options={checkboxOptions}
            variant="medium"
            onChange={handleCheckboxGroupChange}
          />
          <RadioButtonGroup
            options={radioOptions}
            name="exampleRadioGroup"
            variant="medium"
            onChange={handleRadioButtonGroupChange}
          />
        </div>        
      </ThemeProvider>
    </div>
  );
}

export default App;