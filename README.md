# Jamstack Blog featuring: Next.js, Tailwind CSS, Next-Auth, MDX, Prisma & Mailchimp Newsletter

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fstevenrugg%2Fworkhorse)

## Zencoder.online

- **Framework**: [Next.js](https://nextjs.org/)
- **Database**: [PlanetScale](https://planetscale.com)
- **Authentication**: [NextAuth.js](https://next-auth.js.org)
- **Deployment**: [Vercel](https://vercel.com)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)

## Running Locally
### Once you have forked this blog

Open a terminal in the folder you cloned this blog into and run the following command:

```bash
npm install
```

if that does not work you may have to use the `--legacy-peer-deps` flag after `npm install`. Keep in mind that using this flag will open yourself up to possible security vulnerabilities. DO not use this flag in production.

Once you have dependencies installed you can start a development server by running

```bash
npm run dev
```

or a production server by running

```bash
npm run start
```

Once everything looks good and is working how you want it to, you can deploy to vercel, netlify, or run the command

```bash
npm run build
```

which will create a `dist` folder you can then upload to any traditional non-cloud hosting service like ionos, hostgator or hostinger, or go-daddy.

### Welcome to my personal corner of the WWW

Feel free to fork this repository and make your own changes. I just ask that you delete my personal information and change the following files in the `data` folder with YOUR information:

- sitemetadata.js
- ExperienceData.ts
- ProjectData.ts
- EducationData.ts

Thats all and happy coding
