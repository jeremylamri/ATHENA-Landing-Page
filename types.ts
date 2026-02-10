import { ReactNode } from 'react';

export interface BaseProps {
  className?: string;
  children?: ReactNode;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: ReactNode;
}

export interface PricingTier {
  title: string;
  price: string;
  features: string[];
  cta: string;
}

export interface Publication {
  title: string;
  journal: string;
  year: string;
  abstract: string;
}