# 🎨 Modern Portfolio Website

A stunning, fully responsive personal portfolio website built with React, Vite, Tailwind CSS, and Framer Motion. Features glassmorphism effects, smooth animations, dark/light mode toggle, and a modern UI design.

## ✨ Features

### 🎯 Modern UI/UX
- **Glassmorphism & Neumorphism Effects** - Beautiful translucent card designs
- **Smooth Animations** - Powered by Framer Motion
- **Responsive Design** - Mobile-first approach, looks great on all devices
- **Dark/Light Mode** - Theme toggle with smooth transitions
- **Sticky Navigation** - Always accessible navigation with active section indicators
- **Smooth Scrolling** - Elegant page transitions

### 📱 Sections Included
1. **Hero Section** - Animated introduction with gradient background and call-to-actions
2. **About Me** - Profile, bio, and quick statistics
3. **Projects** - Showcase with filtering, glassmorphism cards, and hover effects
4. **Skills** - Categorized skills with animated progress bars
5. **Education** - Timeline UI for academic background
6. **Experience** - Work experience, certifications, and achievements
7. **Contact** - Contact form with EmailJS integration and social links

### 🚀 Tech Stack
- **Frontend**: React 19 + Vite
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Email Service**: EmailJS
- **Build Tool**: Vite

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🎨 Customization

### 1. Update Personal Information

Edit `src/data/portfolioData.js` to customize all content including your name, role, projects, skills, education, and experience.

### 2. Configure EmailJS

To enable the contact form:
1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Update `src/sections/Contact.jsx` with your credentials

### 3. Add Your Profile Image

Replace the placeholder in `src/sections/About.jsx` with your actual profile image.

### 4. Update Resume

Place your resume PDF in the `public` folder and update the path in `portfolioData.js`.

## 📁 Project Structure

```
Portfolio/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components (Navbar, Cards, etc.)
│   ├── sections/        # Page sections (Hero, About, Projects, etc.)
│   ├── data/           # Content data (portfolioData.js)
│   ├── hooks/          # Custom hooks (useTheme)
│   ├── App.jsx         # Main app component
│   └── index.css       # Global styles
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Visit [Vercel](https://vercel.com)
3. Import your repository and deploy!

### Netlify
1. Push your code to GitHub
2. Visit [Netlify](https://netlify.com)
3. Connect your repository and deploy!

## 📝 To-Do Checklist

- [ ] Update personal information in `src/data/portfolioData.js`
- [ ] Add your profile image
- [ ] Configure EmailJS for contact form
- [ ] Add your resume PDF
- [ ] Update social media links
- [ ] Customize colors (optional)
- [ ] Add analytics (Google Analytics, etc.)
- [ ] Add meta tags for SEO

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

This project is open source and available under the MIT License.

---

**Built with ❤️ using React, Tailwind CSS, and Framer Motion**
