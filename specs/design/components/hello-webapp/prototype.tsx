import { Heading, Screen, Text, defineApp } from "@wso2/prototype-kit";

function Greeting() {
  return (
    <Screen>
      <Heading id="heading.greeting" text="Hi, World" />
      <Text id="text.welcome" text="Welcome. This page is open to everyone." />
    </Screen>
  );
}

export default defineApp({
  screens: {
    "screen.greeting": Greeting,
  },
  data: {},
});
