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
                  fontSize: 16,
                  fontWeight: 400,
                  color: "#121212",
                  minWidth: "105px",
                }}
              >
                Особенности
              </Typography>
              <Box
                sx={{
                  display: { xs: "none", md: "block" },
                  width: "calc(100% - 105px - 20px)",
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
              Zapomni Systems — билетная система для всех учреждений культуры,
              функционирует и развивается на рынке с 2015 года, зарегистрирован
              как программа для ЭВМ за № 2020661448
            </Typography>
          </Box>

          <section>
            <div
              style={{ maxWidth: 1440, margin: "0 auto", padding: "0 16px" }}
            >
              <FeatureSlider
                items={[
                  {
                    text: "Создание мероприятий",
                    imageSrc: "/images/special-block/first-block/1.png",
                  } as FeatureSlide,
                  {
                    text: "Аналитика и статистика",
                    imageSrc: "/images/special-block/first-block/2.png",
                  } as FeatureSlide,
                  {
                    text: "Отчеты",
                    imageSrc: "/images/special-block/first-block/3.png",
                  } as FeatureSlide,
                ]}
              />
            </div>
          </section>

          <section>
            <div
              style={{ maxWidth: 1440, margin: "0 auto", padding: "0 16px" }}
            >
              <FeatureSlider
                items={[
                  {
                    text: "История изменений в мероприятиях",
                    imageSrc: "/images/special-block/second-block/1.png",
                  } as FeatureSlide,
                  {
                    text: "Бронирование и пригласительные",
                    imageSrc: "/images/special-block/second-block/2.png",
                  } as FeatureSlide,
                  {
                    text: "Управление данными клиентов",
                    imageSrc: "/images/special-block/second-block/3.png",
                  } as FeatureSlide,
                  {
                    text: "Управление заказами",
                    imageSrc: "/images/special-block/second-block/4.png",
                  } as FeatureSlide,
                  {
                    text: "Эвотор, мобильная касса",
                    imageSrc: "/images/special-block/second-block/5.png",
                  } as FeatureSlide,
                  {
                    text: "Комплексные мероприятия (абонементы)",
                    imageSrc: "/images/special-block/second-block/6.png",
                  } as FeatureSlide,
                ]}
                reverse
              />
            </div>
          </section>

          <section>
            <div
              style={{ maxWidth: 1440, margin: "0 auto", padding: "0 16px" }}
            >
              <FeatureSlider
                items={[
                  {
                    text: "Продажа входных билетов",
                    imageSrc: "/images/special-block/third-block/1.png",
                  } as FeatureSlide,
                  {
                    text: "Продажа билетов на карте зала с функцией «Вид с места»",
                    imageSrc: "/images/special-block/third-block/2.png",
                  } as FeatureSlide,
                  {
                    text: "Заказ на разные события",
                    imageSrc: "/images/special-block/third-block/3.png",
                  } as FeatureSlide,
                  {
                    text: "Подарочный сертификат",
                    imageSrc: "/images/special-block/third-block/4.png",
                  } as FeatureSlide,
                  {
                    text: "Применение скидок и льгот",
                    imageSrc: "/images/special-block/third-block/5.png",
                  } as FeatureSlide,
                  {
                    text: "Продажа по платежному поручению",
                    imageSrc: "/images/special-block/third-block/6.png",
                  } as FeatureSlide,
                  {
                    text: "Продажа экскурсионного билета",
                    imageSrc: "/images/special-block/third-block/7.png",
                  } as FeatureSlide,
                ]}
              />
            </div>
          </section>


          <section>
            <div
              style={{ maxWidth: 1440, margin: "0 auto", padding: "0 16px" }}
            >
              <FeatureSlider
                items={[
                  {
                    text: "Интеграция с базой кинорелизов, выгрузка данных о продажах в Rentrak и ЕАИС",
                    imageSrc: "/images/special-block/fourth-block/1.png",
                  } as FeatureSlide,
                  {
                    text: "Кастомизированный виджет",
                    imageSrc: "/images/special-block/fourth-block/2.png",
                  } as FeatureSlide,
                  {
                    text: "Продажа дополнительных услуг",
                    imageSrc: "/images/special-block/fourth-block/3.png",
                  } as FeatureSlide,
                  {
                    text: "Опросники",
                    imageSrc: "/images/special-block/fourth-block/4.png",
                  } as FeatureSlide,
                  {
                    text: "Уведомления о покупке пуш/смс",
                    imageSrc: "/images/special-block/fourth-block/5.png",
                  } as FeatureSlide,
                  {
                    text: "Система контроля доступа по билетам",
                    imageSrc: "/images/special-block/fourth-block/6.png",
                  } as FeatureSlide,
                ]}
                reverse
              />
            </div>
          </section>

          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 5,
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
                    fontSize: 16,
                    fontWeight: 400,
                    color: "#121212",
                    minWidth: "250px",
                  }}
                >
                  Автоматизация кассового блока
                </Typography>
                <Box
                  sx={{
                    display: { xs: "none", md: "block" },
                    width: "calc(100% - 250px - 20px)",
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
                Автоматизированные терминалы для продажи билетов на события
                любого типа, позволяющее полностью заменить кассира
              </Typography>
            </Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                gap: "50px",
                alignItems: "stretch",
              }}
            >
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                  }}
                >
                  <Feature
                    icon="/images/chasier-block/icon_1.svg"
                    text="Отсутствие физического контакта между кассиром и покупателем и удобная бесконтактная оплата"
                  />
                  <Feature
                    icon="/images/chasier-block/icon_2.svg"
                    text="Полностью автоматизированное решение с возможностью отправки электронных билетов и печатью бумажных"
                  />
                  <Feature
                    icon="/images/chasier-block/icon_3.svg"
                    text="Современный дизайн и рекламная поверхность на экране терминала в «Stand by» режиме"
                  />
                  <Feature
                    icon="/images/chasier-block/icon_4.svg"
                    text="Вариативность форм-факторов устройств для различных нужд"
                  />
                </Box>
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
