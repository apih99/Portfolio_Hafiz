# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js and Tailwind CSS, featuring a clean design with interactive elements and smooth animations.

![Portfolio Preview](/public/preview.png)

## 🌟 Features

- **Responsive Design**: Seamlessly adapts to all screen sizes
- **Interactive UI Elements**:
  - Dynamic cursor spotlight effect
  - Smooth scroll navigation
  - Image modal with zoom effect
  - Hover animations
- **Section-Based Layout**:
  - About: Personal introduction with emoji-rich description
  - Experience: Timeline-based work history
  - Projects: Featured projects with image previews
  - Contact: Easy-to-reach section with social links
- **Project Archive**: Dedicated page for viewing all projects
- **Performance Optimized**: Built with Next.js for optimal loading speeds
- **Animations**: Powered by Framer Motion for smooth transitions

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide Icons
- **UI Components**: Custom components with shadcn/ui
- **Typography**: Custom font optimization
- **Deployment**: Vercel

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/apih99/Portfolio_Hafiz.git
   cd Portfolio_Hafiz
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000) in your browser**

## 📁 Project Structure

```
├── app/
│   ├── page.tsx          # Main portfolio page
│   ├── archive/          # Project archive page
│   └── layout.tsx        # Root layout
├── components/           # Reusable UI components
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── public/              # Static assets
└── styles/             # Global styles
```

## 🎨 Customization

1. **Personal Information**: Edit the content in `app/page.tsx`
2. **Projects**: Update the projects array in both main page and archive
3. **Styling**: Modify the Tailwind configuration in `tailwind.config.js`
4. **Images**: Add your project images to the `public` directory

## 🔧 Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_WEBSITE_URL=your-website-url
```

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints:
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px

## 🚀 Deployment

The easiest way to deploy this portfolio is using [Vercel](https://vercel.com):

1. Push your code to a GitHub repository
2. Import your project to Vercel
3. Deploy with one click

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check [issues page](https://github.com/yourusername/portfolio-website/issues).

## 📧 Contact

For any questions or feedback, feel free to reach out:
- Email: hafizcr716@gmail.com
- LinkedIn: [Shahrul Hafiz](https://www.linkedin.com/in/shahrulhafiz03/)
- GitHub: [@apih99](https://github.com/apih99)
