# 🚀 Priyanshu Singh - Portfolio Website

A modern, interactive DevOps and Full-Stack Developer portfolio showcasing projects, experiences, and technical skills with stunning animations and 3D visuals.

**🌐 Live Demo:** https://priyanshu5ingh.github.io/Portfolio-

---

## ✨ Features

- 🎨 **Modern UI Design** - Sleek, professional interface with gradient backgrounds
- 🎭 **3D Animations** - Interactive 3D astronaut model using Three.js and React Three Fiber
- ✨ **Smooth Animations** - Framer Motion animations for engaging interactions
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- 🌍 **Interactive Globe** - Globe visualization showing timezone and location
- 📊 **Project Showcase** - Interactive project cards with hover previews
- 📈 **Work Timeline** - Animated timeline displaying work experience
- 💌 **Contact Form** - Integrated email functionality using EmailJS
- 🌓 **Dark Theme** - Eye-friendly dark mode UI
- ⚡ **Fast Performance** - Built with Vite for rapid development and optimized production builds
- 🔄 **Smooth Scrolling** - Seamless navigation between sections

---

## 🛠 Tech Stack

### Frontend
- **React** - UI library
- **Vite** - Build tool and dev server
- **TypeScript** - (Optional) Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library

### 3D & Graphics
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Useful helpers for React Three Fiber

### Data Visualization
- **D3.js / Chart.js** - (Used in projects)
- **Cobe** - Globe visualization

### Utilities
- **EmailJS** - Email service for contact form
- **Tailwind Merge** - Merge Tailwind CSS classes
- **React Responsive** - Responsive design utilities

### Deployment
- **GitHub Pages** - Hosting platform
- **gh-pages** - Deploy script for GitHub Pages

---

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Git

### Clone the Repository
```bash
git clone https://github.com/priyanshu5ingh/Portfolio-.git
cd Portfolio-
```

### Install Dependencies
```bash
npm install
```

---

## 🚀 Development

### Start Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

### Build for Production
```bash
npm run build
```

Generated files will be in the `dist/` folder.

### Preview Production Build
```bash
npm run preview
```

---

## 📤 Deployment

### Deploy to GitHub Pages
```bash
npm run deploy
```

This command will:
1. Build the project
2. Push the built files to the `gh-pages` branch
3. Deploy to GitHub Pages

**Live URL:** https://priyanshu5ingh.github.io/Portfolio-

---

## 🎨 Customization

### Update Personal Information

Edit `/src/constants/index.js`:
```javascript
export const mySocials = [
  { name: "WhatsApp", href: "https://wa.me/YOUR_NUMBER", icon: "/assets/socials/whatsApp.svg" },
  { name: "LinkedIn", href: "YOUR_LINKEDIN_URL", icon: "/assets/socials/linkedIn.svg" },
  // ...
];

export const experiences = [
  {
    title: "Your Title",
    job: "Your Company",
    date: "Start - End",
    contents: ["Achievement 1", "Achievement 2", ...],
  },
  // ...
];

export const myProjects = [
  {
    id: 1,
    title: "Project Name",
    description: "Short description",
    subDescription: ["Detail 1", "Detail 2", ...],
    href: "https://project-url.com",
    image: "/assets/projects/project-image.jpg",
    tags: [{ id: 1, name: "React", path: "/assets/logos/react.svg" }, ...],
  },
  // ...
];
```

### Update About Section

Edit `/src/sections/About.jsx`:
- Update bio text
- Modify tech stack cards
- Change timezone information
- Update contact CTA

### Update Hero Section

Edit `/src/components/HeroText.jsx`:
- Change title and subtitle
- Modify flip animations
- Adjust text content

### Update Contact Information

Edit `/src/sections/Contact.jsx`:
- Update EmailJS service ID, template ID, and public key
- Modify contact form fields
- Change recipient email address

---

## 🖼 Adding Images

### Project Images
1. Create project screenshots (recommended size: 1200x600px)
2. Save to `/public/assets/projects/`
3. Update image paths in `/src/constants/index.js`

```javascript
image: "/assets/projects/your-project-image.jpg"
```

### Social Media Icons
1. Add SVG icons to `/public/assets/socials/`
2. Update icon paths in constants

**Recommended Icons:**
- `github.svg` - GitHub icon
- `x.svg` - X (Twitter) icon
- `instagram.svg` - Instagram icon
- `linkedin.svg` - LinkedIn icon
- `whatsApp.svg` - WhatsApp icon

### Tech Stack Logos
1. Add SVG logos to `/public/assets/logos/`
2. Size: 32x32px or 64x64px

