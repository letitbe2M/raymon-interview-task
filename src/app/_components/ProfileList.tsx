import { Suspense } from "react";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import About from "./About";

type Props = {
  type: string;
};

const ProfileList = ({ type }: Props) => {
  switch (type) {
    case "services":
      return (
        <Suspense fallback={<div>loading...</div>}>
          <Services />
        </Suspense>
      );
    case "portfolio":
      return (
        <Suspense fallback={<div>loading...</div>}>
          <Portfolio />
        </Suspense>
      );
    case "contact":
      return (
        <Suspense fallback={<div>loading...</div>}>
          <Contact />
        </Suspense>
      );
    default:
      return (
        <Suspense fallback={<div>loading...</div>}>
          <About />
        </Suspense>
      );
  }
};

export default ProfileList;
