"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import AppContainer from "@/components/AppContainer";
import FeatureSlider, { FeatureSlide } from "@/components/FeatureSlider";

function Feature({ icon, text }: { icon: string; text: string }) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "15px",
        alignItems: "flex-start",
        p: "30px",
        border: "1px solid #E6E6E6",
        borderRadius: 1,
        bgcolor: "#FFFFFF",
      }}
    >
      <Image src={icon} alt="icon" width={48} height={48} />
      <Typography sx={{ fontSize: 24, fontWeight: 400, color: "#121212" }}>
        {text}
      </Typography>
    </Box>
  );
}

export default function CashierAutomation() {
  return (
    <Box
      sx={{
        py: 12,
      }}
    >
      <AppContainer>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: "40px", md: "100px" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: "40px", md: "20px" },
              flexDirection: { xs: "column", md: "row" },
              mb: 5,
            }}
          >
            <Box
              sx={{
                width: { xs: "100%", md: "calc(30% - 10px)" },
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "flex-start", md: "space-between" },
              }}
            >
              <Typography
                sx={{
                  fontSize: 24,
                  fontWeight: 400,
                  color: "#121212",
                  minWidth: "200px",
                }}
              >
                Zapomni Systems
              </Typography>
              <Box
                sx={{
                  display: { xs: "none", md: "block" },
                  width: "calc(100% - 200px - 20px)",
                  height: 2,
                  bgcolor: "#121212",
                }}
              />
            </Box>
            <Typography
              sx={{
                fontSize: 24,
                fontWeight: 400,
                color: "#121212",
                width: { xs: "100%", md: "calc(70% - 10px)" },
              }}
            >
              Универсальная билетная система для автоматизации работы учреждения
              культуры, функционирует и развивается на рынке с 2015 года,
              Зарегистрирована как программа для ЭВМ за № 2020661448
            </Typography>
          </Box>

          <section id="general" style={{ scrollMarginTop: 100 }}>
            <div
              style={{ maxWidth: 1440, margin: "0 auto", padding: "0 16px" }}
            >
              <Typography
                sx={{
                  fontSize: 24,
                  fontWeight: 400,
                  color: "#121212",
                  mb: 4,
                }}
              >
                Администрирование мероприятий
              </Typography>
              <FeatureSlider
                items={[
                  {
                    text: "Создание мероприятий",
                    imageSrc: "/images/special-block/first-block/1.png",
                  } as FeatureSlide,
                  {
                    text: "Комплексные мероприятия (абонементы)",
                    imageSrc: "/images/special-block/first-block/2.png",
                  } as FeatureSlide,
                  {
                    text: "Бронирование и пригласительные",
                    imageSrc: "/images/special-block/first-block/3.png",
                  } as FeatureSlide,
                  {
                    text: "История изменений в мероприятиях",
                    imageSrc: "/images/special-block/first-block/4.png",
                  } as FeatureSlide,
                ]}
              />
            </div>
          </section>

          <section id="sales" style={{ scrollMarginTop: 100 }}>
            <div
              style={{ maxWidth: 1440, margin: "0 auto", padding: "0 16px" }}
            >
              <Typography
                sx={{
                  fontSize: 24,
                  fontWeight: 400,
                  color: "#121212",
                  mb: 4,
                }}
              >
                Электронные продажи
              </Typography>
              <FeatureSlider
                items={[
                  {
                    text: "Продажа входных билетов",
                    imageSrc: "/images/special-block/second-block/1.png",
                  } as FeatureSlide,
                  {
                    text: "Продажа билетов на карте залас функцией«Вид с места»",
                    imageSrc: "/images/special-block/second-block/2.png",
                  } as FeatureSlide,
                  {
                    text: "Продажа по платежному поручению",
                    imageSrc: "/images/special-block/second-block/3.png",
                  } as FeatureSlide,
                  {
                    text: "Применение скидок и льгот",
                    imageSrc: "/images/special-block/second-block/4.png",
                  } as FeatureSlide,
                  {
                    text: "Продажа экскурсионного билета",
                    imageSrc: "/images/special-block/second-block/5.png",
                  } as FeatureSlide,
                ]}
                reverse
              />
            </div>
          </section>

          <section id="advanced" style={{ scrollMarginTop: 100 }}>
            <div
              style={{ maxWidth: 1440, margin: "0 auto", padding: "0 16px" }}
            >
              <Typography
                sx={{
                  fontSize: 24,
                  fontWeight: 400,
                  color: "#121212",
                  mb: 4,
                }}
              >
                Дополнительные услуги
              </Typography>
              <FeatureSlider
                items={[
                  {
                    text: "Продажа дополнительных услуг",
                    imageSrc: "/images/special-block/third-block/1.png",
                  } as FeatureSlide,
                  {
                    text: "Подарочный сертификат",
                    imageSrc: "/images/special-block/third-block/2.png",
                  } as FeatureSlide,
                  {
                    text: "Опросники",
                    imageSrc: "/images/special-block/third-block/3.png",
                  } as FeatureSlide,
                  {
                    text: "Корзина позволяющая оформлять билеты на различные мероприятия в одном заказе",
                    imageSrc: "/images/special-block/third-block/4.png",
                  } as FeatureSlide,
                ]}
              />
            </div>
          </section>

          <section id="features" style={{ scrollMarginTop: 100 }}>
            <div
              style={{ maxWidth: 1440, margin: "0 auto", padding: "0 16px" }}
            >
              <Typography
                sx={{
                  fontSize: 24,
                  fontWeight: 400,
                  color: "#121212",
                  mb: 4,
                }}
              >
                Отчеты и статистика
              </Typography>
              <FeatureSlider
                items={[
                  {
                    text: "Интеграция с базой кинорелизов, выгрузка данных о продажах в Rentrak и ЕАИС",
                    imageSrc: "/images/special-block/fourth-block/1.png",
                  } as FeatureSlide,
                  {
                    text: "Аналитика и статистика",
                    imageSrc: "/images/special-block/fourth-block/2.png",
                  } as FeatureSlide,
                  {
                    text: "Отчеты",
                    imageSrc: "/images/special-block/fourth-block/3.png",
                  } as FeatureSlide,
                  {
                    text: "Управление данными клиентов",
                    imageSrc: "/images/special-block/fourth-block/4.png",
                  } as FeatureSlide,
                  {
                    text: "Управление заказами",
                    imageSrc: "/images/special-block/fourth-block/5.png",
                  } as FeatureSlide,
                  {
                    text: "API интеграция с ведущими билетными операторами",
                    imageSrc: "/images/special-block/fourth-block/6.png",
                  } as FeatureSlide,
                ]}
                reverse
              />
            </div>
          </section>

          <section id="five-block" style={{ scrollMarginTop: 100 }}>
            <div
              style={{ maxWidth: 1440, margin: "0 auto", padding: "0 16px" }}
            >
              <Typography
                sx={{
                  fontSize: 24,
                  fontWeight: 400,
                  color: "#121212",
                  mb: 4,
                }}
              >
                Кастомизированный сервис продаж
              </Typography>
              <FeatureSlider
                items={[
                  {
                    text: "Кастомизация виджета продаж, билетов и писем под партнера",
                    imageSrc: "/images/special-block/fifth-block/1.png",
                  } as FeatureSlide,
                  {
                    text: "Кастомизация виджета продаж, билетов и писем под партнера",
                    imageSrc: "/images/special-block/fifth-block/2.png",
                  } as FeatureSlide,
                  {
                    text: "Кастомизация виджета продаж, билетов и писем под партнера",
                    imageSrc: "/images/special-block/fifth-block/3.png",
                  } as FeatureSlide,
                  {
                    text: "Кастомизация виджета продаж, билетов и писем под партнера",
                    imageSrc: "/images/special-block/fifth-block/4.png",
                  } as FeatureSlide,
                  {
                    text: "Кастомизация виджета продаж, билетов и писем под партнера",
                    imageSrc: "/images/special-block/fifth-block/5.png",
                  } as FeatureSlide,
                  {
                    text: "Кастомизация виджета продаж, билетов и писем под партнера",
                    imageSrc: "/images/special-block/fifth-block/6.png",
                  } as FeatureSlide,
                  {
                    text: "Кастомизация виджета продаж, билетов и писем под партнера",
                    imageSrc: "/images/special-block/fifth-block/7.png",
                  } as FeatureSlide,
                ]}
              />
            </div>
          </section>

          <Box id="pos-automation" sx={{ scrollMarginTop: 100 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 4,
                gap: { xs: "40px", md: "20px" },
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <Box
                sx={{
                  width: { xs: "100%", md: "30%" },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: { xs: "flex-start", md: "space-between" },
                }}
              >
                <Typography
                  sx={{
                    fontSize: 24,
                    fontWeight: 400,
                    color: "#121212",
                  }}
                >
                  Автоматизация кассового блока
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "2fr 3fr" },
                alignItems: "start",
              }}
            >
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    mb: 4,
                  }}
                >
                  <Feature
                    icon="/images/chasier-block/icon_4.svg"
                    text="Мобильные кассы и автоматизированные терминалы для продажи билетов и услуг"
                  />
                </Box>

                <img
                  src="/images/chasier-block/2.png"
                  alt="Терминалы Zapomni"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </Box>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  minHeight: 480,
                }}
              >
                <Image
                  src="/images/chasier-block/1.png"
                  alt="Терминалы Zapomni"
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  style={{ objectFit: "contain" }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </AppContainer>
    </Box>
  );
}