**Example logos needed:**
- `react.svg`, `nodejs.svg`, `python.svg`
- `docker.svg`, `kubernetes.svg`, `aws.svg`
- `postgresql.svg`, `mongodb.svg`, `typescript.svg`

---

## 📁 Project Structure

```
Portfolio-/
├── public/
│   ├── assets/
│   │   ├── logos/          # Technology logos
│   │   ├── projects/       # Project screenshots
│   │   ├── socials/        # Social media icons
│   │   └── ...
│   └── models/             # 3D models
├── src/
│   ├── components/         # Reusable components
│   │   ├── Astronaut.jsx
│   │   ├── Card.jsx
│   │   ├── Timeline.jsx
│   │   ├── Project.jsx
│   │   └── ...
│   ├── constants/
│   │   └── index.js        # Portfolio data
│   ├── contexts/           # React contexts
│   │   ├── ThemeContext.jsx
│   │   └── ToastContext.jsx
│   ├── sections/           # Page sections
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Experiences.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── dist/                   # Build output
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

---

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile:** < 640px (sm)
- **Tablet:** 768px - 1024px (md, lg)
- **Desktop:** > 1024px (xl)

---

## ⚙️ Configuration

### Vite Config (`vite.config.js`)
```javascript
export default defineConfig({
  base: '/Portfolio-/',  // Change if using custom domain
  plugins: [react()],
})
```

### Tailwind Config (`tailwind.config.js`)
- Custom colors and theme
- Animation settings
- Responsive breakpoints

### EmailJS Setup
1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service
3. Update in `/src/sections/Contact.jsx`:
```javascript
await emailjs.send(
  "YOUR_SERVICE_ID",
  "YOUR_TEMPLATE_ID",
  { /* form data */ },
  "YOUR_PUBLIC_KEY"
);
```

---

## 🔍 SEO Optimization

Update `/index.html` for better SEO:
```html
<title>Priyanshu Singh - DevOps & Full-Stack Developer</title>
<meta name="description" content="Portfolio of Priyanshu Singh - DevOps aspirant and full-stack web developer">
<meta name="keywords" content="DevOps, Web Development, React, Docker, Kubernetes">
<meta name="author" content="Priyanshu Singh">
```

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Use a different port
npm run dev -- --port 3000
```

### Build Issues
```bash
# Clear node_modules and reinstall
rm -r node_modules package-lock.json
npm install
npm run build
```

### Deployment Issues
- Ensure `gh-pages` branch exists in GitHub
- Check GitHub Pages settings: Settings > Pages > Source = "Deploy from a branch"
- Verify `homepage` field in `package.json`

---

## 📊 Performance

### Current Metrics
- **Build Size:** ~1.4MB (JavaScript) + 29KB (CSS)
- **Gzip Size:** ~404KB (JavaScript) + 6KB (CSS)
- **Load Time:** < 2 seconds on 4G

### Optimization Tips
1. Lazy load components with React.lazy()
2. Optimize images with proper formats (WebP)
3. Use code splitting for 3D models
4. Enable caching in deployment

---

## 🎯 Future Enhancements

- [ ] Add image assets for all projects
- [ ] Implement blog section with MDX
- [ ] Add dark/light theme toggle
- [ ] Integrate analytics (Google Analytics)
- [ ] Add search functionality
- [ ] Multi-language support
- [ ] PWA (Progressive Web App)
- [ ] Database for dynamic content

---

## 📋 Checklist Before Deployment

- [ ] Update all personal information
- [ ] Add all project descriptions and links
- [ ] Update social media links
- [ ] Add project screenshot images
- [ ] Add tech stack logos
- [ ] Test on mobile devices
- [ ] Verify email functionality
- [ ] Test all navigation links
- [ ] Check for broken images
- [ ] Run `npm run build` successfully

---

## 📝 License

This project is open source and available under the MIT License.

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📞 Contact & Links

- **Portfolio:** https://priyanshu5ingh.github.io/Portfolio-
- **GitHub:** https://github.com/priyanshu5ingh
- **LinkedIn:** https://www.linkedin.com/in/priyanshu5ingh/
- **Instagram:** https://www.instagram.com/priyanshu5ingh/
- **X (Twitter):** https://x.com/priyanshu5ingh5
- **Email:** priyanshusinghrajput007@gmail.com
- **WhatsApp:** +91 9380305821

---

## 🙌 Acknowledgments

- [Vite](https://vitejs.dev/) - Lightning-fast build tool
- [React](https://react.dev/) - UI library
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Three.js](https://threejs.org/) - 3D graphics
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [EmailJS](https://www.emailjs.com/) - Email service

---

**Happy coding! 🚀** Feel free to customize this portfolio to make it your own.

---

*Last Updated: March 5, 2026*
