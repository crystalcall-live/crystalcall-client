
// import MobileNavigation from "./MobileNavigation";

import { Link } from "react-router";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between w-full gap-5 p-6 sm:px-12 border border-b">
      <Link to="/" className="flex items-center gap-1">
        {/* <img
          src="/images/site-logo.svg"
          width={23}
          height={23}
          alt="DevFlow Logo"
        /> */}

        <p className="text-lg font-bold font-space-grotesk max-sm:hidden">
          Crystal<span className="text-primary-500">Call</span>
        </p>
      </Link>

      <div className="flex gap-5">
        {/*
        {session?.user?.id && (
          <UserAvatar
            id={session.user.id}
            name={session.user.name!}
            imageUrl={session.user?.image}
          />
        )} */}
        {/* <MobileNavigation /> */}
      </div>
    </nav>
  );
};

export default NavBar;
