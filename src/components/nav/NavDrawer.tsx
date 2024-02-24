"use client";

import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";

import { Button } from "@/components/ui/buttons/Button";
import { HamburgerIcon } from "@chakra-ui/icons";
import { LINKS } from "@/components/nav/Navbar";
import Link from "next/link";
import { NavDrawerItem } from "@/components/nav/NavDrawerItem";

export const NavDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  console.log("isOpen", isOpen);
  return (
    <>
      <HamburgerIcon
        onClick={onOpen}
        w={22}
        h={22}
        className="text-theme-primary cursor-pointer"
      />

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>

          <DrawerBody className="flex flex-col justify-between">
            <div className="flex flex-col space-y-4 mt-6">
              {LINKS.map((link) => (
                <NavDrawerItem {...link} key={link.itemText} />
              ))}
            </div>
            <Button
              className="text-white bg-theme-secondary hover:bg-theme-one/90 font-medium my-6"
              size="lg"
            >
              查詢服務
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
