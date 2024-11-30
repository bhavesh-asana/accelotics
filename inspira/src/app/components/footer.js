export default function Footer() {
  return (
    <main className="self-end mt-12 min-h-full my-4 bottom-0">
      <div className="grid grid-cols-5 px-20 space-x-7 max-h-full ">
        <div className="col-span-3">
          <p>A dynamic, innovative, and leading software development company known for its expertise in creating custom solutions tailored to clients' specific needs across various industries. We promise and are dedicated to delivering high-quality, complex software products, ranging from Web applications to Scientific Applications and enterprise systems. Through our customer-centric approach and forward-thinking mindset, Accelotics remains at the forefront of industry trends, driving success for its clients in today's digital landscape.</p>
          <div>
            <p className="text-lg font-bold inline-block text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500">Contact Us</p>


            <ul>
              <li className="flex place-items-center space-x-2">
                <div>logo</div>
                <div>402-E, Venkatadri Heights, Chowdariguda, Korremal,<br />
                  Secunderabad Hyderabad, Telangana, India - 500088.</div>
              </li>
              <li className="flex place-items-center space-x-2">
                <div>logo</div>
                <div>info@accelotics.com</div>
              </li>
              <li className="flex place-items-center space-x-2">
                <div>logo</div>
                <div>+91 (903) 232-7835</div>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-2 pl-7">
          <div className="flex space-x-14">
            <ul>
              <li><p className="text-lg font-bold inline-block text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500 pb-2">Our Products</p></li>
              <li>Gaines AI</li>
              <li>Cerbix Cubes (C2)</li>
            </ul>
            <ul>
              <li><p className="text-lg font-bold inline-block text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500 pb-2">Company</p></li>
              <li>About Us</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Partners</li>
              <li>Press</li>
            </ul>
            <ul>
              <li><p className="text-lg font-bold inline-block text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500 pb-2">Legal</p></li>
              <li>Claim</li>
              <li>Privacy Policy</li>
              <li>Terms Statement</li>
            </ul>
          </div>
          <div className="py-8">
          <p className="text-lg font-bold inline-block text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500 pb-2">NEWS LETTER</p>
          <p>Stay updated with our latest innovations, industry insights, and exclusive updates. Join our newsletter for inspiring stories and global solutions!</p>
          </div>
        </div>
      </div>
      <div>
        <p className="w-auto text-center bg-slate-900">All rights reserved to Accelotics Technologies (OPC) Private Limited</p>
      </div>
    </main>
  )
}