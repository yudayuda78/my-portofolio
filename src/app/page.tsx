'use client'

import Image from 'next/image'

export default function Home() {
  const techStacks = [
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-plain.svg' },
    { name: 'Nuxt.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg' },
    { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
    { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg' },
    { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg' },
    { name: 'Prisma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg' },
    { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-plain.svg' },
  ]

  const stackIcons = {
    nextjs: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    nuxt: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg',
    laravel: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg',
    express: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    tailwind: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    postgresql: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    mongodb: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg',
    vue: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    nodejs: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg',
    python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    prisma: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg',
    mysql: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    typescript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg',
    javascript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg',
    react: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
  }

  return (
    <main className="bg-gray-900 text-white font-sans min-h-screen flex flex-col items-center justify-center px-4 py-10 space-y-12">
      
      {/* Profile Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-4xl">
        <Image 
          src="/profil.webp" 
          alt="Profile Photo of Arief Yuda"
          width={160}
          height={160}
          className="rounded-full border-4 border-white shadow-lg"
        />
        <div className="w-full text-center md:text-left">
          <h1 className="text-3xl font-bold mb-2">Arief Yuda</h1>
          <p className="text-gray-400 text-lg mb-4">Fullstack Developer</p>
          <p className="text-gray-300 max-w-md mx-auto md:mx-0">
            Fullstack Developer with experience in building modern web applications from frontend to backend using Next.js, Laravel, and REST APIs. Passionate about intuitive interface design and system performance.
          </p>
          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start gap-3 mt-4">
            <a href="https://github.com/yudayuda78" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/github.svg" alt="GitHub" width={20} height={20} className="invert opacity-80 hover:opacity-100 transition" />
            </a>
            <a href="https://www.linkedin.com/in/arief-yuda-b571031b6/" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linkedin.svg" alt="LinkedIn" width={20} height={20} className="invert opacity-80 hover:opacity-100 transition" />
            </a>
            <a href="https://x.com/yudayuda__" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/x.svg" alt="X" width={20} height={20} className="invert opacity-80 hover:opacity-100 transition" />
            </a>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="w-full max-w-4xl bg-gray-800 p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
      {[
  { name: "CatCode", desc: "A programming learning platform", image: "projects/catcode.webp", url: "https://github.com/yudayuda78/catcode-app-nextjs", stacks: [stackIcons.nextjs, stackIcons.react, stackIcons.postgresql, stackIcons.tailwind, stackIcons.prisma, stackIcons.typescript] },
  { name: "MentorKita", desc: "Online mentoring and tryout platform for students & mentors", image: "projects/mentorkita.webp", url: "https://github.com/yudayuda78/mentorKita-app-nuxt", stacks: [stackIcons.nuxt, stackIcons.vue, stackIcons.prisma, stackIcons.postgresql, stackIcons.tailwind ] },
  { name: "Belajar Era Digital", desc: "Webinar platform for teachers", image: "projects/bed.webp", url: "https://belajareradigital.com/admin", stacks: [stackIcons.laravel, stackIcons.mysql, stackIcons.tailwind, stackIcons.javascript] },
  { name: "Ticykit", desc: "Teaching resource and worksheet library", image: "projects/ticykit.webp", url: "https://ticykit.com/dashboard", stacks: [stackIcons.laravel, stackIcons.mysql, stackIcons.tailwind, stackIcons.javascript] },
  { name: "BedLink", desc: "Landing page platform like Linktree", image: "projects/bedlink.webp", url: "https://bedlink.id/", stacks: [stackIcons.laravel, stackIcons.mysql, stackIcons.tailwind, stackIcons.javascript] },
  { name: "MEVN Ecommerce", desc: "E-commerce CMS built with MEVN stack integrated with Xendit", url: "https://github.com/yudayuda78/MEVN-ecommerce", stacks: [stackIcons.mongodb, stackIcons.express, stackIcons.vue, stackIcons.nodejs] },
  { name: "Python Currency", desc: "Currency conversion app using Python", url: "https://github.com/yudayuda78/currencyApp", stacks: [stackIcons.python] },
  { name: "BED APP (Prototype)", desc: "Mobile version of Belajar Era Digital", url: "https://catcode.vercel.app", stacks: [stackIcons.react, stackIcons.mysql] },
].map((project, i) => (
  <div
    key={i}
    className="bg-gray-900 p-6 rounded-lg border border-gray-700 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
  >
    {/* Tampilkan gambar jika ada */}
    {project.image && (
      <div className="mb-4 w-full aspect-video overflow-hidden rounded">
        <Image
          src={`/${project.image}`}
          alt={project.name}
          width={800}
          height={450}
          className="w-full h-auto object-cover rounded"
        />
      </div>
    )}

    <p className="text-xl font-semibold mb-1">{project.name}</p>
    <p className="text-gray-400 mb-3">{project.desc}</p>

    <div className="flex flex-wrap gap-2 mb-3">
      {project.stacks.map((icon, idx) => (
        <Image
          key={idx}
          src={icon}
          alt="stack icon"
          width={24}
          height={24}
          className={`opacity-80 hover:opacity-100 transition duration-300 ${icon.includes('express') ? 'invert' : ''}`}
        />
      ))}
    </div>

    {project.url && (
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-2 px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 rounded text-white transition"
      >
        Visit
      </a>
    )}
  </div>
))}

        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="w-full max-w-4xl bg-gray-800 p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Tech Stack</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center">
          {techStacks.map((stack, i) => (
            <div
              key={i}
              className="flex flex-col items-center transform transition-transform duration-300 hover:scale-110"
            >
              <img
                src={stack.icon}
                alt={stack.name}
                width={40}
                height={40}
                className="mb-2 filter invert brightness-0 opacity-80 hover:opacity-100 transition duration-300"
              />
              <p className="text-sm text-gray-300 text-center">{stack.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full max-w-4xl text-center text-gray-400 text-sm mt-10 space-y-4">
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/yudayuda78"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/arief-yuda-b571031b6/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/yudayuda__"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            Twitter
          </a>
        </div>
        <p className="text-xs text-gray-500">Built with Next.js, Tailwind CSS, and Vercel</p>
        <p className="text-xs text-gray-600">© 2025 Arief Yuda. All rights reserved.</p>
      </footer>
    </main>
  )
}
