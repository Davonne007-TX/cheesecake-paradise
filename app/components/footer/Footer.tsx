import {
  CakeSlice,
  MapPinned,
  PhoneCall,
  Mail,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
import OurLinks from "./OurLinks";
import TermsOfService from "./TermsOfService";

export default function () {
  const ourInfo = [
    { name: "2318 Sully Lane, Forks WA 90210", icon: MapPinned, id: 0 },
    { name: "987-654-321", icon: PhoneCall, id: 1 },
    { name: "velvetGoodness@aol.com", icon: Mail, id: 2 },
  ];

  return (
    <footer className="bg-[#181818] backdrop-blur-md p-12 text-white border-t border-white/10">
      <div className="flex flex-col md:flex-row md:justify-between gap-12 max-w-6xl mx-auto">
        <div className="flex flex-col gap-4 max-w-sm">
          <div className="flex gap-2 items-center">
            <CakeSlice className="w-8 h-8 text-[#FE7F9C]" />
            <h1 className="font-nic text-3xl">Velvet Goodness</h1>
          </div>

          <p className="max-w-sm">
            Baked to perfection homemade cheesecake. From our family to yours,
            one velvet slice at a time.
          </p>

          <div className="mt-4 flex flex-col gap-4">
            {ourInfo.map((info) => (
              <ul key={info.id} className="flex items-center gap-4">
                <info.icon className="h-4 w-4" />
                <li>{info.name}</li>
              </ul>
            ))}
          </div>

          <div className="flex gap-4 mt-4">
            {" "}
            <Facebook className="w-8 h-8 rounded-full bg-white/40 p-1 hover:bg-white hover:text-[#FE7F9C] transition cursor-pointer" />
            <Twitter className="w-8 h-8 rounded-full bg-white/40 p-1  hover:bg-white  hover:text-[#FE7F9C] transition cursor-pointer" />
            <Instagram className="w-8 h-8 rounded-full bg-white/40 p-1  hover:bg-white  hover:text-[#FE7F9C] transition cursor-pointer" />
          </div>
        </div>
        <OurLinks />
      </div>
      <TermsOfService />
    </footer>
  );
}
