export function useABTest() {
  const variants = [
    "🚀 Empieza ahora",
    "✨ Activa tu talento",
    "🔥 Lanza tu producto hoy"
  ];

  return variants[Math.floor(Math.random() * variants.length)];
}
