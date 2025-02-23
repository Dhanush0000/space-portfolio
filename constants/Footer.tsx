import Link from "next/link";
import { FOOTER_DATA } from "@/constants";

export const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Footer Sections */}
        <div className="w-full flex flex-wrap justify-center gap-10 md:justify-around">
          {FOOTER_DATA.map((column) => (
            <div key={column.title} className="text-center">
              <h3 className="font-semibold text-lg text-white mb-3">
                {column.title}
              </h3>
              <ul className="space-y-2">
                {column.data.map(({ icon: Icon, name, link }) => (
                  <li key={`${column.title}-${name}`}>
                    <Link
                      href={link.startsWith("http") ? link : `mailto:${link}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 hover:text-white transition"
                    >
                      {Icon && <Icon className="w-5 h-5" />}
                      <span>{name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Copyright */}
        <div className="mt-6 text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Dhanush G. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
