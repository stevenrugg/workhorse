# This blog is templated from the [Next.js, TailwindCSS & MDX blog starter](https://github.com/timlrx/tailwind-nextjs-starter-blog)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/stevenrugg/workhorse)

## This blog features

- **Prisma ORM**- The ORM layer to communicate with the database. [prisma](https://prisma.io)

- **Planetscale Database** - The database to persist guestbook comments and user information .[planetscale](https://planetscale.com)

- **MDX** & **GRAYMATTER** - Format blog posts using `markdown` and `yaml frontmatter` and place in folder. The posts get rendered using the specified layout in the `layouts` folder.

- **Next-Auth** - Next-Auth for authentication [NextAuth](https://next-auth.js-org)

- **Tailwind CSS** - The latest version of Tailwind CSS, a utilities first CSS library
- **React Typical** - A npm package for a cool typing animation.

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
