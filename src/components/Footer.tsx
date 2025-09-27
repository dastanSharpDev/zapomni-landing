"use client";

import { Box, Typography, Link as MuiLink } from "@mui/material";
import Image from "next/image";
import AppContainer from "@/components/AppContainer";

export default function Footer() {
  return (
    <Box 
      component="footer" 
      id="contacts"
      sx={{ 
        py: 5, 
        borderTop: "1px solid #121212",
        scrollMarginTop: 100
      }}
    >
      <AppContainer>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: 32, fontWeight: 600, mb: 2, textAlign: "center" }}>
            Не нашли интересующую услугу?
          </Typography>
          <Typography sx={{ fontSize: 24, fontWeight: 400, mb: 3, textAlign: "center" }}>
            Напишите нам на почту запрос
          </Typography>
          <Image
            src="/static/logo-header.svg"
            alt="Zapomni"
            width={160}
            height={70}
          />
          <Box sx={{ mt: 4, textAlign: "center" }}>
            <Typography
              sx={{ fontSize: 24, fontWeight: 500, color: "#121212" }}
            >
              ООО «Запомни Системс»
            </Typography>
            <Typography sx={{ mt: 2, fontSize: 20, color: "#121212" }}>
              ИНН 7708412621
            </Typography>
            <Box
              sx={{
                mt: 8,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1.5,
              }}
            >
              <Image src="/icon-phone.svg" alt="phone" width={24} height={24} />
              <MuiLink
                href="tel:+74951204264"
                underline="hover"
                sx={{ fontSize: 24, color: "#121212" }}
              >
                +7 495 120 42 64
              </MuiLink>
            </Box>
            <Box
              sx={{
                mt: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1.5,
              }}
            >
              <Image src="/icon-email.svg" alt="email" width={24} height={24} />
              <MuiLink
                href="mailto:info@zapomni.ru"
                underline="hover"
                sx={{ fontSize: 24, color: "#121212" }}
              >
                info@zapomni.ru
              </MuiLink>
            </Box>
          </Box>
        </Box>
      </AppContainer>
    </Box>
  );
}
