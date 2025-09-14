import { PropsWithChildren } from "react";
import { Container } from "@mui/material";

type AppContainerProps = PropsWithChildren<{
  disableCenter?: boolean;
}>;

export default function AppContainer({
  children,
  disableCenter,
}: AppContainerProps) {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: 1440,
        mx: disableCenter ? 0 : "auto",
      }}
    >
      {children}
    </Container>
  );
}
