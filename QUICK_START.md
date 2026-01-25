# ⚡ Quick Start Guide

## 🚀 Your Portfolio is Ready!

**Live URL:** http://localhost:5173/ (Development Server is Running ✅)

## 📝 5-Minute Setup

### 1. Update Your Information (2 min)
Open: `src/data/portfolioData.js`

```javascript
export const personalInfo = {
  name: "YOUR NAME HERE",
  role: "YOUR ROLE HERE",
  email: "YOUR EMAIL HERE",
  // ... update all fields
};
```

### 2. Add Your Photo (1 min)
- Save your photo as `public/profile.jpg`
- Edit `src/sections/About.jsx` (line ~51):
  ```jsx
  <img src="/profile.jpg" alt={personalInfo.name} />
  ```

### 3. Add Resume (1 min)
- Save PDF as `public/resume.pdf`
- Already configured in `portfolioData.js`!

### 4. Test It! (1 min)
- Open http://localhost:5173/
- Click through all sections
- Test dark/light mode toggle
- Try mobile view (F12 → Device toolbar)

## 🎨 Main Files to Edit

### Primary File (All Content):
- `src/data/portfolioData.js` - **Edit this first!**
  - Personal info
  - Projects
  - Skills
  - Education
  - Experience
  - Achievements

### Images:
- `public/profile.jpg` - Your photo
- `public/resume.pdf` - Your resume
- `public/projects/` - Project screenshots

### Configuration (Optional):
- `src/sections/Contact.jsx` - EmailJS setup
- `tailwind.config.js` - Color customization
- `index.html` - SEO meta tags

## 🎯 Content Guidelines

### Projects
- **Title**: Short and clear (3-6 words)
- **Description**: 2-3 sentences max
- **Tags**: 3-6 technologies
- **Image**: 800x600px or larger
- **Featured**: Mark your best 3-5 projects

### Skills
- **Level**: Honest self-assessment (0-100)
- **Categories**: Keep 4-6 categories
- **Skills per category**: 4-8 skills max

### Bio
- **Length**: 3-4 sentences
- **Focus**: What you do + What you love + What you're learning

## 📱 Navigation Quick Reference

Your portfolio has these sections:
1. **Home** (#home) - Hero with intro
2. **About** (#about) - Bio and stats
3. **Projects** (#projects) - Work showcase
4. **Skills** (#skills) - Technologies
5. **Education** (#education) - Academic background
6. **Experience** (#experience) - Work & certs
7. **Contact** (#contact) - Get in touch

## 🎨 Features At a Glance

### Already Working:
✅ Smooth scrolling
✅ Dark/light mode toggle
✅ Mobile responsive
✅ Animated sections
✅ Project filtering
✅ Skill progress bars
✅ Timeline UI
✅ Contact form (needs EmailJS)

### Keyboard Shortcuts:
- **Scroll**: Arrow keys, Space, Page Down/Up
- **Navigate**: Click navbar items
- **Theme**: Click sun/moon icon

## 🚀 Deployment (When Ready)

### Option 1: Vercel (Easiest)
```bash
1. Push to GitHub
2. Go to vercel.com
3. Import repository
4. Click Deploy ✨
```

### Option 2: Netlify
```bash
1. Push to GitHub
2. Go to netlify.com
3. Connect repository
4. Click Deploy ✨
```

### Option 3: GitHub Pages
```bash
npm run build
# Upload 'dist' folder
```

## 📧 EmailJS Setup (Contact Form)

**5-Minute Setup:**

1. **Sign Up**: https://www.emailjs.com/
2. **Add Service**: Gmail/Outlook/etc.
3. **Create Template**:
   ```
   From: {{from_name}} ({{from_email}})
   Subject: {{subject}}
   Message: {{message}}
   ```
4. **Update Code**: `src/sections/Contact.jsx`
   ```javascript
   emailjs.init('YOUR_PUBLIC_KEY');
   emailjs.send('SERVICE_ID', 'TEMPLATE_ID', data);
   ```

## 🎨 Color Customization

### Current Theme:
- **Primary**: Blue (#2563eb)
- **Secondary**: Purple (#9333ea)
- **Accent**: Pink (#ec4899)

### To Change:
Search and replace in all files:
- `blue-600` → `your-color-600`
- `purple-600` → `your-color-600`
- `pink-600` → `your-color-600`

## 🐛 Quick Troubleshooting

**Server not running?**
```bash
npm run dev
```

**Changes not showing?**
- Save file (Ctrl+S)
- Refresh browser (Ctrl+R)
- Check terminal for errors

**Images not loading?**
- Files in `public/` folder? ✓
- Path starts with `/`? ✓
- File name matches exactly? ✓

**Dark mode stuck?**
- Clear browser cache
- Check localStorage in DevTools
- Toggle switch in navbar

## 📚 Full Documentation

- **PROJECT_SUMMARY.md** - Complete overview
- **SETUP_GUIDE.md** - Detailed instructions
- **README.md** - Technical documentation

## ⚡ Common Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Install dependencies (if needed)
npm install
```

## 🎯 Before You Deploy

### Essential Checklist:
- [ ] Updated `portfolioData.js` with your info
- [ ] Added profile photo
- [ ] Added resume PDF
- [ ] Added project images
- [ ] Tested on mobile
- [ ] Tested dark/light mode
- [ ] Updated social media links
- [ ] Configured EmailJS (or removed form)

### SEO Checklist (Optional):
- [ ] Updated `<title>` in `index.html`
- [ ] Added meta description
- [ ] Added Open Graph tags
- [ ] Added favicon

## 💡 Pro Tips

1. **Use Real Data**: Replace ALL placeholder text
2. **Quality Images**: High-res looks professional
3. **Keep It Updated**: Add new projects regularly
4. **Test Everything**: Click every link and button
5. **Mobile First**: Most visitors use phones
6. **Be Concise**: Less is more in portfolios

## 🎉 You're All Set!

Your modern, professional portfolio is ready to impress!

**Current Status:**
- ✅ Development server running
- ✅ All features implemented
- ✅ Responsive design ready
- ✅ Dark mode working
- 🔄 Awaiting your content

**Next Step:** 
Edit `src/data/portfolioData.js` and add your information!

---

Need help? Check SETUP_GUIDE.md for detailed instructions.

**Happy Coding! 🚀**
