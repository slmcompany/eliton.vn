import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

const product = {
  name: "Zip Tote Basket",
  price: "$140",
  rating: 4,
  images: [
    {
      id: 1,
      name: "Angled view",
      src: "/images/combo/eli01/eli01-1.png",
      alt: "Angled front view with bag zipped and handles upright.",
    },
    {
      id: 1,
      name: "Angled view",
      src: "/images/combo/eli01/eli01-2.png",
      alt: "Angled front view with bag zipped and handles upright.",
    },
    // {
    //   id: 1,
    //   name: "Angled view",
    //   src: "/images/combo/eli01/eli01-3.jpg",
      
    //   alt: "Angled front view with bag zipped and handles upright.",
    // },
    {
      id: 1,
      name: "Angled view",
      src: "/images/combo/eli01/eli01-4.jpg",
      
      alt: "Angled front view with bag zipped and handles upright.",
    },
    {
      id: 1,
      name: "Angled view",
      src: "/images/thiet-bi/Fuji-TorinDrive.png",
      alt: "Angled front view with bag zipped and handles upright.",
    },
  ],
};

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

export default function Example() {
  return (
    <div className="bg-black py-5">
      <div className="mx-auto max-w-2xl  sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          {/* Image gallery */}
          <TabGroup className="flex flex-col-reverse">
            {/* Image selector */}
            <div className="mx-auto mt-6  w-full max-w-2xl sm:block lg:max-w-none px-4">
              <TabList className="grid grid-cols-4 gap-6">
                {product.images.map((image) => (
                  <Tab
                    key={image.id}
                    className="group relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-black text-sm font-medium uppercase text-gray-900  focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-4"
                  >
                    <span className="sr-only">{image.name}</span>
                    <span className="absolute inset-0 overflow-hidden rounded-md">
                      <img
                        alt=""
                        src={image.src}
                        className="size-full object-cover"
                      />
                    </span>
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 rounded-md ring-2 ring-transparent ring-offset-2 group-data-[selected]:ring-yellow-500"
                    />
                  </Tab>
                ))}
              </TabList>
            </div>

            <TabPanels>
              {product.images.map((image) => (
                <TabPanel key={image.id}>
                  <img
                    alt={image.alt}
                    src={image.src}
                    className="aspect-square w-full object-cover sm:rounded-lg"
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
