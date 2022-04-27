import { Flex } from "../Layout/Flex";
import { Space } from "../Layout/Space/Space";
import { MenuItem } from "../MenuPanel";
import { ReactComponent as PhoneIcon } from "./assets/phone.svg";
import { ReactComponent as TelegramIcon } from "./assets/telegram.svg";

export const Contacts = () => {
  return (
    <Flex h="flex-end">
      <PhoneIcon />
      <Space />
      <MenuItem> +7 987 420 60-60</MenuItem>
      <Space />
      <TelegramIcon />
    </Flex>
  );
};
