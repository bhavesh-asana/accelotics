import Image from "next/image";
// import {Image} from "@nextui-org/react";
import Header from "./sections/header";
import Footer from "./sections/footer";
import Landing from "./sections/landing";
import Partner from "./sections/partner";

export default function Home() {
  return (
    <main className="max-h-full w-fit">
      <div className="w-full fixed top-0 z-10 backdrop-blur-2xl shadow-2xl shadow-slate-800/70">
        <Header />
      </div>
      <Landing />
      <div>
        <Partner/>
      </div>

      {/* Section-2 */}
      {/* <div className="h-[400px] content-center">
          <div className="place-items-center">
            <h2>Our Partners</h2>
            <p className="w-3/5 text-center p-5">
            At Accelotics, our success is built on the foundation of strong and collaborative partnerships. We take pride in working with a diverse network of organizations, industry leaders, and innovators who share our vision of driving technological excellence and transforming ideas into impactful solutions.
            </p>
          </div>
          <div className="flex justify-center pt-12 space-x-48">
            <Image
              src="https://accelite.blob.core.windows.net/static/262-2627395_microsoft-logo-microsoft-logo-white-transparent-background (1).png" // Full URL of the external image
              alt="Description of the image"
              width={170} // Set the desired width
              height={170} // Set the desired height
            />
            <Image
              src="https://accelite.blob.core.windows.net/static/alphalogo.png" // Full URL of the external image
              alt="Description of the image"
              width={280} // Set the desired width
              height={170} // Set the desired height
            />
          </div>
        </div> */}





      <Footer />
    </main>
  );
}
