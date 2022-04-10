import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import { Button } from "../../Button";
import { Flex } from "../../Layout/Flex";
import { Grid } from "../../Layout/Grid";
import { Layout } from "../../Layout/Layout";
import { Space } from "../../Layout/Space/Space";

export const ContactUsPage = () => {
  return (
    <Layout
      title="Напишите нам"
      style={{ background: "white", padding: "50px 0" }}
    >
      <div>
        Или звоните по телефону <b>+7 999-123-12-23</b>
      </div>
      <Space h={30} />
      <Grid temp="1fr 1fr" gap="30px">
        <TextField
          fullWidth
          id="outlined-basic"
          label="Имя"
          variant="outlined"
          required
        />
        <TextField
          fullWidth
          required
          id="outlined-basic"
          label="Корпоративный e-mail"
          variant="outlined"
        />
      </Grid>
      <Space h={30} />
      <TextField
        required
        fullWidth
        multiline
        type="text"
        id="outlined-basic"
        label="Сообщение"
        variant="outlined"
        rows={5}
      />
      <Space h={30} />
      <FormControlLabel
        label="Я согласен с политикой конфиденциальности и использования запрашиваемых данных"
        control={<Checkbox />}
      />

      <Space h={30} />
      <Button>Отправить</Button>
    </Layout>
  );
};
