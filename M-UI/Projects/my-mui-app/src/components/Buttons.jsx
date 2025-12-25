import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";

export default function Buttons() {
  return (
    <div>
      <Stack spacing={2} direction="row">
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </Stack>
    </div>
  );
}
