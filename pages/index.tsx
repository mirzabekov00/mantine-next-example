import {
  useMantineColorScheme,
  AppShell,
  Navbar,
  Header,
  Button,
  Checkbox,
  Autocomplete,
  Divider,
  Chips,
  Chip,
  ColorInput,
  Input,
  InputWrapper,
  useMantineTheme,
  MediaQuery,
  Burger,
  Text,
  Badge,
  SegmentedControl,
} from "@mantine/core";
import { useNotifications } from "@mantine/notifications";
import { useState } from "react";

export default function HomePage() {
  const [value, setValue] = useState("");
  const [opened, setOpened] = useState(false);

  const theme = useMantineTheme();
  const notifications = useNotifications();
  const { toggleColorScheme } = useMantineColorScheme();

  const components = [
    <Button fullWidth onClick={() => toggleColorScheme()}>
      Change theme
    </Button>,
    <Button
      loading
      variant="gradient"
      gradient={{ from: "teal", to: "blue", deg: 60 }}
    >
      Teal blue
    </Button>,
    <Checkbox label="I agree to sell my privacy" />,
    <Autocomplete
      label="Your favorite framework/library"
      placeholder="Pick one"
      data={["React", "Angular", "Svelte", "Vue"]}
    />,
    <Chips color="violet">
      <Chip value="react">React</Chip>
      <Chip value="ng">Angular</Chip>
      <Chip value="svelte">Svelte</Chip>
      <Chip value="vue">Vue</Chip>
    </Chips>,
    <ColorInput value={value} onChange={(event) => setValue(event)} />,
    <Input placeholder="Your email" />,
    <InputWrapper
      id="input-demo"
      required
      label="Credit card information"
      description="Please enter your credit card information, we need some money"
      error="Your credit card expired"
    >
      <Input id="input-demo" placeholder="Your email" />
    </InputWrapper>,
    <Button
      variant="outline"
      onClick={() =>
        notifications.showNotification({
          title: "Default notification",
          message: "Hey there, your code is awesome! 🤥",
        })
      }
    >
      Show notification
    </Button>,
    <>
      <Badge>Default light badge</Badge>
      <Badge variant="dot">Dot badge</Badge>
      <Badge variant="outline">Outline badge</Badge>
      <Badge variant="filled">Filled badge</Badge>
    </>,
    <SegmentedControl
      data={[
        { label: "React", value: "react" },
        { label: "Angular", value: "ng" },
        { label: "Vue", value: "vue" },
        { label: "Svelte", value: "svelte" },
      ]}
    />,
  ];

  return (
    <AppShell
      navbarOffsetBreakpoint="sm"
      fixed
      navbar={
        <Navbar
          padding="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 200, lg: 300 }}
        >
          <Text>Application navbar</Text>
        </Navbar>
      }
      header={
        <Header height={70} padding="md">
          <MediaQuery largerThan="sm" styles={{ display: "none" }}>
            <Burger
              opened={opened}
              onClick={() => setOpened((o) => !o)}
              size="sm"
              color={theme.colors.gray[6]}
              mr="xl"
            />
          </MediaQuery>
          <Text>Application header</Text>
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      {components.map((component, index) => (
        <div key={index}>
          {component}
          <Divider my="md" />
        </div>
      ))}
    </AppShell>
  );
}
