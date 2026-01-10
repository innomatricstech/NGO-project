import React from "react";
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";

export default function FloatingSocials() {
  return (
    <div
      className="
        fixed
        bottom-[150px] right-6
        z-[999]
        flex flex-col
        gap-3
      "
    >
      {/* WhatsApp */}
      <a
        href="https://wa.me/917483664359"
        target="_blank"
        rel="noopener noreferrer"
        className="
          w-14 h-14
          flex items-center justify-center
          rounded-full
          bg-green-500
          text-white text-2xl
          shadow-xl
          hover:scale-110
          transition
        "
        aria-label="WhatsApp"
      >
        <FaWhatsapp />
      </a>

      {/* Facebook */}
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="
          w-14 h-14
          flex items-center justify-center
          rounded-full
          bg-blue-600
          text-white text-xl
          shadow-xl
          hover:scale-110
          transition
        "
        aria-label="Facebook"
      >
        <FaFacebookF />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="
          w-14 h-14
          flex items-center justify-center
          rounded-full
          bg-gradient-to-br from-pink-500 to-yellow-400
          text-white text-xl
          shadow-xl
          hover:scale-110
          transition
        "
        aria-label="Instagram"
      >
        <FaInstagram />
      </a>
    </div>
  );
}
