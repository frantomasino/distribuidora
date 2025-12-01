import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
     const { nombre, email, mensaje } = await req.json();

     await resend.emails.send({
        from: "Contacto Web <onboarding@resend.dev>",   // remitente permitido
        to: "frantomasino@hotmail.com",                // <-- acá recibís vos
        subject: `Nueva consulta de ${nombre}`,
        html: `
          <h2>Nuevo mensaje desde la web</h2>
          <p><strong>Nombre:</strong> ${nombre}</p>
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
