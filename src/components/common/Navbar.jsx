"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { NAV_LINKS } from "@/utils/helper";
import Icons from "./Icons";

import { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";
import NavItem from "../NavItem";
import Swal from "sweetalert2";

const Navbar = () => {
  const [hash, setHash] = useState("");
  const [hamburgerState, setHamburgerState] = useState(false);

  useEffect(() => {
    setHash("#home");
  }, []);

  useEffect(() => {
    const updateHash = () => {
      setHash(window.location.hash);
    };

    updateHash();

    window.addEventListener("hashchange", updateHash);

    return () => {
      window.removeEventListener("hashchange", updateHash);
    };
  }, []);

  const handleHamburger = () => {
    setHamburgerState(!hamburgerState);
  };
  const handleQuoteBtn = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your quote has been saved",
      showConfirmButton: true,
    });
  };
  useEffect(() => {
    document.body.style.overflow = hamburgerState ? "hidden" : "auto";
  }, [hamburgerState]);
  return (
    <div className="fixed top-0 z-20 left-0 w-full bg-whity py-3.75 px-4">
      <div className="max-w-285 w-full mx-auto flex justify-between items-center">
        <Link href={"/"} className="z-50">
          <Image
            onClick={() => setHamburgerState(false)}
            src={"/images/webp/logo.webp"}
            height={41}
            width={193}
            alt="logo"
            className="object-cover"
          />
        </Link>
        <AnimatePresence>
          {hamburgerState && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="fixed top-0 left-0 w-screen h-screen bg-whity flex flex-col justify-center items-center gap-8 lg:hidden z-40"
            >
              <ul className="flex flex-col items-center gap-5">
                {NAV_LINKS.map((item, index) => (
                  <motion.li
                    onClick={() => setHamburgerState(false)}
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    className={`leading-160 whitespace-nowrap hover:text-green  ${
                      item.href === pathname ? "text-green" : "text-blacky"
                    } group`}
                  >
                    <a
                      href={`#${item.href}`}
                      onClick={() => setHamburgerState(false)}
                      className={`${
                        item.link === "Services"
                          ? "flex gap-px items-center relative"
                          : ""
                      }`}
                    >
                      {item.link}

                      {item.link === "Services" && (
                        <Icons
                          icon={"arrow"}
                          pathClass={"group-hover:stroke-green"}
                        />
                      )}

                      {item.options && (
                        <div className="grid grid-cols-3 gap-3 absolute bg-whity p-4 rounded-lg -bottom-45 -left-10 text-center opacity-0 group-hover:opacity-100 duration-500 text-blacky ease-in translate-x-50 group-hover:translate-x-0 w-100">
                          {item.options.map((option, i) => (
                            <Link key={i} href={"/"}>
                              {option}
                            </Link>
                          ))}
                        </div>
                      )}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: NAV_LINKS.length * 0.1,
                  duration: 0.3,
                }}
              >
                <Button
                  text={"Get Free Quote"}
                  className={"py-3 px-7 whitespace-nowrap"}
                  variant="primary"
                  onClick={() => setHamburgerState(false)}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="hidden lg:flex xl:gap-31.75 gap-10 items-center">
          <ul className="flex items-center gap-8 border border-black/12 rounded-full px-5 py-1.75 h-fit">
            {NAV_LINKS.map((item, index) => (
              <NavItem key={index} item={item} hash={hash} />
            ))}
          </ul>
          <Button
            onClick={handleQuoteBtn}
            text={"Get Free Quote"}
            className={"py-3 px-7 whitespace-nowrap"}
            variant="primary"
          />
        </div>

        {hamburgerState ? (
          <motion.span
            initial={{
              x: hamburgerState && 100,
              opacity: 0,
            }}
            animate={{ x: hamburgerState && 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="block lg:hidden text-2xl z-50"
            onClick={handleHamburger}
          >
            <RxCross1 />
          </motion.span>
        ) : (
          <span className="block lg:hidden z-50" onClick={handleHamburger}>
            <Icons icon={"hamburger"} />
          </span>
        )}
      </div>
    </div>
  );
};

export default Navbar;
