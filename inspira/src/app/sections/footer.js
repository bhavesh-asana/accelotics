"use client"

import { Input } from "@nextui-org/react";

import { ShareIcon, BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
// import { ShareIcon, BuildingOffice2Icon} from '@heroicons/react/24/solid';
import NewsLetter from "../components/newsletter";

export default function Footer() {

  return (
    <main className="self-end mt-12 min-h-full my-4 bottom-0">
      <div>
        <div>
          <hr className="pb-5  border-slate-800 border-t-2" />
        </div>
        <div className="px-4 md:grid md:grid-cols-5 md:px-20 md:space-x-5">
          <div className="md:col-span-3 ">
            <p className="text-justify">A dynamic, innovative, and leading software development company known for its expertise in creating custom solutions tailored to clients' specific needs across various industries. We promise and are dedicated to delivering high-quality, complex software products, ranging from Web applications to Scientific Applications and enterprise systems. Through our customer-centric approach and forward-thinking mindset, Accelotics remains at the forefront of industry trends, driving success for its clients in today's digital landscape.</p>

            <div>
              <p className="py-5 text-lg font-bold inline-block text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500">CONTACT US</p>
            </div>
            <div className=" md:grid md:grid-cols-2 md:gap-4 md:place-content-around">
              {/* Email Details */}
              <div className="flex space-x-4">
                <EnvelopeIcon className="h-6 w-6 text-white" />
                <p>info@accelotics.com</p>
              </div>

              {/* Phone Details */}
              <div className="flex space-x-4 items-center">
                <div>
                  {/* Phone Icon - Imported from heroicons*/}
                  <PhoneIcon className="h-6 w-6 text-white" />
                </div>
                <div>
                  {/* Phone Numbers - India and United States */}
                  <p>IND : +91 (903) 232-7835</p>
                  <p>USA : +1 (812) 360-3100</p>
                </div>
              </div>

              {/* Office location */}
              <div className="flex space-x-4">
                {/* Office location-1 : India Headquarters */}
                <div>
                  {/* BuildingOffice Icon */}
                  <BuildingOffice2Icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  {/* India Location */}

                  <p className="font-bold underline underline-offset-4 decoration-rose-500">INDIA - Corporate Headquarters</p>
                  <p className="">
                    402-E, Venkatadri Heights, Chowdariguda, Korremal,
                    Secunderabad Hyderabad, Telangana, India - 500088.
                  </p>
                </div>
              </div>

              <div className="flex space-x-4">
                {/* Office location-2 : United States */}
                <div>
                  <BuildingOffice2Icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-bold underline underline-offset-4 decoration-blue-500">UNITED STATES</p>
                  <p>
                    18004 Lexington Farms Drive, Alpharetta, Georgia, United States - 30004
                  </p>
                </div>
              </div>
              
            </div>
           
          </div>
          <div className="py-5 md:py-0 md:col-span-2 ">
            <div className="flex space-x-4  md:justify-between">
              <div>
                <ul>
                  <li><p className="text-lg font-bold inline-block text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500 pb-2">Our Products</p></li>
                  <li>Gaines AI</li>
                  <li>Cerbix Cubes (C<sup>2</sup>)</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li><p className="text-lg font-bold inline-block text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500 pb-2">Company</p></li>
                  <li>About Us</li>
                  <li>Blog</li>
                  <li>Careers</li>
                  <li>Partners</li>
                  <li>Press</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li><p className="text-lg font-bold inline-block text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500 pb-2">Legal</p></li>
                  <li>Claim</li>
                  <li>Privacy Policy</li>
                  <li>Terms Statement</li>
                </ul>
              </div>
            </div>
            <NewsLetter />
          </div>

        </div>
        <div>
          <p className="w-auto text-center bg-slate-900 mt-12 text-xs">All rights reserved to Accelotics Technologies (OPC) Private Limited © 2024. <br />No part of this content may be reproduced, distributed, or transmitted without explicit permission.</p>
        </div>
      </div>
    </main>
  )
}