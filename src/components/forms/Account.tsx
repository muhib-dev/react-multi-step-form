import TextField from "../ui/TextField";
import { H1 } from "../typographies/Headlines";

interface AccountProps {
  email: string;
  password: string;
  confirmPassword: string;
  updateFormData: (fields: Partial<AccountProps>) => void;
}

function Account(props: AccountProps) {
  const { email, password, confirmPassword, updateFormData } = props;

  return (
    <>
      <H1>Account Info</H1>

      <TextField
        onChange={(e) => updateFormData({ email: e.target.value })}
        value={email}
        type="email"
        label="Email"
        required
        autoFocus
      />
      <TextField
        onChange={(e) => updateFormData({ password: e.target.value })}
        value={password}
        type="password"
        label="Password"
        required
      />
      <TextField
        onChange={(e) => updateFormData({ confirmPassword: e.target.value })}
        value={confirmPassword}
        type="password"
        label="Confirm Password"
        pattern={password}
        required
      />
    </>
  );
}

export default Account;
