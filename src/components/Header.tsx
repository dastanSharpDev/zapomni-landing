"use client";

import Link from "next/link";
import Image from "next/image";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";
import AppContainer from "@/components/AppContainer";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const navItems = [
    { label: "Администрирование мероприятий", href: "#general" },
    { label: "Электронные продажи", href: "#sales" },
    { label: "Дополнительные услуги", href: "#advanced" },
    { label: "Отчеты и статистика", href: "#features" },
    { label: "Кастомизированный сервис продаж", href: "#five-block" },
    { label: "Автоматизация кассового блока", href: "#pos-automation" },
    { label: "Контакты", href: "#contacts" },
  ];
  return (
    <AppBar
      position="sticky"
      color="default"
      elevation={0}
      sx={{ borderBottom: "1px solid #121212", mx: 0 }}
    >
      <AppContainer>
        <Toolbar
          disableGutters
          sx={{
            justifyContent: "space-between",
            minHeight: 0,
            py: "20px",
            gap: 4,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Link href="/" aria-label="Home" style={{ display: "inline-flex" }}>
              <Image
                src="/static/logo-header.svg"
                alt="ZAPOMNI logo"
                width={69}
                height={29}
              />
            </Link>
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 4,
              flexWrap: "nowrap",
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.href}
                href={item.href}
                component={Link}
                color="inherit"
                sx={{
                  textTransform: "none",
                  fontWeight: 400,
                  fontSize: 16,
                  lineHeight: "normal",
                  letterSpacing: 0,
                  px: 0,
                  minWidth: 0,
                  maxWidth: 220,
                  whiteSpace: "normal",
                  textAlign: "center",
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton aria-label="menu" onClick={() => setOpen(true)}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppContainer>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{ width: 300 }}
          role="presentation"
          onClick={() => setOpen(false)}
        >
          <List>
            {navItems.map((item) => (
              <ListItemButton key={item.href} component={Link} href={item.href}>
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    sx: {
                      whiteSpace: "normal",
                      fontWeight: 400,
                      fontSize: 16,
                      lineHeight: "normal",
                      letterSpacing: 0,
                      textAlign: "center",
                    },
                  }}
                />
              </ListItemButton>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </AppBar>
  );
}
