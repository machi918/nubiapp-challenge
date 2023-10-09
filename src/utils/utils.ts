export async function sleep(ms: number) {
  return new Promise(() => setTimeout(() => undefined, ms));
}

export const SERVICES_DUMMY_EXTRA_DATA = [
  {
    title: 'Mandar plata',
    emoji: '💸',
    color: '#0000FF',
  },
  {
    title: 'Pedir Plata',
    emoji: '🤚',
    color: '#00FF00',
  },
  {
    title: 'Administrar mi tarjeta',
    emoji: '💳',
    color: '#FFFF00',
  },
  {
    title: 'Recargar un celular',
    emoji: '📱',
    color: '#00FFFF',
  },
  {
    title: 'Pagar tus servicios',
    emoji: '💧',
    color: '#FFA500',
  },
  {
    title: 'Cargar la SUBE',
    emoji: '🚍',
    color: '#800080',
  },
];
