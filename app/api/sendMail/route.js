import nodemailer from 'nodemailer';

export async function POST(request) {
    console.log("this block entered")
    try {
        const { name, message, email } = await request.json();

        const transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: process.env.user_Email,
                pass: process.env.user_Password,
            },
        });

        await transporter.sendMail({
            from: process.env.user_Email,
            to: process.env.user_Email,
            subject: `mail from crud-nextJs contact from ${name}`,
            text: `message:${message + ", Mail id: " + email}`,
        });
        return new Response(JSON.stringify({ message: "Email sent successfully!" }), {
            status: 200,
        });

    } catch {
        console.error("Error sending email:", error);
        return new Response(JSON.stringify({ message: "Failed to send email." }), {
            status: 500,
        });


    }


}




