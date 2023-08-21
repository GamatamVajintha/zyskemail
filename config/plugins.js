module.exports = ({ env }) => ({
    // ...
    email: {
      config: {
        provider: 'nodemailer',
        providerOptions: {
            host: 'sandbox.smtp.mailtrap.io',
            port: 2525,
            auth: {
              user: '80c58227315c70',
              pass: 'e8057f9deb0292'
          },
          // ... any custom nodemailer options
        },
        settings: {
          defaultFrom: 'hello@example.com',
          defaultReplyTo: 'hello@example.com',
        },
      },
    },
    // ...
  });

//   var transport = nodemailer.createTransport({
//     //   host: "sandbox.smtp.mailtrap.io",
//     //   port: 2525,
//     //   auth: {
//     //     user: "80c58227315c70",
//     //     pass: "e8057f9deb0292"
//     //   }