## SpecStory

## Next.js Build Errors on EC2 Ubuntu (1/14/2025, 10:53:39 PM)

_**User**_

ubuntu@ip-172-31-95-31:~/Portfolio_Hafiz$ npm run build

> portfolio-apih@0.1.0 build
> next build

Attention: Next.js now collects completely anonymous telemetry regarding usage.
This information is used to shape Next.js' roadmap and prioritize features.
You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
https://nextjs.org/telemetry

  ▲ Next.js 14.2.16

   Creating an optimized production build ...
 ✓ Compiled successfully

Failed to compile.

./app/archive/page.tsx
3:10  Error: 'motion' is defined but never used.  @typescript-eslint/no-unused-vars

./app/page.tsx
6:10  Error: 'Card' is defined but never used.  @typescript-eslint/no-unused-vars
46:14  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.  react/no-unescaped-entities
106:28  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.  react/no-unescaped-entities
106:138  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.  react/no-unescaped-entities
106:239  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.  react/no-unescaped-entities
106:468  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.  react/no-unescaped-entities
106:523  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.  react/no-unescaped-entities
106:612  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.  react/no-unescaped-entities
106:625  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.  react/no-unescaped-entities
106:699  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.  react/no-unescaped-entities
235:23  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element
332:16  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.  react/no-unescaped-entities
374:15  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` to automatically optimize images. This may incur additional usage or cost from your provider. See: https://nextjs.org/docs/messages/no-img-element  @next/next/no-img-element

info  - Need to disable some ESLint rules? Learn more here: https://nextjs.org/docs/basic-features/eslint#disabling-rules



i try to run build in ec2 ubuntu but fail

---

_**Assistant**_

I'll help you fix these build errors. There are several issues to address:

1. First, let's fix the unused imports and variables:

---

_****_

```diff
  import { Github, Linkedin, Instagram, Mail, ExternalLink, X } from 'lucide-react'
  import { Button } from "@/components/ui/button"
- import { Card } from "@/components/ui/card"
  import { Badge } from "@/components/ui/badge"
  import { CursorSpotlight } from '@/components/cursor-spotlight'
              <h2 className="text-5xl font-bold text-red-500 tracking-tight mb-4">Shahrul Hafiz</h2>
              <p className="text-[#a1a1aa] text-lg font-light mb-16 leading-relaxed">
-             I'm a developer with a foot in both data science and web development. I enjoy the challenge of leveraging data for impactful solutions and creating user-friendly interfaces.
+             I&apos;m a developer with a foot in both data science and web development. I enjoy the challenge of leveraging data for impactful solutions and creating user-friendly interfaces.
              </p>
              <nav className="space-y-5">
              className="text-base text-[#a1a1aa] max-w-2xl leading-relaxed"
            >
-             Hey there! 👋 I'm a data science & web dev enthusiast currently studying at UPNM. I love building stuff that works well! 🚀 I'm all about data, using tools like Scikit-learn, TensorFlow, and PyTorch to create cool models. 🧠 I've built things like predictive tools for medical inventory, traffic flow predictors, F1 race dashboards 🏎️, and lots of web projects! 💻 My go-to languages are Python, R, Java, plus web basics like HTML, CSS, and JavaScript. I'm always contributing to open-source projects 🧑‍💻. I've earned some cool awards🏅, a scholarship 💰, coding badges 🏆, and even made the Dean's List! 🤓 I'm constantly learning and looking for exciting projects to jump into! Let's build something awesome! ✨
+             Hey there! 👋 I&apos;m a data science & web dev enthusiast currently studying at UPNM. I love building stuff that works well! 🚀 I&apos;m all about data, using tools like Scikit-learn, TensorFlow, and PyTorch to create cool models. 🧠 I&apos;ve built things like predictive tools for medical inventory, traffic flow predictors, F1 race dashboards 🏎️, and lots of web projects! 💻 My go-to languages are Python, R, Java, plus web basics like HTML, CSS, and JavaScript. I&apos;m always contributing to open-source projects 🧑‍💻. I&apos;ve earned some cool awards🏅, a scholarship 💰, coding badges 🏆, and even made the Dean&apos;s List! 🤓 I&apos;m constantly learning and looking for exciting projects to jump into! Let&apos;s build something awesome! ✨
            </motion.p>
          </motion.section>
            >
              <p className="text-[#a1a1aa] text-lg mb-8 leading-relaxed">
-               I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!
+               I&apos;m always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!
              </p>
              <a 
```

---

_****_



Now let's fix the unused motion import in the archive page:

---

_****_

Read file: app/archive/page.tsx

---

_****_

```diff
  'use client'
  
- import { motion } from 'framer-motion'
  import Link from 'next/link'
  import { ArrowLeft } from 'lucide-react'
```

---

_****_



For the remaining warnings about using `<img>` instead of `next/image`, let's fix those:

---

_****_

```diff
  import { cn } from "@/lib/utils"
  import { useState } from 'react'
+ import Image from 'next/image'
  
  const fadeIn = {
                    {project.image && (
                      <div className="relative w-48 h-32 flex-shrink-0 group/image cursor-pointer">
-                       <img
+                       <Image
                          src={project.image}
                          alt={project.title}
                          onClick={() => setSelectedImage(project.image)}
                          className="w-full h-full object-cover object-center rounded-md transition-transform duration-300 group-hover/image:scale-105"
+                         width={192}
+                         height={128}
                        />
                      </div>
                  <X className="h-8 w-8" />
                </button>
-               <img
+               <Image
                  src={selectedImage}
                  alt="Full size"
                  className="w-full h-auto rounded-lg shadow-2xl"
+                 width={1024}
+                 height={768}
                />
              </motion.div>
```

---

_****_



I've made the following fixes:

1. Removed the unused `Card` import from `app/page.tsx`
2. Fixed all apostrophe escaping issues by replacing `'` with `&apos;`
3. Removed the unused `motion` import from `app/archive/page.tsx`
4. Replaced `<img>` tags with Next.js `<Image>` components for better performance

Now try running the build command again:

---

_****_

```bash
npm run build
```

```
PS C:\Project\portfolio-apih> npm run build

> portfolio-apih@0.1.0 build
> next build

  ▲ Next.js 14.2.16

   Creating an optimized production build ...
 ✓ Compiled successfully
 ✓ Linting and checking validity of types
 ✓ Collecting page data
 ✓ Generating static pages (10/10)
 ✓ Collecting build traces
 ✓ Finalizing page optimization

Route (app)                              Size     First Load JS
┌ ○ /                                    55.2 kB         142 kB
├ ○ /_not-found                          873 B            88 kB
├ ○ /icon.png                            0 B                0 B
├ ○ /icon.svg                            0 B                0 B
└ ○ /manifest.json                       0 B                0 B
+ First Load JS shared by all            87.1 kB
  ├ chunks/117-4b311a6519ddf5c4.js       31.6 kB
  ├ chunks/fd9d1056-91aa9495991b9c80.js  53.6 kB
  └ other shared chunks (total)          1.89 kB


○  (Static)  prerendered as static content

PS C:\Project\portfolio-apih>
```

---

_****_



Great! The build has completed successfully with no errors. All the ESLint issues and warnings have been fixed. The build output shows that your pages have been successfully compiled and optimized. You should now be able to deploy your portfolio website without any issues.

The build statistics show:
- Your main page (`/`) is 142 kB
- The 404 page (`/_not-found`) is 88 kB
- Static assets (icon.png, icon.svg, manifest.json) are properly included
- All pages are statically generated for optimal performance

Is there anything else you'd like me to help you with?

---



---

