import Image from "next/image";
// import {Image} from "@nextui-org/react";
import Header from "./components/header";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="max-h-full w-auto">
      <Header />
      <div className="mt-16">
        {/* Section-1 */}
        <div className="h-[900px] px-28 content-center">
          <div className="flex items-center justify-evenly">
            <div className="w-2/3">
              <h1>Revolutionizing the <br />dynamics of Artificial Intelligence</h1>
              <p className="mt-2">Discovering a scientific architecture to transform the way organizations access, analyze, and synthesize information <br /> by leveraging internal systems and personal vaults.</p>
              <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500 text-white mt-2 px-4 py-1 rounded-md">Learn more</button>
            </div>
            <div>
              <Image
                src="https://accelite.blob.core.windows.net/static/robotface.svg" // Full URL of the external image
                alt="Robot Face"
                width={400} // Set the desired width
                height={100} // Set the desired height
              />
            </div>
          </div>

        </div>



        {/* Section-2 */}
        <div className="h-[400px] content-center">
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
        </div>



      </div>

      <Footer />
    </main>
  );
}
