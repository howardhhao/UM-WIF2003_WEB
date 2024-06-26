import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { useUserContext } from "../../context/UserContext";

import ProfileImage from "../community/ProfileImage";

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 400, damping: 48 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export default function UserProfileMenu({ profilePic, handleSignOut }) {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUserContext();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="tw-relative tw-flex tw-items-center tw-gap-3">
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className="tw-relative tw-cursor-pointer"
        onClick={toggleMenu}
        whileTap={{ scale: 0.85 }}
      >
        <ProfileImage
          user={user}
          alt="profile-image"
          className="tw-h-12 tw-w-12 tw-border-4 tw-border-gray-300"
        />
      </motion.div>

      <motion.ul
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
        className="tw-w-[10vw] tw-absolute tw-top-full tw-right-0 tw-mt-2 tw-w-48tw-rounded-md tw-bg-slate-100"
      >
        <motion.li variants={itemVariants}>
          <Link
             to={`/Profile/${user._id}`}
            className="tw-block tw-px-4 tw-py-2 tw-text-gray-700 hover:tw-bg-slate-300 tw-transition"
          >
            <FontAwesomeIcon icon={faUser} className="mr-10" />
            <span className="tw-ml-3">Profile</span>
          </Link>
        </motion.li>
        <motion.li variants={itemVariants}>
          <button
            onClick={handleSignOut}
            className="tw-block tw-w-full tw-text-left tw-px-4 tw-py-2 tw-text-gray-700 hover:tw-bg-slate-300"
          >
            <FontAwesomeIcon icon={faSignOutAlt} />
            <span className="tw-ml-3">Logout</span>
          </button>
        </motion.li>
      </motion.ul>
    </div>
  );
}
