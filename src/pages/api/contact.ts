import type { APIRoute } from 'astro';

export const post: APIRoute = async ({ request }) => {
  try {
    const data = await request.formData();
    const asunto = data.get('asunto');
    const mensaje = data.get('mensaje');

    // Validación básica
    if (!asunto || !mensaje) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "El asunto y el mensaje son obligatorios"
        }),
        { status: 400 }
      );
    }

    // Aquí podrías agregar código para enviar un email
    // Usando servicios como nodemailer, sendgrid, etc.
    // Por ahora, solo registramos los datos
    console.log('Formulario recibido:', { asunto, mensaje });

    // Simular envío exitoso
    return new Response(
      JSON.stringify({
        success: true,
        message: "Mensaje enviado correctamente"
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error en el formulario de contacto:', error);
    return new Response(
      JSON.stringify({
        success: false, 
        message: "Error al procesar el formulario"
      }),
      { status: 500 }
    );
  }
} 