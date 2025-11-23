# Shadow Mentor - Frontend

Modern, responsive frontend for the Shadow Mentor AI-Powered HR Onboarding platform.

## 🎨 Design Features

- **Dark Theme** with orange/amber accent colors (similar to ArcFi)
- **Fully Responsive** - works on mobile, tablet, and desktop
- **Smooth Animations** using Framer Motion
- **Interactive Charts** with Recharts
- **Glass Morphism** UI elements
- **Gradient Accents** throughout

## 🚀 Getting Started

### Installation

```bash
cd frontend
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Build

```bash
npm run build
```

## 📁 Project Structure

```
frontend/
├── src/
│   ├── pages/
│   │   ├── LandingPage.jsx    # Hero, features, how it works
│   │   ├── Dashboard.jsx       # Main admin dashboard
│   │   ├── EmployeeView.jsx   # Individual employee details
│   │   └── AdminPanel.jsx     # Settings and configuration
│   ├── App.jsx                # Main app with routing
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles & Tailwind
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## 🎯 Pages

### Landing Page (`/`)

- Hero section with call-to-action
- Features showcase
- How it works (3-step cycle)
- Benefits section
- Stats and testimonials
- Footer

### Dashboard (`/dashboard`)

- Real-time statistics
- Onboarding progress charts
- Role distribution
- Integration gaps alerts
- Recent employees table
- Sidebar navigation

### Employee View (`/employee/:id`)

- Individual employee profile (coming soon)

### Admin Panel (`/admin`)

- Configuration and settings (coming soon)

## 🛠️ Technologies

- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Recharts** - Data visualization
- **Lucide React** - Icons
- **React Router** - Navigation

## 🎨 Color Palette

- **Primary Orange**: `#F59E0B`
- **Dark Background**: `#0F0F0F`
- **Secondary Dark**: `#1A1A1A`
- **Tertiary Dark**: `#262626`

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔧 Customization

Edit `tailwind.config.js` to customize:

- Colors
- Animations
- Spacing
- Breakpoints

## 📦 Dependencies

See `package.json` for full list of dependencies.

## 🤝 Contributing

This is a team project for Shadow Mentor. Contact the team lead for contribution guidelines.

## 📄 License

MIT License - See LICENSE file for details
