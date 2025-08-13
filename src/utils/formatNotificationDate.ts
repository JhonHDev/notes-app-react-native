export const formatNotificationDate = (fechaNotificacion: string): string => {
  // Fecha y hora actual
  const fechaActual = new Date();
  // Fecha y hora de la notificación
  const fechaNoti = new Date(fechaNotificacion);

  // Diferencia en milisegundos entre ahora y la notificación
  const diferenciaMilisegundos = fechaActual.getTime() - fechaNoti.getTime();

  // Convertimos la diferencia a segundos, minutos, horas, días, semanas, meses y años
  const segundos = Math.floor(diferenciaMilisegundos / 1000);
  const minutos = Math.floor(segundos / 60);
  const horas = Math.floor(minutos / 60);
  const dias = Math.floor(horas / 24);
  const semanas = Math.floor(dias / 7);
  const meses = Math.floor(dias / 30);
  const anios = Math.floor(dias / 365);

  // Retornamos el string adecuado según la diferencia de tiempo
  if (segundos < 60) return "Ahora mismo";
  if (minutos < 60) return `Hace ${minutos} minuto${minutos === 1 ? "" : "s"}`;
  if (horas < 24) return `Hace ${horas} hora${horas === 1 ? "" : "s"}`;
  if (dias < 7) return `Hace ${dias} día${dias === 1 ? "" : "s"}`;
  if (semanas < 5) return `Hace ${semanas} semana${semanas === 1 ? "" : "s"}`;
  // Si han pasado más de 4 semanas, la notificación ya no existe
  return "";
};
