import { H1 } from "../typographies/Headlines";
import TextField from "../ui/TextField";

interface PeronalProps {
  name: string;
  address: string;
  dateOfBirth: string;
  updateFormData: (fields: Partial<PeronalProps>) => void;
}

function Personal(props: PeronalProps) {
  const { name, address, dateOfBirth, updateFormData } = props;

  return (
    <>
      <H1>Personal Info</H1>

      <TextField
        onChange={(e) => updateFormData({ name: e.target.value })}
        value={name}
        label="Name"
        required
        autoFocus
      />
      <TextField
        onChange={(e) => updateFormData({ address: e.target.value })}
        value={address}
        label="Address"
      />
      <TextField
        onChange={(e) => updateFormData({ dateOfBirth: e.target.value })}
        value={dateOfBirth}
        label="Date Of Birth"
      />
    </>
  );
}

export default Personal;
