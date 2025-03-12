import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

interface CarouselProps {
  productDetails: {
    galleryImages: {
      src: string;
    }[];
  };
}

export default function Example({ productDetails }: CarouselProps) {
  return (
    <div className="bg-black py-5 sm:hidden block">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          {/* Image gallery */}
          <TabGroup className="flex flex-col-reverse">
            {/* Image selector */}
            <div className="mx-auto mt-6 w-full max-w-2xl sm:block lg:max-w-none">
              <TabList className="grid grid-cols-4 gap-4">
                {productDetails.galleryImages.map((image, index) => (
                  <Tab
                    key={index}
                    className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-gray-100 text-sm font-medium hover:bg-gray-50 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-4"
                  >
                    <span className="absolute inset-0 overflow-hidden rounded-md">
                      <img
                        src={image.src}
                        alt={`Product thumbnail ${index + 1}`}
                        width={96}
                        height={96}
                        className="h-full w-full object-cover object-center"
                      />
                    </span>
                    <span
                      className="pointer-events-none absolute inset-0 rounded-md ring-2 ring-transparent ring-offset-2 group-data-[selected]:ring-yellow-500"
                      aria-hidden="true"
                    />
                  </Tab>
                ))}
              </TabList>
            </div>

            <TabPanels className="aspect-square w-full">
              {productDetails.galleryImages.map((image, index) => (
                <TabPanel key={index} className="relative h-full">
                  <img
                    src={image.src}
                    alt={`Product image ${index + 1}`}
                    width={800}
                    height={800}
                    className="h-full w-full object-cover object-center sm:rounded-lg"
                  />
                </TabPanel>
              ))}
            </TabPanels>
          </TabGroup>
        </div>
      </div>
    </div>
  );
}
