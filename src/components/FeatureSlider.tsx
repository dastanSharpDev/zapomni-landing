"use client";

import { useMemo, useRef } from "react";
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
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
  const gridColumns = useMemo(
    () => ({ xs: "1fr", md: reverse ? "60% 40%" : "40% 60%" }),
    [reverse]
  );
  const swiperRef = useRef<SwiperType | null>(null);

  const slides = items ?? [];
  if (slides.length === 0) return null;

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "visible",
        "& .swiper": { cursor: "grab" },
        "& .swiper:active": { cursor: "grabbing" },
        "& .swiper-pagination": {
          position: "static !important",
          marginTop: { xs: 2, md: 3 },
          display: "flex",
          justifyContent: "center",
        },
        "& .swiper-pagination-bullet": {
          width: 12,
          height: 12,
          background: "#121212",
          opacity: 0.35,
          margin: "0 4px",
        },
        "& .swiper-pagination-bullet-active": {
          opacity: 1,
          background: "#121212",
        },
      }}
    >
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        grabCursor
        slidesPerView={1}
        style={{ width: "100%" }}
        onSwiper={(s) => (swiperRef.current = s)}
      >
        {slides.map((item, i) => (
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
      </Swiper>
    </Box>
  );
}
