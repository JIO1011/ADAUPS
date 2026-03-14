# ADAUPS - Portal Web V1

Portal web oficial de la **Asociación de Docentes, Administrativos y Servicios de la Universidad Politécnica Salesiana, Sede Quito (ADAUPS)**. Permite acceder a información sobre servicios financieros, beneficios, convenios, transparencia y recursos de interés para los socios.

## Características Principales

El proyecto ha sido refactorizado con una arquitectura limpia y moderna:
- **Componentes Reutilizables:** UI modular (botones, héroes, tarjetas) para mantener la interfaz consistente.
- **Lógica Extraída (Hooks):** Gestión fluida de animaciones (`useAnimatedCounter`), navegación al tope de página (`useScrollToTop`) y filtrado (`useFilteredData`).
- **Tipado Fuerte:** Definición estricta de interfaces en TypeScript para mantener la seguridad y coherencia en los datos del portal.
- **Animaciones Centralizadas:** Configuraciones compartidas de `framer-motion` para transiciones consistentes (fade, slide up).
- **Código Limpio:** Configuración estandarizada con `ESLint` y `Prettier`.

## Stack Tecnológico

- **Framework:** [React 18](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/) (`strict: true`)
- **Estilos:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Iconos:** [Lucide React](https://lucide.dev/)
- **Animaciones:** [Framer Motion](https://motion.dev/)
- **Enrutamiento:** [React Router](https://reactrouter.com/)

---

## Ejecutar Localmente

**Requisitos previos:** `Node.js` (v18 o superior recomendado)

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Variables de Entorno (Opcional):**
   Si se integra alguna funcionalidad de IA en el futuro, configurar `GEMINI_API_KEY` creando un archivo `.env` o `.env.local` usando `.env.example` como plantilla.

3. **Ejecutar en desarrollo:**
   ```bash
   npm run dev
   ```
   Abre [http://localhost:3000/ADAUPS-V1/](http://localhost:3000/ADAUPS-V1/) en tu navegador.

4. **Compilar para producción:**
   ```bash
   npm run build
   ```
   Se generará la carpeta `dist/` con la versión optimizada.
