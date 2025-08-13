// Recibe un string con una fecha y la retorna en formato 'day de mounth de year'
export const formatDate = (date: string): string => {
  // Array con los nombres de los meses en español
  const meses = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];
  // Crea un objeto Date a partir del string recibido
  const d = new Date(date);
  // Si la fecha no es válida, retorna un string vacío
  if (isNaN(d.getTime())) return "";
  // Obtiene el día del mes
  const dia = d.getDate();
  // Obtiene el nombre del mes en español
  const mes = meses[d.getMonth()];
  // Obtiene el año
  const anio = d.getFullYear();
  // Retorna la fecha formateada como '21 de agosto de 2025'
  return `${dia} de ${mes} de ${anio}`;
};
