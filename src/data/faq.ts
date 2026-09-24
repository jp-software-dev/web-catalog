// Preguntas frecuentes (contenido de ejemplo).

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    question: '¿Cuánto tarda la reparación de una transmisión automática?',
    answer: 'Un diagnóstico computarizado se entrega el mismo día. Una reconstrucción completa suele tomar de 3 a 5 días hábiles, según el modelo y la disponibilidad de piezas.',
  },
  {
    question: '¿Las reparaciones y refacciones tienen garantía?',
    answer: 'Sí. Todas nuestras reparaciones y refacciones incluyen garantía por escrito. El plazo depende del tipo de servicio y te lo confirmamos en la cotización.',
  },
  {
    question: '¿Cuánto cuesta el diagnóstico?',
    answer: 'El diagnóstico tiene un costo accesible y se descuenta del total si decides realizar la reparación con nosotros.',
  },
  {
    question: '¿Hacen envíos de refacciones?',
    answer: 'Sí, enviamos a todo el país por paquetería. Cotiza la pieza por WhatsApp y te confirmamos disponibilidad, costo de envío y tiempo de entrega.',
  },
  {
    question: '¿Cómo sé si una pieza es compatible con mi vehículo?',
    answer: 'Envíanos por WhatsApp la marca, modelo, año y, si es posible, el número de serie (VIN). Verificamos la compatibilidad antes de confirmar tu pedido.',
  },
  {
    question: '¿Qué formas de pago aceptan?',
    answer: 'Aceptamos efectivo, transferencia bancaria y tarjetas de débito y crédito.',
  },
];
