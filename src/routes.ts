export interface RouteMeta {
  path: string;
  label: string;
  title: string;
  description: string;
}

export const routes = {
  home: {
    path: '/',
    label: 'Inicio',
    title: 'Refacciones Toluca | Transmisiones Automáticas y Direcciones Hidráulicas',
    description: 'Taller y refaccionaria en Toluca especializada en transmisiones automáticas y direcciones hidráulicas. Diagnóstico, reparación y refacciones con garantía.',
  },
  about: {
    path: '/nosotros',
    label: 'Nosotros',
    title: 'Nosotros | Refacciones Toluca',
    description: 'Conoce a nuestro equipo de técnicos especialistas en transmisiones y direcciones hidráulicas en Toluca. Experiencia, calidad OEM y garantía por escrito.',
  },
  services: {
    path: '/servicios',
    label: 'Servicios',
    title: 'Servicios de Taller | Refacciones Toluca',
    description: 'Diagnóstico computarizado, reconstrucción de transmisiones automáticas y reparación de direcciones hidráulicas en Toluca.',
  },
  catalog: {
    path: '/catalogo',
    label: 'Catálogo',
    title: 'Catálogo de Refacciones | Refacciones Toluca',
    description: 'Catálogo de refacciones para transmisión, dirección, frenos, suspensión, motor y más. Filtra por marca, año y tipo de pieza y cotiza por WhatsApp.',
  },
  reviews: {
    path: '/resenas',
    label: 'Reseñas',
    title: 'Reseñas de Clientes | Refacciones Toluca',
    description: 'Lo que dicen nuestros clientes sobre nuestro servicio de transmisiones y direcciones hidráulicas en Toluca.',
  },
  contact: {
    path: '/ubicacion',
    label: 'Ubicación',
    title: 'Ubicación y Horarios | Refacciones Toluca',
    description: 'Visítanos en Toluca, Estado de México. Consulta horarios, teléfono y cómo llegar a nuestro taller.',
  },
} as const satisfies Record<string, RouteMeta>;

export type RouteKey = keyof typeof routes;

/** Rutas del menú principal, en orden (Ubicación se muestra como botón destacado). */
export const navRoutes: RouteKey[] = ['home', 'about', 'services', 'catalog', 'reviews'];
