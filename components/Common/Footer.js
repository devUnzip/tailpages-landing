import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";

function Footer() {
  const router = useRouter();
  return (
    <div className="container mt-5 border-t-[1px] border-[#EAECF0] ">
      <div className="grid md:flex md:justify-between py-5">
        <div className="cursor-pointer flex mx-auto md:justify-start md:ml-0">
          <Image layout="fixed" width={137} height={23} onClick={() => router.push("/")} src="/logo.png" alt="Logo" />
        </div>
        <small className="text-secondary text-center mt-2 md:mt-0">
          &copy; 2077 Untitled UI. All rights reserved.
        </small>
      </div>
    </div>
  );
}

export default Footer;