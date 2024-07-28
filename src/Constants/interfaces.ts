import { CardProps } from "@mui/material";
import { SxProps, Theme } from "@mui/system";
import { ButtonProps } from "@mui/material/Button";
import { TypographyProps } from '@mui/material/Typography';
import React from "react";

export interface CurriculumCardProps {
  title: string;
  description: string;
  image: string;
  buttonText: React.ReactNode;
  onButtonClick: () => void;
}

export interface CustomCardProps extends CardProps {
  boxShadow?: string;
  borderRadius?: number | string;
  sx?: SxProps<Theme>;
}

export interface ServerItem {
  id: number;
  title: string;
  description: string;
  image: { data: number[] };
}

export interface CurriculumItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface CustomButtonProps extends ButtonProps {
  children: React.ReactNode;
}

export interface ImageProps {
  src: string;
  alt: string;
  width?: string | number;
  height?: string | number;
  style?: React.CSSProperties;
  className?: string;
  onClick?: () => void;
}

export interface TextProps extends TypographyProps {
    children: React.ReactNode;
}