import type { Destination, Reservation } from '../types/travel'

export const destinations: Destination[] = [
  {
    id: 'islandia-auroras',
    name: 'Auroras de Islandia',
    country: 'Islandia',
    summary: 'Ruta de 7 dias entre glaciares, aguas termales y cielos boreales.',
    description:
      'Un viaje para combinar naturaleza extrema con alojamientos tranquilos y excursiones guiadas por la costa sur.',
    imageUrl:
      'https://images.unsplash.com/photo-1504829857797-ddff29c27927?auto=format&fit=crop&w=1000&q=80',
    priceFrom: 1420,
    durationDays: 7,
    tags: ['naturaleza', 'auroras', 'aventura'],
    difficulty: 'moderado',
    rating: 4.8,
  },
  {
    id: 'japon-cultural',
    name: 'Japon entre templos',
    country: 'Japon',
    summary: 'Tokio, Kioto y Nara con experiencias culturales y tren incluido.',
    description:
      'Una propuesta equilibrada para descubrir barrios modernos, templos historicos, gastronomia y ceremonias tradicionales.',
    imageUrl:
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1000&q=80',
    priceFrom: 2180,
    durationDays: 12,
    tags: ['cultura', 'gastronomia', 'ciudades'],
    difficulty: 'relajado',
    rating: 4.9,
  },
  {
    id: 'marruecos-atlas',
    name: 'Atlas y desierto',
    country: 'Marruecos',
    summary: 'Marrakech, pueblos bereberes y noche en campamento del desierto.',
    description:
      'Itinerario de contrastes para viajeros que quieren combinar medinas, montana y una experiencia de desierto segura.',
    imageUrl:
      'https://images.unsplash.com/photo-1539020140153-e8c237112e53?auto=format&fit=crop&w=1000&q=80',
    priceFrom: 880,
    durationDays: 6,
    tags: ['desierto', 'cultura', 'grupo pequeno'],
    difficulty: 'moderado',
    rating: 4.7,
  },
  {
    id: 'costa-rica-verde',
    name: 'Costa Rica verde',
    country: 'Costa Rica',
    summary: 'Selva, volcanes y playas con alojamientos sostenibles.',
    description:
      'Un viaje para observar fauna, caminar por parques nacionales y terminar con dias de playa en el Caribe.',
    imageUrl:
      'https://images.unsplash.com/photo-1518182170546-07661fd94144?auto=format&fit=crop&w=1000&q=80',
    priceFrom: 1760,
    durationDays: 10,
    tags: ['eco', 'playa', 'fauna'],
    difficulty: 'relajado',
    rating: 4.6,
  },
  {
    id: 'peru-andino',
    name: 'Peru andino',
    country: 'Peru',
    summary: 'Cusco, Valle Sagrado y Machu Picchu con aclimatacion progresiva.',
    description:
      'Disenado para vivir el patrimonio andino con ritmo realista, guias locales y margen para descansar.',
    imageUrl:
      'https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1000&q=80',
    priceFrom: 1590,
    durationDays: 9,
    tags: ['historia', 'montana', 'patrimonio'],
    difficulty: 'intenso',
    rating: 4.8,
  },
]

export const reservations: Reservation[] = [
  {
    id: 'res-demo-1',
    destinationId: 'japon-cultural',
    customerName: 'Cliente demo',
    email: 'demo@corvusviajes.com',
    travelers: 2,
    startDate: '2026-07-15',
    notes: 'Preferencia por hoteles centricos.',
    status: 'pending',
    createdAt: new Date().toISOString(),
  },
]
