import { Home, Users, Building2, Gift, Phone } from 'lucide-react';
import type { NavItem } from '../types/types';

export const navItems: NavItem[] = [
  { name: 'Inicio', path: '/', icon: Home },
  {
    name: 'Sobre ADAUPS',
    path: '/sobre-adaups',
    icon: Users,
    children: [
      { name: 'Nuestra Asociación', path: '/sobre-adaups' },
      { name: 'Transparencia', path: '/transparencia' },
    ],
  },
  {
    name: 'Servicios',
    path: '/servicios',
    icon: Building2,
  },
  {
    name: 'Beneficios',
    path: '/beneficios',
    icon: Gift,
  },
  { name: 'Contacto', path: '/contacto', icon: Phone },
];
