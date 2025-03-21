import React from "react";
import { SettingsContainer, Input, Label } from "../styles";

const Settings = ({ setWorkMinutes, setBreakMinutes }) => {
  return (
    <SettingsContainer>
      <Label>집중 시간 (분):</Label>
      <Input type="number" onChange={(e) => setWorkMinutes(Number(e.target.value))} defaultValue={25} />

      <Label>휴식 시간 (분):</Label>
      <Input type="number" onChange={(e) => setBreakMinutes(Number(e.target.value))} defaultValue={5} />
    </SettingsContainer>
  );
};

export default Settings;
