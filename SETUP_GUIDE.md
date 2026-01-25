# 📋 Portfolio Setup Guide

This guide will help you customize your portfolio with your personal information.

## 🎯 Step-by-Step Customization

### Step 1: Personal Information

Open `src/data/portfolioData.js` and update the `personalInfo` object:

```javascript
export const personalInfo = {
  name: "Your Full Name",                    // Your name
  role: "Your Title | Your Specialization",  // Your roles
  email: "your.email@example.com",           // Your email
  phone: "+91-XXXXXXXXXX",                   // Your phone
  location: "Your City, Country",            // Your location
  bio: "Your bio here...",                   // About yourself
  resume: "/resume.pdf",                     // Path to your resume
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
    email: "your.email@example.com"
  }
};
```

### Step 2: Add Your Projects

Update the `projects` array with your projects:

```javascript
{
  id: 1,
  title: "Your Project Name",
  description: "Project description",
  image: "/projects/project-image.jpg",      // Add image to public/projects/
  tags: ["Technology 1", "Technology 2"],
  category: "AI/ML" or "Full Stack",
  github: "https://github.com/username/repo",
  demo: "https://your-demo.com",
  featured: true,                             // Display as featured
  highlights: [
    "Achievement 1",
    "Achievement 2"
  ]
}
```

### Step 3: Update Skills

Customize your skills in each category:

```javascript
export const skills = {
  "Machine Learning & AI": [
    { name: "Machine Learning", level: 90 },  // 0-100
    { name: "Deep Learning", level: 85 },
    // Add more...
  ],
  // Add more categories...
};
```

### Step 4: Education Details

Update your education information:

```javascript
{
  id: 1,
  degree: "Your Degree",
  institution: "Your University",
  location: "City, State",
  duration: "2021 - 2025",
  score: "X.XX CGPA or XX%",
  description: "Brief description",
  highlights: [
    "Notable achievements",
    "Relevant coursework"
  ]
}
```

### Step 5: Experience & Certifications

Add your work experience:

```javascript
{
  id: 1,
  title: "Your Position",
  company: "Company Name",
  location: "Location",
  duration: "Month Year - Month Year",
  type: "Internship" or "Full-time",
  description: "Brief overview",
  responsibilities: [
    "What you did",
    "Key achievements"
  ],
  technologies: ["Tech1", "Tech2"]
}
```

Add certifications:

```javascript
{
  id: 1,
  name: "Certification Name",
  issuer: "Issuing Organization",
  date: "Year",
  credential: "#CREDENTIAL_ID"
}
```

### Step 6: Add Profile Image

1. Place your profile image in `public/` folder (e.g., `public/profile.jpg`)
2. Open `src/sections/About.jsx`
3. Find the placeholder div and replace with:

```jsx
<img 
  src="/profile.jpg" 
  alt={personalInfo.name} 
  className="w-full h-full object-cover" 
/>
```

### Step 7: Add Project Images

1. Create folder: `public/projects/`
2. Add project images (recommended size: 800x600px)
3. Reference in portfolioData.js: `image: "/projects/your-image.jpg"`

### Step 8: Add Your Resume

1. Place your resume PDF in `public/` folder (e.g., `public/resume.pdf`)
2. Update path in `portfolioData.js`: `resume: "/resume.pdf"`

### Step 9: Configure Contact Form (EmailJS)

1. **Sign up at EmailJS:**
   - Go to [https://www.emailjs.com/](https://www.emailjs.com/)
   - Create a free account

2. **Create Email Service:**
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow setup instructions

3. **Create Email Template:**
   - Go to "Email Templates"
   - Click "Create New Template"
   - Use these variables:
     - `{{from_name}}` - Sender's name
     - `{{from_email}}` - Sender's email
     - `{{subject}}` - Email subject
     - `{{message}}` - Message content

4. **Update Contact.jsx:**
   ```javascript
   // Add at the top of the file
   emailjs.init('YOUR_PUBLIC_KEY');

   // In handleSubmit function, uncomment and update:
   await emailjs.send(
     'YOUR_SERVICE_ID',
     'YOUR_TEMPLATE_ID',
     {
       from_name: formData.name,
       from_email: formData.email,
       subject: formData.subject,
       message: formData.message,
     }
   );
   ```

### Step 10: Customize Colors (Optional)

To change the color scheme:

1. **Update Tailwind Config** (`tailwind.config.js`):
   ```javascript
   theme: {
     extend: {
       colors: {
         primary: '#YOUR_COLOR',
         secondary: '#YOUR_COLOR',
       }
     }
   }
   ```

2. **Update Gradient Colors** in components:
   - Search for `from-blue-600 to-purple-600`
   - Replace with your preferred gradient colors

## 🎨 Design Customization

### Font
Update in `src/index.css`:
```css
body {
  font-family: 'Your Font', system-ui, sans-serif;
}
```

### Background Effects
Modify animated blobs in `src/sections/Hero.jsx`:
```javascript
className="... bg-your-color/30 ..."
```

### Card Styles
Update glassmorphism effects in components:
```javascript
className="bg-white/10 backdrop-blur-sm ..."
```

## 🚀 Before Deployment

### Checklist:
- [ ] All personal information updated
- [ ] Profile image added
- [ ] All project images added
- [ ] Resume PDF added
- [ ] EmailJS configured and tested
- [ ] Social media links updated
- [ ] Test on mobile, tablet, and desktop
- [ ] Test dark/light mode
- [ ] Test all navigation links
- [ ] Test contact form

### SEO Optimization

Update `index.html`:

```html
<head>
  <title>Your Name - Portfolio</title>
  <meta name="description" content="Your portfolio description" />
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Your Name - Portfolio" />
  <meta property="og:description" content="Your description" />
  <meta property="og:image" content="/og-image.jpg" />
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Your Name - Portfolio" />
  <meta name="twitter:description" content="Your description" />
  <meta name="twitter:image" content="/twitter-image.jpg" />
</head>
```

## 📊 Analytics (Optional)

### Google Analytics

1. Create GA4 property at [Google Analytics](https://analytics.google.com/)
2. Add tracking code to `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 🐛 Troubleshooting

### Issue: Images not loading
- Ensure images are in `public/` folder
- Check file path starts with `/`
- Verify file names match exactly

### Issue: Dark mode not working
- Clear browser cache
- Check localStorage in browser DevTools
- Verify ThemeProvider wraps App component

### Issue: Contact form not sending
- Verify EmailJS credentials
- Check browser console for errors
- Test email service on EmailJS dashboard

## 📞 Need Help?

If you encounter any issues:
1. Check the browser console for errors
2. Verify all file paths are correct
3. Ensure all dependencies are installed (`npm install`)
4. Try clearing cache and restarting dev server

---

**Happy Customizing! 🎉**
