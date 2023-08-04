import React from 'react';

const WhatsappLink = () => {
  const phoneNumber = '+54 9 351 374-5250'; // Reemplaza esto con tu número de teléfono

  // Función para redirigir a WhatsApp cuando se hace clic en el enlace
  const redirectToWhatsapp = () => {
    window.location.href = `whatsapp://send?phone=${phoneNumber}`;
  };

  return (
    <a onClick={redirectToWhatsapp} href={`whatsapp://send?phone=${phoneNumber}`}>
      Contactar por WhatsApp
    </a>
  );
};

export default WhatsappLink;