import Image from "next/image";
export default function Landing() {
  return (
    <main className="relative h-[600px] mt-20 px-4 md:h-[900px] items-center justify-around z-0 max-sm:px-7 md:px-52 md:flex ">
      <div className="max-sm:absolute max-sm:px-7  max-sm:inset-0 content-center backdrop-blur-sm z-0 ">
        <h1 className="text-3xl md:text-5xl font-bold">
          Revolutionizing the <br />dynamics of Artificial Intelligence
        </h1>
        <p className={"mt-2 md:w-3/4"}>Discovering a scientific architecture to transform the way organizations access, analyze, and synthesize information by leveraging internal systems and personal vaults.</p>
        <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500 text-white mt-2 px-4 py-1 rounded-md">Learn more</button>
      </div>
      <div>
        <Image
          className="z-0"
          src="https://accelite.blob.core.windows.net/static/robotface.svg" // Full URL of the external image
          alt="Robot Face"
          width={320}
          height={80}
        />
      </div>
      
    </main>
  );
}
