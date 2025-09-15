"use client";

import { Box, Typography } from "@mui/material";
import AppContainer from "@/components/AppContainer";

export default function CtaAsk() {
  return (
    <Box
      id="contacts"
      sx={{
        py: 5,
        borderTop: "1px solid #121212",
        borderBottom: "1px solid #121212",
        scrollMarginTop: 100,
      }}
    >
      <AppContainer>
        <Box sx={{ textAlign: "center", maxWidth: 1000, mx: "auto" }}>
          <Typography sx={{ fontSize: 32, fontWeight: 600, mb: 2 }}>
            Не нашли интересующую услугу?
          </Typography>
          <Typography sx={{ fontSize: 24, fontWeight: 400, mb: 3 }}>
            Вы можете получить индивидуальную консультацию и предварительную
            оценку стоимости услуг разработки программного
            обеспечения/сервисов/инструментов для культурной сферы.
          </Typography>
          <Typography sx={{ fontSize: 16, fontWeight: 400 }}>
            Это поможет нам сфокусировать ваши потребности и более точно
            определить объем работ.
          </Typography>
        </Box>
      </AppContainer>
    </Box>
  );
}
