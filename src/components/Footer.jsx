import React from "react";

const Footer = () => {
  const links = ["Investors", "Jobs", "Privacy Policy", "Terms and Conditions", "Platzi Travel.Inc", "Follow Us"]

  return (
    <footer className="py-5 bg-gray">
      <h3 className="p-6 text-2xl font-bold">About Us</h3>
      <ul className="mx-10">
        {links.map((value, index) => {
          return <li key={index}><a href="#" className="hover:text-red font-semibold">{links[index]}</a></li>
        })}
      </ul>
    </footer>
  );
}

export { Footer };