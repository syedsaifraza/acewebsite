"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react"; 
import SectionTitle from "../Common/SectionTitle";

const Mission = () => {

return <>
<section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="We’re on a mission to make building your business"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
            center
          />
          <div className="mb-24 grid grid-cols-1 gap-8 lg:grid-cols-2">
      <div className="w-full">
        <img
          alt="about image"
          loading="lazy"
          width="570"
          height="647"
          decoding="async"
          data-nimg="1"
          style={{ color: 'transparent' }}
          srcSet="https://startup-pro.nextjstemplates.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-1.72694e54.jpg&w=1200&q=75"
          src="https://startup-pro.nextjstemplates.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-1.72694e54.jpg&w=1200&q=75"
        />
      </div>
      <div className="w-full">
        <div className="mb-12 block">
          <img
            alt="about image"
            loading="lazy"
            width="570"
            height="347"
            decoding="async"
            data-nimg="1"
            style={{ color: 'transparent' }}
            srcSet="https://startup-pro.nextjstemplates.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.30a937db.jpg&w=1200&q=75"
            src="https://startup-pro.nextjstemplates.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.30a937db.jpg&w=1200&q=75"
          />
        </div>
        <div className="md:pl-10">
          <div className="mb-10">
            <h3 className="text-center text-[28px] font-semibold leading-snug text-black dark:text-white sm:text-[32px] lg:text-left">
              More than 15k+ companies use our products & services.
            </h3>
          </div>
          <div className="flex w-full items-center">
            <div>
              <h4 className="text-3xl font-bold text-black dark:text-white">14K+</h4>
              <p className="text-base text-body-color dark:text-body-color-dark">Happy Clients</p>
            </div>
            <span className="mx-9 inline-block h-[50px] w-px bg-stroke dark:bg-stroke-dark"></span>
            <div>
              <h4 className="text-3xl font-bold text-black dark:text-white">100%</h4>
              <p className="text-base text-body-color dark:text-body-color-dark">Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </div>
          </div> 
</section>          
</>
}
export default Mission;