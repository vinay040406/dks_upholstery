"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Icons from "./common/Icons";

const NavItem = ({ item, hash }) => {
  const [open, setOpen] = useState(false);

  return (
    <li
      className={`relative leading-160 whitespace-nowrap cursor-pointer group hover:text-green li ${
        item.href === hash ? "text-green" : "text-blacky"
      }`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div
        className={`flex items-center gap-1 ${
          item.link === "Services" ? "relative" : ""
        }`}
      >
        <a href={`${item.href}`}>{item.link}</a>

        {item.link === "Services" && (
          <motion.div
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <Icons
              icon={"arrow"}
              pathClass={` ${hash === "#services" && "stroke-green"} group-hover:stroke-green`}
            />
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {open && item.options && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="absolute -left-60 mt-3 grid grid-cols-3 gap-4 bg-whity p-4 rounded-xl shadow-lg w-160 z-50  "
          >
            {item.options.map((option, i) => (
              <motion.div className="" key={i}>
                <motion.Link
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.85 }}
                  href={"/"}
                  className="duration-200 block w-fit text-black hover:text-green "
                >
                  {option}
                </motion.Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
};

export default NavItem;
