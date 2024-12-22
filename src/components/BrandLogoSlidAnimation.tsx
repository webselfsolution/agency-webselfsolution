import React from "react";
import Image from "next/image";

export default function BrandLogoSlidAnimation() {
  return (
    <>
      <div className="relative z-50 top-[-40px] flex overflow-hidden space-x-8 sm:space-x-12 md:space-x-16 lg:space-x-24 group mask-gradient">
        <div className="flex flex-row space-x-8 sm:space-x-12 md:space-x-16 lg:space-x-24 animate-loop-scroll group-hover:paused">
          <Image
            src="/brandlogo/Appwrite.png"
            className="object-contain shrink-0 self-stretch my-auto"
            width={130}
            height={130}
            style={{ width: "auto", height: "auto" }}
            alt="Appwrite Logo"
          />
          <Image
            src="/brandlogo/Cloudinary.png"
            className="object-contain shrink-0 self-stretch my-auto"
            width={130}
            height={130}
            style={{ width: "auto", height: "auto" }}
            alt="Cloudinary Logo"
          />
          <Image
            src="/brandlogo/Docker.png"
            className="object-contain shrink-0 self-stretch my-auto"
            width={130}
            height={130}
            style={{ width: "auto", height: "auto" }}
            alt="Docker Logo"
          />
          <Image
            src="/brandlogo/Hostinger.png"
            className="object-contain shrink-0 self-stretch my-auto"
            width={130}
            height={130}
            style={{ width: "auto", height: "auto" }}
            alt="Hostinger Logo"
          />
          <Image
            src="/brandlogo/logo.svg"
            className="object-contain shrink-0 self-stretch my-auto"
            width={130}
            height={130}
            style={{ width: "auto", height: "auto" }}
            alt="Logo"
          />
          <Image
            src="/brandlogo/Appwrite.png"
            className="object-contain shrink-0 self-stretch my-auto"
            width={130}
            height={130}
            style={{ width: "auto", height: "auto" }}
            alt="Appwrite Logo"
          />
          <Image
            src="/brandlogo/Cloudinary.png"
            className="object-contain shrink-0 self-stretch my-auto"
            width={130}
            height={130}
            style={{ width: "auto", height: "auto" }}
            alt="Cloudinary Logo"
          />
        </div>
      </div>
    </>
  );
}
