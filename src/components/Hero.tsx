"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import AppContainer from "@/components/AppContainer";

export default function Hero() {
  return (
    <Box sx={{ py: { xs: 4, md: 8 } }}>
      <AppContainer>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: 4,
          }}
        >
          <Box sx={{ flex: { xs: 1, md: "0 0 40%" }, pr: { md: 4 } }}>
            <Typography
              component="p"
              sx={{
                fontSize: "clamp(18px, 3.2vw, 32px)",
                fontWeight: 400,
                lineHeight: { xs: 1.35, md: 1.3 },
                mb: 2,
                color: "#121212",
              }}
            >
              Универсальная билетная система для автоматизации работы учреждения
              культуры
            </Typography>

            <Typography
              component="h1"
              sx={{
                fontSize: "clamp(40px, 8vw, 86px)",
                fontWeight: 800,
                lineHeight: { xs: 1.08, md: 1.06 },
                letterSpacing: "-0.5px",
                mb: 3,
                color: "#121212",
              }}
            >
              Zapomni Systems
            </Typography>

            <Box sx={{ mt: 4, width: { xs: 56, md: 96 } }}>
              <Image
                src="/icon-arrow.svg"
                alt="Arrow down"
                width={96}
                height={96}
                sizes="(max-width: 900px) 56px, 96px"
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
          </Box>

          <Box sx={{ flex: { xs: 1, md: "0 0 60%" }, width: "100%" }}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: { xs: 300, md: 400, lg: 500 },
                borderRadius: 2,
                overflow: "hidden",
                boxShadow: "none",
              }}
            >
              <Image
                src="/images/hero.png"
                alt="Zapomni Systems interface preview"
                width={1200}
                height={800}
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
                priority
              />
            </Box>
          </Box>
        </Box>
      </AppContainer>
    </Box>
  );
}
