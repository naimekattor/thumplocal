import React from "react";
import { ReactNode, useState } from "react";
import Navbar from "../Navbar";

export default function Layout({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
        <Navbar />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
