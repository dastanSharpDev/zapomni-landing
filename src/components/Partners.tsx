"use client";

import { Box, Typography } from "@mui/material";
import { keyframes } from "@mui/system";
import Image from "next/image";
import AppContainer from "@/components/AppContainer";

const partnerLogosRow1 = [
  "1.png",
  "2.png",
  "3.png",
  "4.png",
  "5.png",
  "6.png",
  "7.png",
];
const partnerLogosRow2 = ["8.png", "9.png", "10.png", "11.png", "12.png"];

const scrollLeft = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

function LogosRow({
  files,
  mdCols,
  reverse = false,
}: {
  files: string[];
  mdCols: number;
  reverse?: boolean;
}) {
  const loopFiles = [...files, ...files];
  return (
    <>
      <Box
        sx={{
          display: { xs: "block", md: "none" },
          overflow: "hidden",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: "32px",
            whiteSpace: "nowrap",
            animation: `${scrollLeft} 28s linear infinite`,
            animationDirection: reverse ? "reverse" : "normal",
          }}
        >
          {loopFiles.map((file, idx) => (
            <Box
              key={`${file}-${idx}`}
              sx={{
                position: "relative",
                height: 56,
                width: 140,
                p: 2,
                opacity: 0.95,
              }}
            >
              <Image
                src={`/images/partners-block/${file}`}
                alt={file}
                fill
                sizes="100px"
                style={{ objectFit: "contain" }}
              />
            </Box>
          ))}
        </Box>
      </Box>

      <Box
        sx={{
          display: { xs: "none", md: "block" },
          overflowX: "auto",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: `repeat(2, 120px)`,
              sm: `repeat(3, 140px)`,
              md: `repeat(${mdCols}, 160px)`,
            },
            alignItems: "center",
            gap: { xs: "24px", md: "50px" },
            width: "fit-content",
            mx: "auto",
          }}
        >
          {files.map((file) => (
            <Box
              key={file}
              sx={{
                position: "relative",
                height: { xs: 56, sm: 64, md: 80 },
                width: { xs: 120, sm: 140, md: 160 },
                p: 2,
                transition:
                  "transform 200ms ease, filter 200ms ease, opacity 200ms ease",
                opacity: 0.9,
                "&:hover": {
                  transform: "scale(1.05)",
                  filter: "drop-shadow(0 6px 20px rgba(0,0,0,0.12))",
                  opacity: 1,
                },
              }}
            >
              <Image
                src={`/images/partners-block/${file}`}
                alt={file}
                fill
                sizes="(max-width: 900px) 100vw, 33vw"
                style={{ objectFit: "contain" }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}

export default function Partners() {
  return (
    <Box
      sx={{
        py: 5,
        borderTop: "1px solid #121212",
        borderBottom: "1px solid #121212",
      }}
    >
      <AppContainer>
        <Typography
          component="h2"
          sx={{
            fontSize: 32,
            fontWeight: 600,
            textAlign: "center",
            mb: 5,
            color: "#121212",
          }}
        >
          Наши партнёры
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: "32px", md: "50px" },
          }}
        >
          <LogosRow files={partnerLogosRow1} mdCols={7} />
          <LogosRow files={partnerLogosRow2} mdCols={5} reverse />
        </Box>
      </AppContainer>
    </Box>
  );
}
