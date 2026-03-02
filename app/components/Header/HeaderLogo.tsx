import { Link } from "react-router";

export default function HeaderLogo() {
  return (
    <Link to="/" className="flex gap-4 items-center">
      <img src="./images/cake.png" alt="Velvet Goodness Logo" className="w-8" />
      <h1 className="font-nic text-3xl md:text-4xl tracking-wide cursor-pointer">
        Velvet
        <span className="text-[#FE7F9C]"> Goodness</span>
      </h1>
    </Link>
  );
}
