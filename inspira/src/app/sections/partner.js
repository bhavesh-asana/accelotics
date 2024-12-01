import Image from "next/image";
export default function Partner() {
  return (
    <main className="h-[300px] md:h-[400px] content-center place-items-center">
      <div className="text-center place-items-center">
        <h2 className="text-2xl md:text-4xl font-bold">Our Partners</h2>
        <p className="p-4 md:w-3/5 md:p-5">
          At Accelotics, our success is built on the foundation of strong and collaborative partnerships. We take pride in working with a diverse network of organizations, industry leaders, and innovators who share our vision of driving technological excellence and transforming ideas into impactful global solutions.
        </p>
      </div>
      <div>
        <Image
          src="https://accelite.blob.core.windows.net/static/alphalogo.png" // Full URL of the external image
          alt="Description of the image"
          width={280} // Set the desired width
          height={170} // Set the desired height
        />
      </div>
    </main>
  )
}