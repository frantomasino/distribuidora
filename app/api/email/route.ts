import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Función para poner solo la primera letra en mayúscula
function capitalizar(texto: string) {
  if (!texto) return "";
  return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
}

export async function POST(req: Request) {
  try {
    const { nombre, email, mensaje } = await req.json();

    // Capitalizamos el nombre
    const nombreFormateado = capitalizar(nombre);

    await resend.emails.send({
      from: "Contacto Web <onboarding@resend.dev>",
      to: "frantomasino@hotmail.com",
      subject: `Nueva consulta de ${nombreFormateado}`,
      html: `
        <h2>Nuevo mensaje desde la web</h2>
        <p><strong>Nombre:</strong> ${nombreFormateado}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ ok: false, error }, { status: 500 });
  }
}
