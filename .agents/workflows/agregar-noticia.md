---
description: Cómo agregar una nueva noticia al portal ADAUPS
---

# Guía: Agregar una Nueva Noticia

## ¿Qué necesitas llenar?

Solo debes editar **un archivo**: `src/data/index.ts`

Agrega un nuevo objeto al **inicio** del array `newsData`. Ejemplo:

```typescript
// src/data/index.ts → dentro de newsData[]

{
  id: 'n4',                              // ← Único campo incremental
  title: 'Título de la Noticia',
  category: 'Convenios',                 // ← Categoría libre (ej: Salud, Seguros, Eventos)
  date: '2025-03-10',                    // ← Formato: YYYY-MM-DD
  summary: 'Resumen corto de 1-2 líneas que aparecerá en las tarjetas.',
  imageUrl: 'https://ejemplo.com/imagen.jpg',
  content: [
    'Primer párrafo del artículo completo.',
    'Segundo párrafo con más detalles.',
    'Tercer párrafo de cierre.'
  ]
},
```

> [!TIP]
> **Nota de Estilo:** El **primer párrafo** del array `content` tiene un tratamiento tipográfico especial (una gran *Letra Capital* o "Drop Cap" azul). Escribe una buena oración inicial para aprovechar este diseño premium.

## ¿Qué se automatiza?

| Comportamiento | Cómo funciona |
|---|---|
| **La noticia más reciente aparece como post destacado en Inicio** | Se ordena por `date` (más reciente primero). La primera noticia se muestra como post grande. |
| **Las demás bajan a la lista secundaria** | Las siguientes 2 noticias aparecen como tarjetas pequeñas en Inicio. |
| **En la página `/noticias` la más nueva va arriba** | La misma lógica de ordenamiento por fecha se aplica. |
| **El enlace "Leer más" funciona automáticamente** | Se genera la ruta `/noticias/{id}` sin tocar `App.tsx`. |
| **La sección "Otras noticias" del detalle** | Se calculan automáticamente las noticias relacionadas (las demás excepto la actual). |

## Campos explicados

| Campo | Descripción | Ejemplo |
|---|---|---|
| `id` | Identificador único. Incrementa el número. | `'n4'`, `'n5'`, `'n6'` |
| `title` | Título de la noticia | `'Asamblea General 2025'` |
| `category` | Etiqueta de categoría (texto libre) | `'Eventos'`, `'Salud'`, `'Seguros'` |
| `date` | Fecha en formato `YYYY-MM-DD`. **Este campo determina el orden.** | `'2025-03-10'` |
| `summary` | Texto corto (1-2 líneas) que aparece en las tarjetas | Descripción concisa |
| `imageUrl` | URL de la imagen de portada | URL pública de imagen |
| `content` | Array de strings. Cada string = un párrafo del artículo | `['Párrafo 1', 'Párrafo 2']` |

## Paso a paso

1. Abre `src/data/index.ts`
2. Busca `export const newsData`
3. Agrega el nuevo objeto **al final del array** (el orden en el archivo no importa, se ordena por `date`)
4. Asegúrate de que el `id` sea único (ej: `'n4'` si la última es `'n3'`)
5. Usa una fecha (`date`) más reciente que las existentes para que aparezca como destacada
6. Guarda el archivo → el portal se actualiza automáticamente

## Ejemplo completo: agregar una 4ta noticia

```typescript
// Agregar al final del array newsData en src/data/index.ts:

{
  id: 'n4',
  title: 'Asamblea General Ordinaria 2025',
  category: 'Institucional',
  date: '2025-03-15',
  summary: 'Convocatoria a la Asamblea General Ordinaria para todos los socios activos de ADAUPS.',
  imageUrl: 'https://www.adaups.org/wp-content/uploads/2025/03/asamblea.jpg',
  content: [
    'Se convoca a todos los socios activos de ADAUPS a la Asamblea General Ordinaria que se llevará a cabo el día sábado 15 de marzo de 2025.',
    'En esta asamblea se tratarán temas importantes como la rendición de cuentas del período 2024, la aprobación del presupuesto para el año en curso y la elección de nuevos representantes.',
    'La asistencia es obligatoria para todos los socios. En caso de no poder asistir, se deberá enviar una justificación formal a la secretaría de ADAUPS con al menos 48 horas de anticipación.'
  ]
}
```

**Resultado automático:**
- ✅ Esta noticia (fecha `2025-03-15`) se convierte en post destacado en Inicio
- ✅ "Actualización de Beneficios 2025" (`2025-01-15`) baja a tarjeta secundaria
- ✅ En `/noticias`, aparece primera en la lista
- ✅ El enlace `/noticias/n4` funciona directamente
