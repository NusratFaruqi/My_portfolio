"use client";
import React, { useState } from "react";
import { IoIosCloudDone } from "react-icons/io";
import { useRouter } from "next/navigation";

const Project = () => {
  const router = useRouter();
  console.log(router);

  const [activeTab, setActiveTab] = useState("Graphic Design");
  const [showAllImages, setShowAllImages] = useState(false);

  const handleTabClick = (category) => {
    setActiveTab(category);
  };

  const handleSeeAllClick = () => {
    setShowAllImages(true);
  };

  const handleShowLessClick = () => {
    setShowAllImages(false);
  };
  return (
    <div id="Project">
      <div className="container mx-auto px-4 md:pb-10 md:pt-32">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:opacity-80 duration-100 mb-10 text-center">
          My Project
        </h1>
        <div className="flex mb-4 justify-center">
          <button
            onClick={() => handleTabClick("Graphic Design")}
            className={`mr-4 p-2 rounded font-semibold text-white ${
              activeTab === "Graphic Design"
                ? "bg-gradient-to-r from-purple-300 to-purple-600 hover:opacity-80 duration-100"
                : "bg-gray-700"
            }`}
          >
            Graphic Design
          </button>
          <button
            onClick={() => handleTabClick("Software Development")}
            className={`mr-4 p-2 rounded font-semibold text-white ${
              activeTab === "Software Development"
                ? "bg-gradient-to-r from-purple-300 to-purple-600 hover:opacity-80 duration-100"
                : "bg-gray-700"
            }`}
          >
            Software Development
          </button>
          <button
            onClick={() => handleTabClick("Content Writing")}
            className={`mr-4 p-2 rounded font-semibold text-white ${
              activeTab === "Content Writing"
                ? "bg-gradient-to-r from-purple-300 to-purple-600 hover:opacity-80 duration-100"
                : "bg-gray-700"
            }`}
          >
            Content Writing
          </button>
          <button
            onClick={() => handleTabClick("Research")}
            className={`mr-4 p-2 rounded font-semibold text-white ${
              activeTab === "Research"
                ? "bg-gradient-to-r from-purple-300 to-purple-600 hover:opacity-80 duration-100"
                : "bg-gray-700"
            }`}
          >
            Research
          </button>
        </div>

        {activeTab === "Graphic Design" && (
          <section className="py-6">
            <div className="container flex flex-col justify-center p-4 mx-auto">
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2 relative text-white">
                {showAllImages ? ( // Check if showAllImages is true
                  <>
                    <div className="relative">
                      <img
                        className="object-cover w-full aspect-square"
                        src="/1 (1).jpg"
                        alt="Design 1"
                      />
                    </div>
                    <div className="relative">
                      <img
                        className="object-cover w-full aspect-square"
                        src="/1 (2).jpg"
                        alt="Design 2"
                      />
                    </div>
                    <div className="relative">
                      <img
                        className="object-cover w-full  aspect-square"
                        src="/1 (3).jpg"
                        alt="Design 3"
                      />
                    </div>
                    <div className="relative">
                      <img
                        className="object-cover w-full  aspect-square"
                        src="/1 (4).jpg"
                        alt="Design 4"
                      />
                    </div>
                    <div className="relative">
                      <img
                        className="object-cover w-full  aspect-square"
                        src="/1 (5).jpg"
                        alt="Design 5"
                      />
                    </div>
                    <div className="relative">
                      <img
                        className="object-cover w-full  aspect-square"
                        src="/1 (6).jpg"
                        alt="Design 6"
                      />
                    </div>
                    <div className="relative">
                      <img
                        className="object-cover w-full  aspect-square"
                        src="/1 (7).jpg"
                        alt="Design 7"
                      />
                    </div>
                    <div className="relative">
                      <img
                        className="object-cover w-full  aspect-square"
                        src="/1 (8).png"
                        alt="Design 8"
                      />
                    </div>
                    <div className="relative">
                      <img
                        className="object-cover w-full  aspect-square"
                        src="/1 (9).png"
                        alt="Design 9"
                      />
                    </div>
                    <div className="relative">
                      <img
                        className="object-cover w-full  aspect-square"
                        src="/1 (10).png"
                        alt="Design 10"
                      />
                    </div>
                    <div className="relative">
                      <img
                        className="object-cover w-full  aspect-square"
                        src="/1 (11).png"
                        alt="Design 11"
                      />
                    </div>
                    <div className="relative">
                      <img
                        className="object-cover w-full  aspect-square"
                        src="/1 (12).png"
                        alt="Design 12"
                      />
                    </div>
                    <div className="relative">
                      <img
                        className="object-cover w-full  aspect-square"
                        src="/1 (13).jpg"
                        alt="Design 13"
                      />
                    </div>
                    <div className="relative">
                      <img
                        className="object-cover w-full  aspect-square"
                        src="/1 (14).png"
                        alt="Design 14"
                      />
                    </div>
                    <div className="relative">
                      <img
                        className="object-cover w-full  aspect-square"
                        src="/1 (15).jpg"
                        alt="Design 15"
                      />
                    </div>
                    <div className="relative">
                      <img
                        className="object-cover w-full  aspect-square"
                        src="/banner1.jpg"
                        alt="Design 15"
                      />
                    </div>
                    <div className="relative">
                      <img
                        className="object-cover w-full  aspect-square"
                        src="banner2.jpg"
                        alt="Design 15"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="relative ">
                      <img
                        className="object-cover w-full aspect-square"
                        src="/figma.png"
                        alt="Design 1"
                      />
                      <a
                        href="https://www.figma.com/proto/qG4m5G1XZonG9aaTXPBUop/Untitled?node-id=87-5&starting-point-node-id=87%3A5&scaling=scale-down-width"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-semibold bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:opacity-80 duration-100  py-2 px-4 rounded text-center"
                      >
                        Go to Figma
                      </a>
                    </div>
                    <div className="relative">
                      <img
                        className="object-cover w-full aspect-square"
                        src="/1 (1).jpg"
                        alt="Design 2"
                      />
                    </div>
                    <div className="relative">
                      <img
                        className="object-cover w-full aspect-square"
                        src="/1 (2).jpg"
                        alt="Design 3"
                      />
                    </div>
                    <div className="relative">
                      <img
                        className="object-cover w-full aspect-square"
                        src="/1 (3).jpg"
                        alt="Design 4"
                      />
                    </div>
                  </>
                )}
              </div>
              {!showAllImages && (
                <div className="flex justify-center mt-4">
                  {" "}
                  {/* Center the button */}
                  <button
                    onClick={handleSeeAllClick}
                    className="p-2 font-semibold bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:opacity-80 duration-100 rounded-md text-white"
                  >
                    See All
                  </button>
                </div>
              )}
              {showAllImages && (
                <div className="flex justify-center mt-4">
                  {" "}
                  {/* Center the button */}
                  <a href="#Project">
                    <button
                      onClick={handleShowLessClick}
                      className="p-2 font-semibold bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:opacity-80 duration-100 rounded-md text-white"
                    >
                      See Less
                    </button>
                  </a>
                </div>
              )}
            </div>
          </section>
        )}

        {activeTab === "Content Writing" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Content Section 1 */}
            <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm text-white bg-[#18181818]">
              <div className="flex items-center justify-between">
                <span className="text-sm">May 1, 2021</span>
              </div>
              <div className="mt-3">
                <a
                  onClick={() => router.push("/pages/blog1")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl cursor-pointer font-bold hover:underline"
                >
                  COSRX Aloe Soothing Sun Cream: The Best Sun Protection
                </a>
                <p className="mt-2">
                  When it comes to safeguarding our skin against the harmful
                  effects of UV rays, selecting the right sunscreen is of utmost
                  importance...
                </p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div>{/* No Live Demo link for Content Writing */}</div>
              </div>
            </div>

            {/* Content Section 2 */}
            <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm text-white bg-[#18181818]">
              <div className="flex items-center justify-between">
                <span className="text-sm">July 11, 2022</span>
              </div>
              <div className="mt-3">
                <a
                  onClick={(func) => router.push(`../pages/blog2`)}
                  rel="noopener noreferrer"
                  href="#"
                  className="text-2xl  font-bold hover:underline"
                >
                  Low pH Good Morning Gel Cleanser Introduction
                </a>
                <p className="mt-2">
                  The Low pH Good Morning Gel Cleanser is undoubtedly a vital
                  step in achieving healthy and radiant-looking skin when ....
                </p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div>{/* No Live Demo link for Content Writing */}</div>
              </div>
            </div>

            {/* Content Section 3 */}
            <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg text-white shadow-sm bg-[#18181818]">
              <div className="flex items-center justify-between">
                <span className="text-sm">Sep 12, 2023</span>
              </div>
              <div className="mt-3">
                <a
                  onClick={(func) => router.push(`../pages/blog3`)}
                  rel="noopener noreferrer"
                  href="#"
                  className="text-2xl font-bold hover:underline"
                >
                  Cosrx BHA Blackhead Power Liquid: Get Clear, Radiant Skin with
                  this Amazing Product
                </a>
                <p className="mt-2">
                  Are you tired of battling stubborn blackheads and longing for
                  clear, radiant skin? ....
                </p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div>{/* No Live Demo link for Content Writing */}</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "Software Development" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-white">
            {/* Project Card 1 */}
            <div className="max-w-xs relative flex flex-col  p-6 space-y-8 mx-auto">
              <div className="relative rounded-t-md h-72 overflow-hidden">
                <img
                  src="/web.png"
                  alt="Project 5"
                  className="object-cover object-center w-full h-full"
                />
                <p></p>
                <a
                  href="https://interio-56kbyhnd6-nusratfaruqi.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 p-2 font-semibold bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:opacity-80 duration-100 rounded-md text-white mr-16"
                >
                  Live Demo
                </a>
              </div>
              <p>
                My interior project is a fusion of beauty and functionality,
                tailored to mirror my unique style and requirements. It's a
                space where design harmonizes with practicality, enhancing daily
                life with joy and comfort.
              </p>
            </div>
            {/* Project Card 2 */}
            <div className="max-w-xs flex flex-col  p-6 space-y-8 mx-auto">
              <img
                src="/mobile.png"
                alt="Project 6"
                className="object-cover object-center w-full rounded-t-md h-72"
              />
              <p>
                Introducing my Android app, focused entirely on streamlined
                sales record management. Seamlessly track, analyze, and optimize
                your sales data with ease. Elevate your business with this
                powerful tool, designed to enhance efficiency and drive success
                in every transaction.
              </p>
            </div>
            {/* Project Card 3 */}
            <div className="max-w-xs relative flex flex-col p-6 space-y-8 mx-auto">
              <div className="relative rounded-t-md h-72 overflow-hidden">
                <img
                  src="/web5.png"
                  alt="Project 5"
                  className="object-cover object-center w-full h-full"
                />
                <p></p>
                <a
                  href="https://nusratfaruqi.github.io/restaurant/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 p-2 font-semibold bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:opacity-80 duration-100 rounded-md text-white mr-16"
                >
                  Live Demo
                </a>
              </div>
              <p>
                Indulge in a culinary adventure with my Food Delivery website!
                Each bite narrates a tale of flavor and passion. Order now and
                embark on a delightful journey through taste. Savor the moment,
                one dish at a time. Welcome to a world where every bite tells a
                story!
              </p>
            </div>
            {/* Project Card 4 */}
            <div className="max-w-xs relative flex flex-col  p-6 space-y-8 mx-auto">
              <div className="relative rounded-t-md h-72 overflow-hidden">
                <img
                  src="/web4.png"
                  alt="Project 5"
                  className="object-cover object-center w-full h-full"
                />
                <p></p>
                <a
                  href="https://nusratfaruqi.github.io/beautyproducts/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 p-2 font-semibold bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:opacity-80 duration-100 rounded-md text-white mr-16"
                >
                  Live Demo
                </a>
              </div>
              <p>
                Welcome to our Beauty Product website, your ultimate haven for
                all things glamorous and skincare. Step into a world of
                enchanting cosmetics, essential skincare, and captivating
                fragrances that celebrate your innate beauty. Discover the magic
                within, one product at a time!
              </p>
            </div>
          </div>
        )}

        {activeTab === "Research" && (
          <div className="flex items-center p-6 space-x-4 rounded-md justify-center text-white">
            <div className="flex items-center self-stretch justify-center ">
              <IoIosCloudDone className="text-purple-300" size={32} />
            </div>
            <span>
              I am right now doing three papers for journal on deep learning.
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
