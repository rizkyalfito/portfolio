"use server";

import { Resend } from 'resend';

export async function sendEmail(formData) {
  try {
    // Create a new instance of Resend with your API key
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    // Extract the form data
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    const attachment = formData.get('attachment');
    
    // Validate the form data
    if (!name || !email || !subject || !message) {
      return {
        success: false,
        message: 'Please fill in all required fields.',
      };
    }
    
    // Prepare attachment if it exists
    let attachments: { filename: any; content: string; }[] = [];
    if (attachment && attachment.size > 0) {
      // Convert file to base64
      const buffer = await attachment.arrayBuffer();
      const base64 = Buffer.from(buffer).toString('base64');
      
      attachments = [
        {
          filename: attachment.name,
          content: base64,
        },
      ];
    }
    
    // Send the email
    const { data, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // Use your verified domain
      to: 'ikyalf21@gmail.com', // Your email address to receive messages
      reply_to: email,
      subject: `Contact Form: ${subject}`,
      html: `
        <h2>New message from your website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      attachments: attachments,
    });
    
    if (error) {
      console.error('Error sending email:', error);
      return {
        success: false,
        message: 'Failed to send email. Please try again later.',
      };
    }
    
    return {
      success: true,
      message: 'Email sent successfully!',
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      success: false,
      message: 'An unexpected error occurred. Please try again later.',
    };
  }
}