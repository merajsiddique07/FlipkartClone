import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  MdWork,
  MdCampaign,
  MdCardGiftcard,
  MdHelpOutline,
} from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#172337] text-white text-xs mt-10">
      <div className="px-10 py-10 grid grid-cols-7 gap-8">
        <FooterColumn
          title="ABOUT"
          links={[
            "Contact Us",
            "About Us",
            "Careers",
            "Flipkart Stories",
            "Press",
            "Corporate Information",
          ]}
        />

        {/* GROUP COMPANIES */}
        <FooterColumn
          title="GROUP COMPANIES"
          links={["Myntra", "Cleartrip", "Shopsy"]}
        />

        {/* HELP */}
        <FooterColumn
          title="HELP"
          links={["Payments", "Shipping", "Cancellation & Returns", "FAQ"]}
        />

        {/* CONSUMER POLICY */}
        <FooterColumn
          title="CONSUMER POLICY"
          links={[
            "Cancellation & Returns",
            "Terms Of Use",
            "Security",
            "Privacy",
            "Sitemap",
            "Grievance Redressal",
            "EPR Compliance",
            "FSSAI Food Safety",
            "Connect App",
          ]}
        />

        {/* VERTICAL LINE */}
        <div className="border-l border-gray-600 h-full"></div>

        {/* MAIL US */}
        <div>
          <h3 className="text-[#878787] mb-4">Mail Us:</h3>

          <p className="leading-[17px]">
            Flipkart Internet Private Limited,
            <br />
            Buildings Alyssa, Begonia &
            <br />
            Clove Embassy Tech Village,
            <br />
            Outer Ring Road, Devarabeesanahalli Village,
            <br />
            Bengaluru, 560103,
            <br />
            Karnataka, India
          </p>

          <h3 className="text-[#878787] mt-5 mb-3">Social:</h3>

          <div className="flex gap-5 text-xl">
            <FaFacebook className="cursor-pointer" />
            <FaXTwitter className="cursor-pointer" />
            <FaYoutube className="cursor-pointer" />
            <FaInstagram className="cursor-pointer" />
          </div>
        </div>

        {/* REGISTERED OFFICE */}
        <div>
          <h3 className="text-[#878787] mb-4">Registered Office Address:</h3>

          <p className="leading-[17px]">
            Flipkart Internet Private Limited,
            <br />
            Buildings Alyssa, Begonia &
            <br />
            Clove Embassy Tech Village,
            <br />
            Outer Ring Road, Devarabeesanahalli Village,
            <br />
            Bengaluru, 560103,
            <br />
            Karnataka, India
          </p>

          <p className="mt-2 leading-[17px]">CIN : U51109KA2012PTC066107</p>

          <p className="leading-[17px]">
            Telephone:
            <span className="text-[#2874f0]"> 044-45614709 / 044-45714709</span>
          </p>
        </div>
      </div>

      {/* ================= BOTTOM FOOTER ================= */}
      <div className="border-t border-gray-600 px-10 py-5 flex items-center justify-between gap-8">
        {/* Become Seller */}
        <BottomItem icon={<MdWork />} text="Become a Seller" />

        {/* Advertise */}
        <BottomItem icon={<MdCampaign />} text="Advertise" />

        {/* Gift Cards */}
        <BottomItem icon={<MdCardGiftcard />} text="Gift Cards" />

        {/* Help Center */}
        <BottomItem icon={<MdHelpOutline />} text="Help Center" />

        {/* Copyright */}
        <div className="font-semibold whitespace-nowrap">
          © 2007-2026 Flipkart.com
        </div>

        {/* Payment Methods */}
        <div className="flex gap-1 items-center">
          <Payment text="VISA" />
          <Payment text="MC" />
          <Payment text="AMEX" />
          <Payment text="RuPay" />
          <Payment text="DISCOVER" />
          <Payment text="UPI" />
        </div>
      </div>
    </footer>
  );
};

// ================= REUSABLE COMPONENTS =================

const FooterColumn = ({ title, links }) => {
  return (
    <div>
      <h3 className="text-[#878787] mb-4">{title}</h3>

      <div className="flex flex-col gap-1">
        {links.map((link, index) => (
          <a href="#" key={index} className="font-semibold hover:underline">
            {link}
          </a>
        ))}
      </div>
    </div>
  );
};

const BottomItem = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-2 whitespace-nowrap">
      <span className="text-[#f7c600] text-lg">{icon}</span>

      <span>{text}</span>
    </div>
  );
};

const Payment = ({ text }) => {
  return (
    <div className="bg-white text-black px-2 py-1 rounded-sm text-[8px] font-bold">
      {text}
    </div>
  );
};

export default Footer;
