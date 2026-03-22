import React from "react";
import logo from "../assets/logo_without_bg.png";
import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <footer className="bg-blue-500 text-white mt-10">
      <div className="mx-auto px-6 py-3 h-[10v]">
        {/* Brand Section */}
        <div>
            <div className="flex  items-center">
                <Link to="/"><img src={logo} height="90" width="90" /></Link>
                <h2 className="text-2xl font-bold">PassMan</h2>
            </div>
            <p className="text-sm opacity-90">
            Your trusted password manager to store, manage, and protect your credentials securely.
            </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-white/30 py-3 text-center text-sm">
        © {new Date().getFullYear()} SecurePass. All rights reserved.
      </div>
    </footer>
  );
}
