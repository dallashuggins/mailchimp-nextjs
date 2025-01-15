This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Mailchimp Integration

The EmbeddedForm and CircularLoader components have been added to this application to consume the api/mc/subscribeUser endpoint. This endpoint creates a subscribed list member in Mailchimp.

In order to try out the form, add environment variables for your account to a .env file. You can copy the .env-example file for the specific variable names, or see the descriptions below.

You’ll also need to set up MAILCHIMP_API_KEY, MAILCHIMP_API_SERVER, and MAILCHIMP_AUDIENCE_ID in your Next config file and add the values to your .env file.

### Environment Variables

1. `MAILCHIMP_API_KEY`: Mailchimp API key

[This resource](https://eepurl.com/dyijVH) shows how to find an API key in your Mailchimp account.

2. `MAILCHIMP_API_SERVER`: Mailchimp sever

To find the server value for your account, login to Mailchimp. In the browser URL the server value is listed first. For example, if the URL was https://us19.admin.mailchimp.com/ the us19 part is the server prefix.

3. `MAILCHIMP_AUDIENCE_ID`: Mailchimp audience ID

To find the Mailchimp audience ID, go to the Audience section in your account and then go to All contacts and then to Settings. In the settings there is an Audience ID field.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
