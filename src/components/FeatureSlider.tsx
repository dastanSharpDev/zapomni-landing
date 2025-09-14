"use client";

import { useMemo, useRef } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

export type FeatureSlide = {
  text: string;
  imageSrc: string;
  imageAlt?: string;
};

type FeatureSliderProps = {
  items: FeatureSlide[];
  reverse?: boolean;
};

export default function FeatureSlider({
  items,
  reverse = false,
}: FeatureSliderProps) {
  if (!items || items.length === 0) return null;
  const gridColumns = useMemo(
    () => ({ xs: "1fr", md: reverse ? "60% 40%" : "40% 60%" }),
    [reverse]
  );
  const swiperRef = useRef<any>(null);

  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation={false}
      //   autoplay={{
      //     delay: 4000,
      //     disableOnInteraction: false,
      //     pauseOnMouseEnter: true,
      //   }}
      slidesPerView={1}
      style={{ width: "100%" }}
      onSwiper={(s) => (swiperRef.current = s)}
    >
      {items.map((item, i) => (
        <SwiperSlide key={i}>
          <Box
            sx={{
              position: "relative",
              display: "grid",
              gridTemplateColumns: gridColumns,
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                order: { xs: 2, md: reverse ? 2 : 1 },
                maxWidth: "100%",
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: 28, md: 52 },
                  fontWeight: 800,
                  lineHeight: { xs: 1.1, md: 1.08 },
                  color: "#121212",
                  overflowWrap: "anywhere",
                }}
              >
                {item.text}
              </Typography>
            </Box>
            <Box
              sx={{
                order: { xs: 1, md: reverse ? 1 : 2 },
                position: "relative",
                width: "100%",
                height: { xs: 280, md: 420 },
              }}
            >
              <Image
                src={item.imageSrc}
                alt={item.imageAlt || "slide image"}
                fill
                sizes="(max-width: 900px) 100vw, 40vw"
                style={{ objectFit: "contain" }}
              />
            </Box>
          </Box>
        </SwiperSlide>
      ))}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          pointerEvents: "auto",
          zIndex: 10,
        }}
      >
        <IconButton
          aria-label="Prev"
          onClick={() => swiperRef.current?.slidePrev()}
          sx={{
            position: "absolute",
            left: { xs: 8, md: 8 },
            top: "50%",
            transform: "translateY(-50%)",
            bgcolor: "#ffffff",
            border: "1px solid rgba(18,18,18,0.12)",
            boxShadow: 1,
            ":hover": { bgcolor: "#ffffff" },
          }}
        >
          <ChevronLeftIcon />
        </IconButton>
        <IconButton
          aria-label="Next"
          onClick={() => swiperRef.current?.slideNext()}
          sx={{
            position: "absolute",
            right: { xs: 8, md: 8 },
            top: "50%",
            transform: "translateY(-50%)",
            bgcolor: "#ffffff",
            border: "1px solid rgba(18,18,18,0.12)",
            boxShadow: 1,
            ":hover": { bgcolor: "#ffffff" },
          }}
        >
          <ChevronRightIcon />
        </IconButton>
      </Box>
    </Swiper>
  );
}
