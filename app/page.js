import Image from "next/image";
import Head from "next/head";
import Navbar from "@/components/NavBar";

export default function Home() {
  return (
    <div>
      <Navbar />
      Home
      <i className="fa-solid fa-cart-shopping"></i>
    </div>
  );
}
