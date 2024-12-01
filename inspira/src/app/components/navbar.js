// import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu } from "@nextui-org/react";
"use client";

import { NavbarBrand, Navbar, NavbarContent,Link, Dropdown, DropdownMenu, DropdownItem, NavbarItem, DropdownTrigger, Button } from "@nextui-org/react"
import { ChevronDownIcon } from "@heroicons/react/24/outline";

import Image from "next/image";
export default function NavigationBar() {
  return (
    <Navbar>
      <NavbarBrand>
        <Image
          src="https://accelite.blob.core.windows.net/static/logo-prime.png" // Full URL of the external image
          alt="Description of the image"
          width={170} // Set the desired width
          height={170} // Set the desired height
        />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4 mx-4">
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger className="flex">
            <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                endContent={<ChevronDownIcon className="h-3 w-3"/>}
                radius="sm"
                variant="light"
              >
                Features
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-full bg-slate-800"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="autoscaling"
              description="ACME scales apps to meet user demand, automagically, based on load."
            
            >
              Autoscaling
            </DropdownItem>
            <DropdownItem
              key="usage_metrics"
              description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
            >
              Usage Metrics
            </DropdownItem>
            </DropdownMenu>

        </Dropdown>

        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>

      </NavbarContent>
    </Navbar>
  )
}