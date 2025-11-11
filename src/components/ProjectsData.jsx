import shopbudImg from "../assets/projects/shopbud.png";
import portfolioImg from "../assets/projects/portfolio.png";
import tictactoeImg from "../assets/projects/tictactoe.png";
import notexImg from "../assets/projects/notex.png";

const projects = [
  {
    id: 1,
    title: "🛍️ AI ShopBud – E-Commerce Web Application",
    shortDesc: "Full-stack e-commerce platform with AI-powered search and admin dashboard.",
    description:
      "ShopBud is a full-stack e-commerce web application built to deliver a complete online shopping experience. Users can explore products, manage their cart, place secure orders, and make real-time payments through Stripe. The platform also includes admin features for managing products, orders, and inventory. Built with a modern tech stack: React, Redux, Vite, Node.js, Express, and PostgreSQL - the app ensures high performance, scalability, and responsive design across all devices.",
    image: shopbudImg,
    liveFrontend: "https://shopbud-frontend.onrender.com",
    liveAdmin: "https://shopbud-admin.onrender.com",
    adminDemo: { email: "admin@demo.com", password: "Admin@1234" },
    code: "https://github.com/Ritupagar12/ai_shopbud_ecommerce_website",
    tech: [
      "React",
      "Redux",
      "Vite",
      "Node.js",
      "Express",
      "PostgreSQL",
      "TailwindCSS",
      "Stripe",
      "JWT",
      "Gemini API",
      "Cloudinary",
      "Nodemailer",
    ],
    highlights: [
      "🧩 AI Product Search - Gemini API filters and sorts products intelligently.",
      "💳 Stripe Payment Gateway - Secure checkout and order placement.",
      "☁️ Cloudinary Integration for images.",
      "📧 Nodemailer for emails and notifications.",
      "🔐 JWT Authentication & Role-Based Access.",
      "📦 Fully Functional Admin Dashboard for revenue, orders, products, and users.",
      "🌓 Dark/Light Mode for responsive experience.",
      "📱 Responsive Design for mobile and desktop.",
      "🛍️ Wishlist & Cart functionality with product categories and tags.",
      "⭐ Reviews & Ratings with CRUD operations.",
    ],
    installation: `# Clone the repository
git clone https://github.com/Ritupagar12/ai_shopbud_ecommerce_website.git
cd ai_shopbud_ecommerce_website

# Backend setup
cd backend
npm install
npm run dev
# Create .env file with keys (JWT, Stripe, Cloudinary, SMTP, etc.)

# Frontend setup
cd ../frontend
npm install
npm run dev

# Admin setup
cd ../admin
npm install
npm run dev`,
  },
  {
    id: 2,
    title: "🌟 Portfolio Website",
    shortDesc: "Personal portfolio website built with React and TailwindCSS.",
    description:
      "A responsive personal portfolio website to showcase projects, skills, and experience. Designed with a clean, modern layout with smooth navigation and professional UI. Includes sections for About, Projects, and Contact.",
    image: portfolioImg,
    live: "https://my-portfolio-one-gamma-81.vercel.app/",
    code: "https://github.com/Ritupagar12/my-portfolio",
    tech: ["React", "TailwindCSS", "CSS", "Vite", "JavaScript"],
    highlights: [
      "🎯 Hero section with tagline and quick navigation.",
      "🧑‍💻 About Me section with profile, experience, and tech stack.",
      "💼 Projects section with live demos and GitHub links.",
      "📩 Contact section integrated with form and external links.",
      "🌟 Fully responsive and modern design.",
    ],
    installation: `# Clone the repository
git clone https://github.com/Ritupagar12/my-portfolio.git
cd my-portfolio

# Install dependencies
npm install

# Run locally
npm start`,
  },
  {
    id: 3,
    title: "🎮 TicTacToe Game",
    shortDesc: "Interactive TicTacToe game with AI mode and responsive UI.",
    description:
      "A fun TicTacToe game built using React with optional AI mode. Fully responsive with smooth hover effects and interactive UI. Users can play vs AI or another player and track the game history.",
    image: tictactoeImg,
    live: "https://tic-tac-toe-y62g.vercel.app/",
    code: "https://github.com/Ritupagar12/tic-tac-toe",
    tech: ["React", "HTML", "CSS", "TailwindCSS", "JavaScript"],
    highlights: [
      "✅ Play vs AI mode with random moves.",
      "✅ Undo / History moves.",
      "✅ Smooth hover and click animations.",
      "✅ Fully responsive layout.",
    ],
    installation: `# Clone repository
git clone https://github.com/Ritupagar12/tic-tac-toe.git
cd tic-tac-toe

# Install dependencies
npm install

# Run project
npm run dev
Open http://localhost:5173/ in browser`,
  },
  {
    id: 4,
    title: "📝 NoteX App",
    shortDesc: "MERN stack note-taking app with full CRUD and search features.",
    description:
      "NoteX is a simple and interactive note-taking application built with the MERN stack. Users can create, edit, delete, mark important notes, and search notes efficiently. Designed to be lightweight, responsive, and user-friendly.",
    image: notexImg,
    live: "https://notex-app-fe.onrender.com/",
    code: "https://github.com/Ritupagar12/NoteX-App",
    tech: ["MERN Stack", "React", "Node.js", "Express.js", "MongoDB", "Axios", "TailwindCSS"],
    highlights: [
      "✅ Create, update, and delete notes.",
      "⭐ Mark notes as Important.",
      "🔍 Live search and filters.",
      "⚡ Smooth UX with responsive design.",
      "🛡️ Validation for empty or duplicate fields.",
    ],
    installation: `# Clone repository
git clone https://github.com/Ritupagar12/NoteX-App.git
cd NoteX-App

# Backend
cd backend
npm install
# Create .env with MongoDB URI and PORT
MONGO_URI=your_mongodb_connection_string
PORT=5000
npm run dev

# Frontend
cd ../frontend
npm install
npm start`,
  },
];

export default projects;