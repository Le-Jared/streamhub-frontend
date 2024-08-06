import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/shadcn/ui/navigation-menu.tsx";
import { Button } from "@/components/shadcn/ui/button.tsx";
import { Link } from "react-router-dom";
import profileIcon from "/profileicon.svg";
import profileIconBg from "/profileiconbg.svg";
import logo from "/streamhub-logo.svg";

const Navbar = () => {
  const buttonTextFormat = "text-base mx-4";

  return (
    <div className="h-[12.5vh] bg-black flex">
      <NavigationMenu className="font-alatsi text-white">
        <div className="pl-20 pr-0 max-w-64 mr-4">
          <Link to={`/`}>
            <img src={logo} alt="StreamHub Logo" />
          </Link>
        </div>

          <NavigationMenuList className="py-4 flex justify-center">
            <NavigationMenuItem>
              <Button variant="ghost" className={buttonTextFormat} asChild>
                <Link to={`/watch-party/1456`}>Create a Watch Party</Link>
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button variant="ghost" className={buttonTextFormat} asChild>
                <Link to={`/update-profile`}>Update Profile</Link>
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button variant="ghost" className={buttonTextFormat} asChild>
                <Link to={`/contact`}>Contact</Link>
              </Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="ml-auto relative flex items-center mr-20">
          <div className="relative w-12 h-12">
            <img src={profileIcon} alt="Profile Icon Background" className="absolute top-0 left-0 w-12 h-12"/>
            <img src={profileIconBg} alt="Profile Icon" className="absolute top-0 left-0 w-12 h-12"/>
          </div>
        </div>
      </div>
)
  ;
};

export default Navbar;
