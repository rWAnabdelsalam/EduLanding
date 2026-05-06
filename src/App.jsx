import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Courses from "./components/Courses";
import Footer from "./components/Footer";
import "./styles/App.css";
import "./styles/Navbar.css";
import "./styles/Hero.css";
import "./styles/Courses.css";
import "./styles/Footer.css";

export default function App() {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light";
    });

    useEffect(() => {
        document.body.className = theme === "dark" ? "dark-theme" : "light-theme";
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
    };

    return (
        <div className="app">
            <Navbar theme={theme} toggleTheme={toggleTheme} />
            <main>
                <Hero />
                <Courses />
            </main>
            <Footer />
        </div>
    );
}