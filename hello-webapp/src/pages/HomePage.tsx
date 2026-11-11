import type { JSX } from "react";
import { PageContent, PageTitle, Stack, Typography } from "@wso2/oxygen-ui";

export default function HomePage(): JSX.Element {
  return (
    <PageContent>
      <Stack spacing={2}>
        <PageTitle>
          <PageTitle.Header>Hello, World</PageTitle.Header>
        </PageTitle>
        <Typography variant="body2" color="text.secondary">
          Welcome. This page is open to everyone.
        </Typography>
      </Stack>
    </PageContent>
  );
}
