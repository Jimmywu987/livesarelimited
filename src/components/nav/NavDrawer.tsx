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
              {LINKS.map((link) => {
                if (link.children === "服務範圍") {
                  return (
                    <div key={link.children}>
                      <Link
                        {...link}
                        className="text-lg text-text-second font-bold"
                        onClick={() => {
                          onClose();
                        }}
                      />
                      <div className="flex flex-col ml-4 space-y-2 my-4">
                        <Link
                          href="/services/cleaning"
                          className="text-lg text-text-second"
                          onClick={() => {
                            onClose();
                          }}
                        >
                          遺宅清潔
                        </Link>
                        <Link
                          href="/services/planning"
                          className="text-lg text-text-second"
                          onClick={() => {
                            onClose();
                          }}
                        >
                          禮儀規劃
                        </Link>
                        <Link
                          href="/services/education"
                          className="text-lg text-text-second"
                          onClick={() => {
                            onClose();
                          }}
                        >
                          生死教育
                        </Link>
                      </div>
                    </div>
                  );
                }

                return (
                  <NavDrawerItem
                    key={link.children}
                    {...link}
                    onClick={() => {
                      onClose();
                    }}
                  />
                );
              })}
            </div>

            <Button
              className="text-white bg-theme-secondary hover:bg-theme-one/90 font-medium my-6"
              size="lg"
            >
              {" "}
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSfWCVI-rnwQ0GjFOQEb_NUhlqgdAQW9t3GktMWaE1_7QMRvcw/viewform?pli=1"
                target="_blank"
              >
                查詢服務
              </Link>
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
