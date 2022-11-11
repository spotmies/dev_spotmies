import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function MoreProjectsWindow(props) {
  const products = [
    {
      id: 1,
      name: "Asquare GoKarting",
      href: "#",
      price: "$48",
      description:
        "A Square (Go Karting) is an adventurous theme park for youngsters & children with a play arena",
      imageSrc: "/assets/screens/go_karting.png",
      imageAlt:
        "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
      link: "https://play.google.com/store/apps/details?id=com.asquaregokarting",
    },
    {
      description: "Blockchain based background verification platform",
      id: 2,
      name: "Acchedya",
      href: "#",
      price: "$35",
      imageSrc: "/assets/screens/acchedya.png",
      imageAlt:
        "Olive drab green insulated bottle with flared screw lid and flat top.",
      link: "https://acchedya.spotmies.com",
    },
    {
      link: "https://indieskullsyndicate.xyz",
      description: "NFT project for Zooples",
      id: 3,
      name: "Indie skull syndicate",
      href: "#",
      price: "$89",
      imageSrc: "/assets/screens/indies.png",
      imageAlt:
        "Person using a pen to cross a task off a productivity paper card.",
    },
    {
      link: "https://screechnft.xyz",
      description: "Screech NFT project for creators",
      id: 4,
      name: "Screech",
      href: "#",
      price: "$35",
      imageSrc: "/assets/screech_bar_logo.png",
      imageAlt:
        "Hand holding black machined steel mechanical pencil with brass tip and top.",
    },
    {
      link: "https://pumpendump.com",
      description: "Pum pend ump NFT project for creators",
      id: 5,
      name: "Pum pend ump",
      href: "#",
      price: "$48",
      imageSrc: "/assets/screens/pumpendump.png",
      imageAlt:
        "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    },
    {
      link: "https://vihaanelectrix.in",
      description: "Vihaan electrix is a Ecommerence platform for EV",
      id: 6,
      name: "vihaan electrix",
      href: "#",
      price: "$48",
      imageSrc: "/assets/screens/vihaanelectrix.png",
      imageAlt:
        "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    },
    {
      link: "https://www.mrbikes.in/",
      description: "Mr bikes is the no 1 Bike rental service provider",
      id: 7,
      name: "Mr bikes",
      href: "#",
      price: "$48",
      imageSrc: "/assets/screens/mrbikes.png",
      imageAlt:
        "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    },
    {
      link: "http://chaloride.in/",
      description: "Chaloride is a rental platform",
      id: 8,
      name: "Chaloride",
      href: "#",
      price: "$48",
      imageSrc: "/assets/screens/chaloride.png",
      imageAlt:
        "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    },
    // {
    //   description:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    //   id: 9,
    //   name: "Earthen Bottle",
    //   href: "#",
    //   price: "$48",
    //   imageSrc: "/assets/screens/vihaanelectrix.png",
    //   imageAlt:
    //     "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    // },
    // {
    //   description:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    //   id: 10,
    //   name: "Earthen Bottle",
    //   href: "#",
    //   price: "$48",
    //   imageSrc: "/assets/screens/vihaanelectrix.png",
    //   imageAlt:
    //     "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    // },
    // More products...
  ];
  return (
    <div
      id="defaultModal"
      tabindex="-1"
      className="fixed top-0 right-0 left-0 z-50 w-full h-full justify-center items-center flex md:inset-0 h-modal md:h-full justify-center items-center flex "
      aria-modal="true"
      role="dialog"
    >
      <div className="reg-card model-bg-transperant backdrop-blur-lg drop-shadow-lg relative">
        <AiOutlineCloseCircle
          size="2rem"
          color="93bff4"
          className="absolute top-3 right-3 cursor-pointer"
          onClick={() => {
            props?.onClose();
          }}
        />

        <div className="hide-scroll-bar overflow-y-auto overflow-x-hidden h-full ">
          {listProjects()}
        </div>
      </div>
    </div>
  );
  function listProjects() {
    return (
      <div>
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a
                key={product.id}
                href={product.href}
                className="group"
                onClick={() => {
                  window.open(product.link, "_blank");
                }}
              >
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-[200px] object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {product.name}
                </p>
                <h3 className="mt-4 text-sm text-gray-700">
                  {product.description}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
