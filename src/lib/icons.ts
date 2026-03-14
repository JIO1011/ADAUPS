import type { LucideIcon } from 'lucide-react';
import {
  Building2,
  Banknote,
  AlertCircle,
  HeartHandshake,
  PiggyBank,
  Wallet,
  Shield,
  HeartPulse,
  MonitorSmartphone,
  BookOpen,
  Gift,
} from 'lucide-react';

export const serviceIconMap: Record<string, LucideIcon> = {
  Building2,
  Banknote,
  AlertCircle,
  HeartHandshake,
  PiggyBank,
  Wallet,
};

export const categoryIconMap: Record<string, LucideIcon> = {
  Seguros: Shield,
  Salud: HeartPulse,
  Tecnología: MonitorSmartphone,
  Papelería: BookOpen,
};

export const defaultServiceIcon = Building2;
export const defaultCategoryIcon = Gift;
