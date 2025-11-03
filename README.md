# 👨‍🍳 Chef Claude - AI Recipe Generator

A beautiful React web application that generates personalized recipes using Google's Gemini AI based on ingredients you provide.

## ✨ Features

- 🥘 **AI-Powered Recipe Generation** - Uses Google Gemini 2.5 Flash API to generate creative recipes
- ➕ **Easy Ingredient Management** - Add and remove ingredients with a user-friendly interface
- 📋 **Comprehensive Recipes** - Each recipe includes:
  - Recipe title
  - Complete ingredients list with quantities
  - Cooking time
  - Number of servings
  - Step-by-step instructions
- 🎨 **Beautiful UI** - Clean, responsive design with smooth interactions
- ⚡ **Fast & Lightweight** - Built with React + Vite for optimal performance
- 🔒 **Secure API Integration** - API key stored safely in environment variables

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Google Gemini API key (get one at [Google AI Studio](https://makersuite.google.com/app/apikey))

### Installation

1. Clone the repository:
```bash
git clone https://github.com/anoushkawasthi/my-app.git
cd my-app
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```bash
cp .env.example .env
```

4. Add your Google Gemini API key to `.env`:
```
VITE_GEMINI_API_KEY=your_actual_gemini_api_key_here
```

### Running the App

Start the development server:
```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173`

## 📖 How to Use

1. **Add Ingredients** - Type an ingredient name in the input field and click "+Add ingredient"
2. **Build Your List** - Add at least 4 ingredients to generate a recipe
3. **Remove Ingredients** - Click the ✕ button next to any ingredient to remove it
4. **Generate Recipe** - Once you have 4+ ingredients, click "Get a recipe"
5. **View Recipe** - The AI-generated recipe will appear with all details

## 🛠️ Tech Stack

- **Frontend Framework** - React 19
- **Build Tool** - Vite 6
- **AI API** - Google Gemini 2.5 Flash
- **Styling** - CSS3
- **Package Manager** - npm

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔧 Project Structure

```
my-app/
├── src/
│   ├── Appy.jsx           # Main recipe generator component
│   ├── header.jsx         # Header with Chef Claude branding
│   ├── main.jsx           # App entry point
│   ├── index.css          # Styling
│   └── assets/            # Images and assets
├── index.html             # HTML template
├── vite.config.js         # Vite configuration
├── package.json           # Project dependencies
├── .env.example           # Environment variables template
└── README.md              # This file
```

## 🔐 Environment Variables

The project uses environment variables to securely store your API key. See `.env.example` for the template.

**Important:** Never commit your `.env` file to version control. The `.gitignore` file already protects it.

## 🎯 Features in Detail

### Ingredient Management
- Add ingredients one at a time
- Each ingredient displays in a compact box
- Remove individual ingredients with the ✕ button
- Auto-fit width based on ingredient name length

### Recipe Generation
- Minimum 4 ingredients required (prevents vague recipes)
- Loading state while generating
- Clear error messages if something goes wrong
- Beautifully formatted recipe display

### UI/UX
- Responsive design works on all screen sizes
- Clean, modern interface with orange/cream color scheme
- Smooth transitions and hover effects
- Large, easily clickable buttons

## 🐛 Troubleshooting

### API Key Error (404 Not Found)
Make sure you're using the correct Gemini model: `gemini-2.5-flash`

### Recipe Not Generating
- Ensure you have added at least 4 ingredients
- Check that your API key is valid in the `.env` file
- Check browser console (F12) for error messages

### Styling Issues
Clear your browser cache or do a hard refresh (Ctrl+Shift+R)

## 📝 License

This project is open source. Feel free to fork and modify!

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and enhancement requests.

## 📧 Support

For issues or questions, please open an issue on the [GitHub repository](https://github.com/anoushkawasthi/my-app/issues).

---

**Made with ❤️ by Chef Claude Team**
