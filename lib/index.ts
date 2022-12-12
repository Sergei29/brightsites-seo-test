import { Enitity, ProductData, Extra, ArticleType } from "../types";

export const getExtraAndProducts = (data: ArticleType) => {};

export const getData = (data: ArticleType) => {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [{ "@type": "ListItem", position: "1" }],
  };
};

const products: Enitity<ProductData>[] = [
  {
    type: "product",
    data: {
      title: "Samsung galaxy A53",
      id: 32645,
      uuid: "87bbbab3-0aa1-4dc9-99fb-f98544a99f42",
      stats: {
        publication_id: 1,
        affiliate_match: 1,
        link_http_code: 503,
        out_of_stock: 0,
        timestamp: 1661184716,
        date: "2022-08-22 17:11:56",
      },
      remoteID: null,
      vendorName: "Amazon.co.uk",
      price: "303.00",
      vendorLink:
        "http://buy.geni.us/Proxy.ashx?tsid=3658&GR_URL=https%3A%2F%2Fwww.amazon.co.uk%2FSamsung-Galaxy-Mobile-Android-Smartphone%2Fdp%2FB09QH3JT6P%3Fascsubtag%3DIN%7C1843598%7CB09QH3JT6P%23isAffiliate",
      priceComparison:
        "https://www.amazon.co.uk/Samsung-Galaxy-Mobile-Android-Smartphone/dp/B09QH3JT6P",
      image: {
        type: "image",
        data: {
          title: "samsung galaxy a53 5g",
          description: "samsung galaxy a53 5g",
          caption: null,
          copyright: "Samsung",
          credit: null,
          alt: null,
          doNotReuse: false,
          url: "https://static.independent.co.uk/2022/08/19/13/samsung%20galaxy%20a53%205g.png",
          id: null,
          bundle: "remote_image",
          mid: 2746748,
          changed: "1660910864",
          created: "1660910864",
          uid: 4263,
          workflow: {
            name: "Published",
            id: 62,
            uuid: "312eeebb-ed05-4519-99a5-3a48c2856a46",
            firstLetter: "p",
          },
          extra: {
            imageSize: {
              width: 2048,
              height: 1536,
            },
          },
        },
      },
      body: [
        {
          type: "markup",
          data: {
            markup:
              "<p>Best known for producing flagship premium devices at the top-end of the price spectrum, Samsung also makes some of the best budget smartphones you can buy. </p>",
          },
        },
        {
          type: "markup",
          data: {
            markup:
              "<p>The Samsung Galaxy A53 sports a stylish design and is excellent value for money, cramming in high-spec features such as a great-looking Amoled screen with a smooth 120Hz refresh rate and a camera array that runs rings around other phones at this price.</p>",
          },
        },
        {
          type: "markup",
          data: {
            markup:
              "<p>To keep the price this low, the Samsung Galaxy A53 runs on a relatively slow processor with poor battery efficiency, so performance and battery life take a small hit compared to pricier Galaxy phones. Overall, however, this is an attractive and affordable phone at an unbeatable price.</p>",
          },
        },
      ],
      extra: {
        brand: "Samsung",
        model: "Galaxy A53",
        bestFor: "Overall",
        productId: "B09QH3JT6P",
        productIdType: "ASIN",
        rating: "4.5",
        priceComparisonProvider: "monetizer",
        information: {
          productSpec: [
            {
              value: "159mm x 75mm x 8mm",
              key: "Size",
            },
            {
              value: "189g",
              key: "Weight",
            },
            {
              value: "6.5in Amoled, 120Hz",
              key: "Screen",
            },
            {
              value: "64MP wide, 12MP ultrawide, 5MP macro, 5MP depth",
              key: "Camera (rear)",
            },
            {
              value: "32MP",
              key: "Camera (selfie)",
            },
            {
              value: "128GB/256GB",
              key: "Storage",
            },
            {
              value: "4GB/6GB/8GB",
              key: "RAM",
            },
            {
              value: "Yes",
              key: "5G",
            },
          ],
          pros: {
            pros: [
              "Stunning screen",
              "Quality cameras",
              "Five years of security updates",
            ],
          },
          cons: {
            cons: ["No wireless charging", "Average performance"],
            title: "",
          },
        },
      },
      created: "1660753549",
      changed: "1661184716",
      brand: "Samsung",
      model: "Galaxy A53",
      bestFor: "Overall",
      productId: "B09QH3JT6P",
      productIdType: "ASIN",
      rating: "4.5",
      priceComparisonProvider: "monetizer",
      information: {
        productSpec: [
          {
            value: "159mm x 75mm x 8mm",
            key: "Size",
          },
          {
            value: "189g",
            key: "Weight",
          },
          {
            value: "6.5in Amoled, 120Hz",
            key: "Screen",
          },
          {
            value: "64MP wide, 12MP ultrawide, 5MP macro, 5MP depth",
            key: "Camera (rear)",
          },
          {
            value: "32MP",
            key: "Camera (selfie)",
          },
          {
            value: "128GB/256GB",
            key: "Storage",
          },
          {
            value: "4GB/6GB/8GB",
            key: "RAM",
          },
          {
            value: "Yes",
            key: "5G",
          },
        ],
        pros: {
          pros: [
            "Stunning screen",
            "Quality cameras",
            "Five years of security updates",
          ],
        },
        cons: {
          cons: ["No wireless charging", "Average performance"],
          title: "",
        },
      },
    },
  },
  {
    type: "product",
    data: {
      title: "Google pixel 6a",
      id: 32646,
      uuid: "e0253798-f5be-432b-80e2-11402f352d96",
      stats: {
        publication_id: 1,
        affiliate_match: 1,
        link_http_code: 503,
        out_of_stock: 0,
        timestamp: 1661184648,
        date: "2022-08-22 17:10:48",
      },
      remoteID: null,
      vendorName: "Amazon.co.uk",
      price: "394.49",
      vendorLink:
        "http://buy.geni.us/Proxy.ashx?tsid=3658&GR_URL=https%3A%2F%2Fwww.amazon.co.uk%2FGoogle-Pixel-6a-Smartphone-megapixel%2Fdp%2FB0B4DMBH5T%3Fascsubtag%3DIN%7C1843598%7CB0B4DMBH5T%23isAffiliate",
      priceComparison:
        "https://www.amazon.co.uk/Google-Pixel-6a-Smartphone-megapixel/dp/B0B4DMBH5T",
      image: {
        type: "image",
        data: {
          title: "google pixel 6a",
          description: "google pixel 6a",
          caption: null,
          copyright: "Google",
          credit: null,
          alt: null,
          doNotReuse: false,
          url: "https://static.independent.co.uk/2022/08/19/13/google%20pixel%206a.png",
          id: null,
          bundle: "remote_image",
          mid: 2746743,
          changed: "1660910575",
          created: "1660910575",
          uid: 4263,
          workflow: {
            name: "Published",
            id: 62,
            uuid: "312eeebb-ed05-4519-99a5-3a48c2856a46",
            firstLetter: "p",
          },
          extra: {
            imageSize: {
              width: 2048,
              height: 1536,
            },
          },
        },
      },
      body: [
        {
          type: "markup",
          data: {
            markup:
              "<p>Offering all the coolest features of a Google-made phone in a device costing less than £400, the Pixel 6a is a scaled-back version of the more expensive Pixel 6 and Pixel 6 pro.</p>",
          },
        },
        {
          type: "markup",
          data: {
            markup:
              "<p>That means you get the customisable Material You interface, a host of clever photo-editing features, adaptive battery life and Google Assistant smarts, all packed into a 5G phone powered by the same Tensor chip as its larger siblings.</p>",
          },
        },
        {
          type: "markup",
          data: {
            markup:
              "<p>“The 6.1in Pixel 6a is a pocket-friendly phone in the figurative sense as well as the literal one,” we said in our review. “For £399, it unlocks access to the full suite of Pixel-exclusive features while trimming away some of the super high-end hardware that makes pricey flagships of the Pixel 6 and Pixel 6 pro.”</p>",
          },
        },
        {
          type: "markup",
          data: {
            markup:
              '<p><a href="https://www.independent.co.uk/extras/indybest/gadgets-tech/phones-accessories/google-pixel-6a-phone-review-b2129205.html">Read the full Google Pixel 6a review</a></p>',
          },
        },
      ],
      extra: {
        brand: "Google",
        model: "Pixel 6a",
        bestFor: "Budget Pixel phone",
        rating: "4",
        priceComparisonProvider: "monetizer",
        information: {
          productSpec: [
            {
              value: "152mm x 72mm x 9mm",
              key: "Size",
            },
            {
              value: "178g",
              key: "Weight",
            },
            {
              value: "6.1in OLED, 60Hz",
              key: "Screen",
            },
            {
              value: "12MP wide, 12MP ultrawide",
              key: "Camera (rear)",
            },
            {
              value: "8MP",
              key: "Camera (selfie)",
            },
            {
              value: "128GB",
              key: "Storage",
            },
            {
              value: "6GB",
              key: "RAM",
            },
            {
              value: "Yes",
              key: "5G",
            },
          ],
          pros: {
            pros: [
              "Great performance",
              "Same Tensor chip as more expensive Pixels",
              "Clever Google Assistant features",
            ],
          },
          cons: {
            cons: ["Only 60Hz display"],
            title: "",
          },
        },
      },
      created: "1660753552",
      changed: "1661184647",
      brand: "Google",
      model: "Pixel 6a",
      bestFor: "Budget Pixel phone",
      rating: "4",
      priceComparisonProvider: "monetizer",
      information: {
        productSpec: [
          {
            value: "152mm x 72mm x 9mm",
            key: "Size",
          },
          {
            value: "178g",
            key: "Weight",
          },
          {
            value: "6.1in OLED, 60Hz",
            key: "Screen",
          },
          {
            value: "12MP wide, 12MP ultrawide",
            key: "Camera (rear)",
          },
          {
            value: "8MP",
            key: "Camera (selfie)",
          },
          {
            value: "128GB",
            key: "Storage",
          },
          {
            value: "6GB",
            key: "RAM",
          },
          {
            value: "Yes",
            key: "5G",
          },
        ],
        pros: {
          pros: [
            "Great performance",
            "Same Tensor chip as more expensive Pixels",
            "Clever Google Assistant features",
          ],
        },
        cons: {
          cons: ["Only 60Hz display"],
          title: "",
        },
      },
    },
  },
  {
    type: "product",
    data: {
      title: "Xiaomi redmi note 11 Pro 5G",
      id: 32649,
      uuid: "ac24a3f3-24e0-4dd9-b8eb-752230a5ed1b",
      stats: {
        publication_id: 1,
        affiliate_match: 1,
        link_http_code: 200,
        out_of_stock: 0,
        timestamp: 1661183930,
        date: "2022-08-22 16:58:50",
      },
      remoteID: null,
      vendorName: "AO.com",
      price: "285.00",
      vendorLink:
        "https://www.awin1.com/awclick.php?mid=19526&id=201309&p=https://ao.com/product/mzb0auien-xiaomi-redmi-note-11-pro-mobile-phone-grey-93573-305.aspx#isAffiliate",
      priceComparison: "https://www.argos.co.uk/product/2065641",
      image: {
        type: "image",
        data: {
          title: "Xiaomi Redmi Note 11 Pro 5G",
          description: "Xiaomi Redmi Note 11 Pro 5G",
          caption: null,
          copyright: "Xiaomi",
          credit: null,
          alt: null,
          doNotReuse: false,
          url: "https://static.independent.co.uk/2022/08/19/12/Xiaomi%20Redmi%20Note%2011%20Pro%205G.png",
          id: null,
          bundle: "remote_image",
          mid: 2746731,
          changed: "1660909913",
          created: "1660909913",
          uid: 4263,
          workflow: {
            name: "Published",
            id: 62,
            uuid: "312eeebb-ed05-4519-99a5-3a48c2856a46",
            firstLetter: "p",
          },
          extra: {
            imageSize: {
              width: 2048,
              height: 1536,
            },
          },
        },
      },
      body: [
        {
          type: "markup",
          data: {
            markup:
              "<p>The Xiaomi Redmi Note 11 Pro 5G looks and feels a lot more expensive than it is, thanks to its premium frosted-glass backplate – most budget phones use plastic – its narrow bezels, neat finish and sculpted squared-off edges. </p>",
          },
        },
        {
          type: "markup",
          data: {
            markup:
              "<p>Switch it on, and the illusion of holding a flagship phone continues. You get a poppy and vibrant 120Hz, full HD OLED screen with excellent contrast and colour reproduction, making this our pick for an entertainment-focused budget phone. The camera performance is decent in daylight conditions, and the battery can go for a couple of days if you don’t spend hours flicking through Instagram.</p>",
          },
        },
      ],
      extra: {
        brand: "Xiaomi",
        model: "Redmi Note 11 Pro 5G",
        bestFor: "Xiaomi phone",
        rating: "3.5",
        priceComparisonProvider: "monetizer",
        information: {
          productSpec: [
            {
              value: "164mm x 76mm x 8mm",
              key: "Size",
            },
            {
              value: "202g",
              key: "Weight",
            },
            {
              value: "6.7in Amoled, 120Hz",
              key: "Screen",
            },
            {
              value: "108MP wide, 8MP ultrawide, 2MP macro",
              key: "Camera (rear)",
            },
            {
              value: "16MP",
              key: "Camera (selfie)",
            },
            {
              value: "64GB/128GB",
              key: "Storage",
            },
            {
              value: "4GB/6GB/8GB",
              key: "RAM",
            },
            {
              value: "Yes",
              key: "5G",
            },
          ],
          pros: {
            pros: [
              "Bright Amoled screen",
              "Fast charging",
              "Stylish matte-glass finish",
            ],
          },
          cons: {
            cons: ["Middling camera quality"],
          },
        },
      },
      created: "1660753562",
      changed: "1661183930",
      brand: "Xiaomi",
      model: "Redmi Note 11 Pro 5G",
      bestFor: "Xiaomi phone",
      rating: "3.5",
      priceComparisonProvider: "monetizer",
      information: {
        productSpec: [
          {
            value: "164mm x 76mm x 8mm",
            key: "Size",
          },
          {
            value: "202g",
            key: "Weight",
          },
          {
            value: "6.7in Amoled, 120Hz",
            key: "Screen",
          },
          {
            value: "108MP wide, 8MP ultrawide, 2MP macro",
            key: "Camera (rear)",
          },
          {
            value: "16MP",
            key: "Camera (selfie)",
          },
          {
            value: "64GB/128GB",
            key: "Storage",
          },
          {
            value: "4GB/6GB/8GB",
            key: "RAM",
          },
          {
            value: "Yes",
            key: "5G",
          },
        ],
        pros: {
          pros: [
            "Bright Amoled screen",
            "Fast charging",
            "Stylish matte-glass finish",
          ],
        },
        cons: {
          cons: ["Middling camera quality"],
        },
      },
    },
  },
  {
    type: "product",
    data: {
      title: "Apple iphone SE (2022)",
      id: 32647,
      uuid: "f424a461-8065-4bff-a55c-9a5a7ac5e28f",
      stats: {
        publication_id: 1,
        affiliate_match: 1,
        link_http_code: 403,
        out_of_stock: 0,
        timestamp: 1661272874,
        date: "2022-08-23 17:41:14",
      },
      remoteID: null,
      vendorName: "Currys.co.uk",
      price: "419.00",
      vendorLink:
        "https://www.awin1.com/awclick.php?mid=1599&id=201309&p=https://www.currys.co.uk/products/apple-iphone-se-2022-64-gb-midnight-10236203.html#isAffiliate",
      priceComparison:
        "https://www.currys.co.uk/products/apple-iphone-se-2022-64-gb-midnight-10236203.html",
      image: {
        type: "image",
        data: {
          title: "iPhone SE 2022",
          description: "iPhone SE 2022",
          caption: null,
          copyright: "Apple",
          credit: null,
          alt: null,
          doNotReuse: false,
          url: "https://static.independent.co.uk/2022/08/19/13/iPhone%20SE%202022.png",
          id: null,
          bundle: "remote_image",
          mid: 2746739,
          changed: "1660910486",
          created: "1660910486",
          uid: 4263,
          workflow: {
            name: "Published",
            id: 62,
            uuid: "312eeebb-ed05-4519-99a5-3a48c2856a46",
            firstLetter: "p",
          },
          extra: {
            imageSize: {
              width: 2048,
              height: 1536,
            },
          },
        },
      },
      body: [
        {
          type: "markup",
          data: {
            markup:
              "<p>Apple is an unavoidably premium brand, so it’s no surprise that the cheapest iPhone is still the most expensive phone on our list. The iPhone SE is a thin, lightweight 5G device styled after the classic iPhone 8. It has a smaller 4.7in screen that pales in comparison to the more expensive iPhone 13 range and a physical Touch ID button. There’s no fancy pants facial recognition here.</p>",
          },
        },
        {
          type: "markup",
          data: {
            markup:
              "<p>Yet, there’s no compromise on camera quality. Although the iPhone SE has only two lenses to work with (that means no true portrait mode, wide angle or optical zoom), it manages to produce excellent photography in all conditions. That’s thanks partly to the powerful A15 Bionic chip – the same found in the iPhone 13 mini – which keeps performance high and helps with processing camera output.</p>",
          },
        },
      ],
      extra: {
        brand: "Apple",
        model: "iPhone SE",
        bestFor: "Cheap iPhone",
        rating: "4",
        priceComparisonProvider: "monetizer",
        information: {
          productSpec: [
            {
              value: "138mm x 67mm x 7mm",
              key: "Size",
            },
            {
              value: "144g ",
              key: "Weight",
            },
            {
              value: "4.7in retina display",
              key: "Screen",
            },
            {
              value: "12MP wide",
              key: "Camera (rear)",
            },
            {
              value: "7MP",
              key: "Camera (selfie)",
            },
            {
              value: "64GB/128GB/256GB",
              key: "Storage",
            },
            {
              value: "4GB",
              key: "RAM",
            },
            {
              value: "Yes",
              key: "5G",
            },
          ],
          pros: {
            pros: [
              "Powerful A15 bionic chip",
              "Long battery life",
              "iPhone-worthy camera performance",
            ],
          },
          cons: {
            title: "",
            cons: ["Small screen can feel cramped"],
          },
        },
      },
      created: "1660753555",
      changed: "1661272874",
      brand: "Apple",
      model: "iPhone SE",
      bestFor: "Cheap iPhone",
      rating: "4",
      priceComparisonProvider: "monetizer",
      information: {
        productSpec: [
          {
            value: "138mm x 67mm x 7mm",
            key: "Size",
          },
          {
            value: "144g ",
            key: "Weight",
          },
          {
            value: "4.7in retina display",
            key: "Screen",
          },
          {
            value: "12MP wide",
            key: "Camera (rear)",
          },
          {
            value: "7MP",
            key: "Camera (selfie)",
          },
          {
            value: "64GB/128GB/256GB",
            key: "Storage",
          },
          {
            value: "4GB",
            key: "RAM",
          },
          {
            value: "Yes",
            key: "5G",
          },
        ],
        pros: {
          pros: [
            "Powerful A15 bionic chip",
            "Long battery life",
            "iPhone-worthy camera performance",
          ],
        },
        cons: {
          title: "",
          cons: ["Small screen can feel cramped"],
        },
      },
    },
  },
  {
    type: "product",
    data: {
      title: "Motorola moto G22",
      id: 32648,
      uuid: "ca6805db-a38e-4d79-bddb-23b9645cfec8",
      stats: {
        publication_id: 1,
        affiliate_match: 1,
        link_http_code: 503,
        out_of_stock: 0,
        timestamp: 1661184651,
        date: "2022-08-22 17:10:51",
      },
      remoteID: null,
      vendorName: "Amazon.co.uk",
      price: "119.99",
      vendorLink:
        "http://buy.geni.us/Proxy.ashx?tsid=3658&GR_URL=https%3A%2F%2Fwww.amazon.co.uk%2FMotorola-Android-MediaTek-processor-TurboPower%2Fdp%2FB09S13CKCS%3Fascsubtag%3DIN%7C1843598%7CB09S13CKCS%23isAffiliate",
      priceComparison:
        "https://www.amazon.co.uk/Motorola-Android-MediaTek-processor-TurboPower/dp/B09S13CKCS",
      image: {
        type: "image",
        data: {
          title: "Motorola moto G22",
          description: "Motorola moto G22",
          caption: null,
          copyright: "Motorola",
          credit: null,
          alt: null,
          doNotReuse: false,
          url: "https://static.independent.co.uk/2022/08/19/12/Motorola%20moto%20G22.png",
          id: null,
          bundle: "remote_image",
          mid: 2746732,
          changed: "1660909946",
          created: "1660909946",
          uid: 4263,
          workflow: {
            name: "Published",
            id: 62,
            uuid: "312eeebb-ed05-4519-99a5-3a48c2856a46",
            firstLetter: "p",
          },
          extra: {
            imageSize: {
              width: 2048,
              height: 1536,
            },
          },
        },
      },
      body: [
        {
          type: "markup",
          data: {
            markup:
              "<p>When you start shopping for cheap phones around the £100 range, you have to accept a degree of compromise. At a fraction of the price of some of the other phones on our list, the Motorola Moto G22 is never going to offer top-tier performance, but it has a superb quad-camera array with a decent wide-angle mode and a healthy two-day battery life.</p>",
          },
        },
        {
          type: "markup",
          data: {
            markup:
              "<p>The 6.5in, 720p screen is unremarkable, though two premium features make a surprise appearance: the inclusion of a hole-punch selfie camera and a fluid 90Hz refresh rate, which makes scrolling and gaming feel silky smooth.</p>",
          },
        },
      ],
      extra: {
        brand: "Motorola",
        model: "Moto G22",
        bestFor: "Android phone under £150",
        productId: "B09S13CKCS",
        productIdType: "ASIN",
        rating: "3",
        priceComparisonProvider: "monetizer",
        information: {
          productSpec: [
            {
              value: "164mm x 75 x 8mm",
              key: "Size",
            },
            {
              value: "185g",
              key: "Weight",
            },
            {
              value: "6.5in LCD, 90Hz",
              key: "Screen",
            },
            {
              value: "50MP wide, 8MP ultrawide, 2MP macro, 2MP depth",
              key: "Camera (rear)",
            },
            {
              value: "16MP",
              key: "Camera (selfie)",
            },
            {
              value: "64GB/128GB",
              key: "Storage",
            },
            {
              value: "4GB",
              key: "RAM",
            },
            {
              value: "No",
              key: "5G",
            },
          ],
          pros: {
            pros: ["Two-day battery life", "Decent performance for the price"],
          },
          cons: {
            cons: ["No 5G", "Lacklustre display"],
            title: "",
          },
        },
      },
      created: "1660753559",
      changed: "1661184651",
      brand: "Motorola",
      model: "Moto G22",
      bestFor: "Android phone under £150",
      productId: "B09S13CKCS",
      productIdType: "ASIN",
      rating: "3",
      priceComparisonProvider: "monetizer",
      information: {
        productSpec: [
          {
            value: "164mm x 75 x 8mm",
            key: "Size",
          },
          {
            value: "185g",
            key: "Weight",
          },
          {
            value: "6.5in LCD, 90Hz",
            key: "Screen",
          },
          {
            value: "50MP wide, 8MP ultrawide, 2MP macro, 2MP depth",
            key: "Camera (rear)",
          },
          {
            value: "16MP",
            key: "Camera (selfie)",
          },
          {
            value: "64GB/128GB",
            key: "Storage",
          },
          {
            value: "4GB",
            key: "RAM",
          },
          {
            value: "No",
            key: "5G",
          },
        ],
        pros: {
          pros: ["Two-day battery life", "Decent performance for the price"],
        },
        cons: {
          cons: ["No 5G", "Lacklustre display"],
          title: "",
        },
      },
    },
  },
  {
    type: "product",
    data: {
      title: "Xiaomi redmi note 11",
      id: 32650,
      uuid: "5cb52c54-4db6-48f8-96fe-191da6a6a71c",
      stats: {
        publication_id: 1,
        affiliate_match: 1,
        link_http_code: 200,
        out_of_stock: 0,
        timestamp: 1661184656,
        date: "2022-08-22 17:10:56",
      },
      remoteID: null,
      vendorName: "Amazon.co.uk",
      price: "199.99",
      vendorLink:
        "http://buy.geni.us/Proxy.ashx?tsid=3658&GR_URL=https%3A%2F%2Fwww.amazon.co.uk%2FXiaomi-Redmi-Note-Smartphone-Dotdisplay%2Fdp%2FB09QLGB31J%3Fascsubtag%3DIN%7C1843598%7CB09QLGB31J%23isAffiliate",
      priceComparison:
        "https://www.amazon.co.uk/Xiaomi-Redmi-Note-Smartphone-Dotdisplay/dp/B09QLGB31J",
      image: {
        type: "image",
        data: {
          title: "Xiaomi Redmi Note 11",
          description: "Xiaomi Redmi Note 11",
          caption: null,
          copyright: "Xiaomi",
          credit: null,
          alt: null,
          doNotReuse: false,
          url: "https://static.independent.co.uk/2022/08/19/17/Xiaomi%20Redmi%20Note%2011.png",
          id: null,
          bundle: "remote_image",
          mid: 2747206,
          changed: "1660925956",
          created: "1660925956",
          uid: 4263,
          workflow: {
            name: "Published",
            id: 62,
            uuid: "312eeebb-ed05-4519-99a5-3a48c2856a46",
            firstLetter: "p",
          },
          extra: {
            imageSize: {
              width: 2048,
              height: 1536,
            },
          },
        },
      },
      body: [
        {
          type: "markup",
          data: {
            markup:
              "<p>If you’re not interested in 5G, don’t give a hoot about refresh rates, and only plan on taking pictures if you run into Bigfoot, the Xiaomi Redmi Note 11 is the cheap Android phone for you.</p>",
          },
        },
        {
          type: "markup",
          data: {
            markup:
              '<p>It cuts out some of the more advanced features of the Pro version of the phone (£319, <a rel="nofollow" target="_blank" href="http://www.anrdoezrs.net/links/8099906/type/dlg/https://www.argos.co.uk/product/2065641#isAffiliate">Argos.co.uk</a>) and keeps the sharp and vivid 6.4in display, the speedy Snapdragon 680 processor, the impressive battery life and the sophisticated looks. Refresh rates have been dialled back to 90Hz, the camera loses some of its night-time photography credentials, and you won’t be able to connect to any 5G networks.</p>',
          },
        },
      ],
      extra: {
        brand: "Xiaomi",
        model: "Redmi Note 11",
        bestFor: "Value",
        productId: "B09QLGB31J",
        productIdType: "ASIN",
        rating: "3.5",
        priceComparisonProvider: "monetizer",
        information: {
          productSpec: [
            {
              value: "160mm x 74mm x 8mm",
              key: "Size",
            },
            {
              value: "179g",
              key: "Weight",
            },
            {
              value: "6.4in Amoled, 90Hz",
              key: "Screen",
            },
            {
              value: "50MP wide, 8MP ultrawide, 2MP macro, 2MP depth",
              key: "Camera (rear)",
            },
            {
              value: "13MP",
              key: "Camera (selfie)",
            },
            {
              value: "64GB/128GB",
              key: "Storage",
            },
            {
              value: "4GB/6GB",
              key: "RAM",
            },
            {
              value: "No",
              key: "5G",
            },
          ],
          pros: {
            pros: ["Premium look and finish", "Luscious Amoled screen"],
          },
          cons: {
            cons: ["No 5G", "Average camera performance"],
            title: "",
          },
        },
      },
      created: "1660753565",
      changed: "1661184656",
      brand: "Xiaomi",
      model: "Redmi Note 11",
      bestFor: "Value",
      productId: "B09QLGB31J",
      productIdType: "ASIN",
      rating: "3.5",
      priceComparisonProvider: "monetizer",
      information: {
        productSpec: [
          {
            value: "160mm x 74mm x 8mm",
            key: "Size",
          },
          {
            value: "179g",
            key: "Weight",
          },
          {
            value: "6.4in Amoled, 90Hz",
            key: "Screen",
          },
          {
            value: "50MP wide, 8MP ultrawide, 2MP macro, 2MP depth",
            key: "Camera (rear)",
          },
          {
            value: "13MP",
            key: "Camera (selfie)",
          },
          {
            value: "64GB/128GB",
            key: "Storage",
          },
          {
            value: "4GB/6GB",
            key: "RAM",
          },
          {
            value: "No",
            key: "5G",
          },
        ],
        pros: {
          pros: ["Premium look and finish", "Luscious Amoled screen"],
        },
        cons: {
          cons: ["No 5G", "Average camera performance"],
          title: "",
        },
      },
    },
  },
  {
    type: "product",
    data: {
      title: "Nokia G11",
      id: 32651,
      uuid: "1362dce1-a791-44a5-b363-7622cec13602",
      stats: {
        publication_id: 1,
        affiliate_match: 1,
        link_http_code: 503,
        out_of_stock: 0,
        timestamp: 1661184660,
        date: "2022-08-22 17:11:00",
      },
      remoteID: null,
      vendorName: "Amazon.co.uk",
      price: "109.00",
      vendorLink:
        "http://buy.geni.us/Proxy.ashx?tsid=3658&GR_URL=https%3A%2F%2Fwww.amazon.co.uk%2FNokia-Smartphone-Android-Charging-Compatible%2Fdp%2FB09RQZ6LT6%3Fascsubtag%3DIN%7C1843598%7CB09RQZ6LT6%23isAffiliate",
      priceComparison:
        "https://www.amazon.co.uk/Nokia-Smartphone-Android-Charging-Compatible/dp/B09RQZ6LT6",
      image: {
        type: "image",
        data: {
          title: "nokia g11",
          description: "nokia g11",
          caption: null,
          copyright: "Nokia",
          credit: null,
          alt: null,
          doNotReuse: false,
          url: "https://static.independent.co.uk/2022/08/19/16/nokia%20g11.png",
          id: null,
          bundle: "remote_image",
          mid: 2747071,
          changed: "1660922253",
          created: "1660922253",
          uid: 4263,
          workflow: {
            name: "Published",
            id: 62,
            uuid: "312eeebb-ed05-4519-99a5-3a48c2856a46",
            firstLetter: "p",
          },
          extra: {
            imageSize: {
              width: 2048,
              height: 1536,
            },
          },
        },
      },
      body: [
        {
          type: "markup",
          data: {
            markup:
              "<p>The best budget phones include exactly the features you need from them and strip out everything you don’t. In that regard, the Nokia G11 is a phone for anyone looking for an Android handset for calls and messaging, with a battery life counted in days rather than hours.</p>",
          },
        },
        {
          type: "markup",
          data: {
            markup:
              "<p>The functional 13MP camera won’t be winning any contests. The CPU and RAM have been picked out of a bargain bin but are just capable enough not to be noticeably slugging when launching apps and navigating the device. The 6.5in display is surprisingly decent, too, and might be the cheapest 90Hz screen we’ve seen.</p>",
          },
        },
        {
          type: "markup",
          data: {
            markup:
              "<p>Otherwise, the Nokia G11 is a defiantly boring phone, designed for people who don’t want to think about phones too much. Cheap, practical and long-lasting, it nails the brief.</p>",
          },
        },
      ],
      extra: {
        brand: "Nokia",
        model: "G11",
        bestFor: "Battery life",
        productId: "B09RQZ6LT6",
        productIdType: "ASIN",
        rating: "3",
        priceComparisonProvider: "monetizer",
        information: {
          productSpec: [
            {
              value: "164mm x 76mm x 8mm",
              key: "Size",
            },
            {
              value: "189g",
              key: "Weight",
            },
            {
              value: "6.5in LCD, 90Hz",
              key: "Screen",
            },
            {
              value: "13MP main, 2MP macro, 2MP depth ",
              key: "Camera (rear)",
            },
            {
              value: "8MP",
              key: "Camera (selfie)",
            },
            {
              value: "32GB/64GB",
              key: "Storage",
            },
            {
              value: "3GB/4GB",
              key: "RAM",
            },
            {
              value: "No",
              key: "5G",
            },
          ],
          pros: {
            pros: ["Enormous battery life", "Great screen at this price"],
          },
          cons: {
            cons: ["Sluggish performance", "Poor camera"],
            title: "",
          },
        },
      },
      created: "1660753568",
      changed: "1661184659",
      brand: "Nokia",
      model: "G11",
      bestFor: "Battery life",
      productId: "B09RQZ6LT6",
      productIdType: "ASIN",
      rating: "3",
      priceComparisonProvider: "monetizer",
      information: {
        productSpec: [
          {
            value: "164mm x 76mm x 8mm",
            key: "Size",
          },
          {
            value: "189g",
            key: "Weight",
          },
          {
            value: "6.5in LCD, 90Hz",
            key: "Screen",
          },
          {
            value: "13MP main, 2MP macro, 2MP depth ",
            key: "Camera (rear)",
          },
          {
            value: "8MP",
            key: "Camera (selfie)",
          },
          {
            value: "32GB/64GB",
            key: "Storage",
          },
          {
            value: "3GB/4GB",
            key: "RAM",
          },
          {
            value: "No",
            key: "5G",
          },
        ],
        pros: {
          pros: ["Enormous battery life", "Great screen at this price"],
        },
        cons: {
          cons: ["Sluggish performance", "Poor camera"],
          title: "",
        },
      },
    },
  },
  {
    type: "product",
    data: {
      title: "OnePlus nord CE 2 lite 5G",
      id: 32652,
      uuid: "2219012d-e88f-484c-b541-334e2f84b953",
      stats: {
        publication_id: 1,
        affiliate_match: 1,
        link_http_code: 503,
        out_of_stock: 0,
        timestamp: 1661184311,
        date: "2022-08-22 17:05:11",
      },
      remoteID: null,
      vendorName: "Amazon.co.uk",
      price: "199.99",
      vendorLink:
        "http://buy.geni.us/Proxy.ashx?tsid=3658&GR_URL=https%3A%2F%2Fwww.amazon.co.uk%2FOnePlus-Nord-CE-Lite-Smartphone%2Fdp%2FB09WVJ28GJ%3Fascsubtag%3DIN%7C1843598%7CB09WVJ28GJ%23isAffiliate",
      priceComparison:
        "https://www.amazon.co.uk/OnePlus-Nord-CE-Lite-Smartphone/dp/B09WVJ28GJ",
      image: {
        type: "image",
        data: {
          title: "Oneplus nord ce 2",
          description: "Oneplus nord ce 2",
          caption: null,
          copyright: "OnePlus",
          credit: null,
          alt: null,
          doNotReuse: false,
          url: "https://static.independent.co.uk/2022/08/19/12/Oneplus%20nord%20ce%202.png",
          id: null,
          bundle: "remote_image",
          mid: 2746719,
          changed: "1660909581",
          created: "1660909581",
          uid: 4263,
          workflow: {
            name: "Published",
            id: 62,
            uuid: "312eeebb-ed05-4519-99a5-3a48c2856a46",
            firstLetter: "p",
          },
          extra: {
            imageSize: {
              width: 2048,
              height: 1536,
            },
          },
        },
      },
      body: [
        {
          type: "markup",
          data: {
            markup:
              "<p>A low-cost alternative to the top-end OnePlus 10T, the OnePlus Nord CE 2 Lite 5G is less than a third of the price and manages to stand out in a crowded budget Android market. That’s partly thanks to its striking blue colourway, fluid 120Hz display, a competent 64MP camera array that produces crisp photography and its class-leading OxygenOS operating system. </p>",
          },
        },
        {
          type: "markup",
          data: {
            markup:
              "<p>Performance is where the OnePlus pulls away from other sub-£200 phones. The Snapdragon 695 is an older CPU, but it’s far from sluggish and helps this cheap and unassuming phone achieve exceptional battery life.</p>",
          },
        },
      ],
      extra: {
        brand: "OnePlus",
        model: "Nord CE 2 Lite 5G",
        bestFor: "Budget OnePlus phone",
        productId: "B09WVJ28GJ",
        productIdType: "ASIN",
        rating: "3",
        priceComparisonProvider: "monetizer",
        information: {
          productSpec: [
            {
              value: "164mm x 75mm x 8mm",
              key: "Size",
            },
            {
              value: "195g",
              key: "Weight",
            },
            {
              value: "6.6in LCD, 120Hz",
              key: "Screen",
            },
            {
              value: "64MP wide, 2MP macro, 2MP depth",
              key: "Camera (rear)",
            },
            {
              value: "16MP",
              key: "Camera (selfie)",
            },
            {
              value: "128GB",
              key: "Storage",
            },
            {
              value: "6GB/8GB",
              key: "RAM",
            },
            {
              value: "Yes",
              key: "5G",
            },
          ],
          pros: {
            pros: ["Great build quality", "Smooth-scrolling 120Hz display"],
          },
          cons: {
            cons: ["Average performance"],
          },
        },
      },
      created: "1660753572",
      changed: "1661184311",
      brand: "OnePlus",
      model: "Nord CE 2 Lite 5G",
      bestFor: "Budget OnePlus phone",
      productId: "B09WVJ28GJ",
      productIdType: "ASIN",
      rating: "3",
      priceComparisonProvider: "monetizer",
      information: {
        productSpec: [
          {
            value: "164mm x 75mm x 8mm",
            key: "Size",
          },
          {
            value: "195g",
            key: "Weight",
          },
          {
            value: "6.6in LCD, 120Hz",
            key: "Screen",
          },
          {
            value: "64MP wide, 2MP macro, 2MP depth",
            key: "Camera (rear)",
          },
          {
            value: "16MP",
            key: "Camera (selfie)",
          },
          {
            value: "128GB",
            key: "Storage",
          },
          {
            value: "6GB/8GB",
            key: "RAM",
          },
          {
            value: "Yes",
            key: "5G",
          },
        ],
        pros: {
          pros: ["Great build quality", "Smooth-scrolling 120Hz display"],
        },
        cons: {
          cons: ["Average performance"],
        },
      },
    },
  },
  {
    type: "product",
    data: {
      title: "realme 8 5G",
      id: 32653,
      uuid: "23de502c-ec72-4386-bd78-0c3f8cd0a3e8",
      stats: {
        publication_id: 1,
        affiliate_match: 1,
        link_http_code: 503,
        out_of_stock: 0,
        timestamp: 1661183955,
        date: "2022-08-22 16:59:15",
      },
      remoteID: null,
      vendorName: "Amazon.co.uk",
      price: "149.00",
      vendorLink:
        "http://buy.geni.us/Proxy.ashx?tsid=3658&GR_URL=https%3A%2F%2Fwww.amazon.co.uk%2Frealme-Smartphone-Dimensity-Processor-Nightscape%2Fdp%2FB091GG5J9H%3Fascsubtag%3DIN%7C1843598%7CB091GG5J9H%23isAffiliate",
      priceComparison:
        "https://www.amazon.co.uk/realme-Smartphone-Dimensity-Processor-Nightscape/dp/B091GG5J9H",
      image: {
        type: "image",
        data: {
          title: "realme 8 5g",
          description: "Realme 8 5G",
          caption: null,
          copyright: "Realme",
          credit: null,
          alt: null,
          doNotReuse: false,
          url: "https://static.independent.co.uk/2022/08/19/12/realme%208%205g.png",
          id: null,
          bundle: "remote_image",
          mid: 2746708,
          changed: "1660909198",
          created: "1660909198",
          uid: 4263,
          workflow: {
            name: "Published",
            id: 62,
            uuid: "312eeebb-ed05-4519-99a5-3a48c2856a46",
            firstLetter: "p",
          },
          extra: {
            imageSize: {
              width: 2048,
              height: 1536,
            },
          },
        },
      },
      body: [
        {
          type: "markup",
          data: {
            markup:
              "<p>A super-cheap Android phone, the realme 8 5G offers mid-range performance, zippy 5G data speeds and a bright and cheerful 90Hz screen for less than £150.</p>",
          },
        },
        {
          type: "markup",
          data: {
            markup:
              "<p>While it’s been superseded by the realme 9, last year’s model is where the best deals can be found. The camera system is modest – there’s no ultra-wide angle lens, so framing your shots can take a bit more effort – but overall, the picture quality doesn’t disappoint. An expandable microSD card slot also lets you upgrade the paltry 64GB storage capacity that comes as standard.</p>",
          },
        },
      ],
      extra: {
        brand: "Realme",
        model: "8 5G",
        bestFor: "Budget 5G phone",
        productId: "B091GG5J9H",
        productIdType: "ASIN",
        rating: "3",
        priceComparisonProvider: "monetizer",
        information: {
          productSpec: [
            {
              value: "162mm x 75mm x 8mm",
              key: "Size",
            },
            {
              value: "185g",
              key: "Weight",
            },
            {
              value: "6.5in LCD, 90Hz",
              key: "Screen",
            },
            {
              value: "48MP wide, 2MP macro, 2MP depth",
              key: "Camera (rear)",
            },
            {
              value: "16MP",
              key: "Camera (selfie)",
            },
            {
              value: "64GB/128GB",
              key: "Storage",
            },
            {
              value: "4GB/8GB",
              key: "RAM",
            },
            {
              value: "Yes",
              key: "5G",
            },
          ],
          pros: {
            pros: ["Impressively cheap", "Fast 5G connection"],
          },
          cons: {
            cons: ["No wide-angle lens"],
          },
        },
      },
      created: "1660753575",
      changed: "1661183955",
      brand: "Realme",
      model: "8 5G",
      bestFor: "Budget 5G phone",
      productId: "B091GG5J9H",
      productIdType: "ASIN",
      rating: "3",
      priceComparisonProvider: "monetizer",
      information: {
        productSpec: [
          {
            value: "162mm x 75mm x 8mm",
            key: "Size",
          },
          {
            value: "185g",
            key: "Weight",
          },
          {
            value: "6.5in LCD, 90Hz",
            key: "Screen",
          },
          {
            value: "48MP wide, 2MP macro, 2MP depth",
            key: "Camera (rear)",
          },
          {
            value: "16MP",
            key: "Camera (selfie)",
          },
          {
            value: "64GB/128GB",
            key: "Storage",
          },
          {
            value: "4GB/8GB",
            key: "RAM",
          },
          {
            value: "Yes",
            key: "5G",
          },
        ],
        pros: {
          pros: ["Impressively cheap", "Fast 5G connection"],
        },
        cons: {
          cons: ["No wide-angle lens"],
        },
      },
    },
  },
  {
    type: "product",
    data: {
      title: "Nokia 8210 4G",
      id: 32713,
      uuid: "3c6d1fc5-deaf-4dc1-a26b-820656914ec3",
      stats: {
        publication_id: 1,
        affiliate_match: 1,
        link_http_code: 404,
        out_of_stock: 0,
        timestamp: 1661184674,
        date: "2022-08-22 17:11:14",
      },
      remoteID: null,
      vendorName: "Nokia",
      price: "64.99",
      vendorLink:
        "http://go.redirectingat.com/?id=44681X1458326&url=https%3A%2F%2Fwww.nokia.com%2Fphones%2Fen_gb%2Fnokia-8210-4g&sref=https://www.independent.co.uk/extras/indybest/gadgets-tech/phones-accessories/best-budget-smartphone-cheap-b1843598.html#isAffiliate",
      priceComparison: "https://www.nokia.com/phones/en_gb/nokia-8210-4g",
      image: {
        type: "image",
        data: {
          title: "Nokia 8310 4g",
          description: "Nokia 8310 4g",
          caption: null,
          copyright: "Nokia",
          credit: null,
          alt: null,
          doNotReuse: false,
          url: "https://static.independent.co.uk/2022/08/10/15/Nokia%208310%204g%202.png",
          id: null,
          bundle: "remote_image",
          mid: 2735023,
          changed: "1660141854",
          created: "1660141854",
          uid: 4263,
          workflow: {
            name: "Published",
            id: 62,
            uuid: "312eeebb-ed05-4519-99a5-3a48c2856a46",
            firstLetter: "p",
          },
          extra: {
            imageSize: {
              width: 2048,
              height: 1536,
            },
          },
        },
      },
      body: [
        {
          type: "markup",
          data: {
            markup:
              "<p>Phones don’t get much cheaper than this. The Nokia 8210 4G is a reimagined version of the 1999 classic and takes the “smart” back out of smartphone.</p>",
          },
        },
        {
          type: "markup",
          data: {
            markup:
              "<p>What it lacks in modern conveniences – like a touchscreen and wifi – it makes up for with a frankly enormous battery life, making it a great choice for anyone looking for a cheap emergency phone to throw in their glovebox, take on a hike or give to a kid or relative who struggles with touchscreen devices.</p>",
          },
        },
        {
          type: "markup",
          data: {
            markup:
              "<p>For your £65, you get a really basic camera, a 3.5mm audio jack, a built-in MP3 player and an FM radio tuner.</p>",
          },
        },
        {
          type: "markup",
          data: {
            markup:
              '<p><a href="https://www.independent.co.uk/extras/indybest/gadgets-tech/phones-accessories/nokia-8210-4g-review-b2142244.html">Read the full Nokia 8210 4G review</a></p>',
          },
        },
      ],
      extra: {
        brand: "Nokia",
        model: "8210 4G",
        bestFor: "For less than £100",
        rating: "2.5",
        priceComparisonProvider: "monetizer",
        information: {
          productSpec: [
            {
              value: "131mm x 56mm x 14mm",
              key: "Size",
            },
            {
              value: "107g",
              key: "Weight",
            },
            {
              value: "2.8in LCD",
              key: "Screen",
            },
            {
              value: "0.3MP",
              key: "Camera (rear)",
            },
            {
              value: "None",
              key: "Camera (selfie)",
            },
            {
              value: "128MB",
              key: "Storage",
            },
            {
              value: "48MP",
              key: "RAM",
            },
            {
              value: "No",
              key: "5G",
            },
          ],
          pros: {
            pros: ["Battery lasts weeks", "Incredibly cheap", "Fun 90s style"],
          },
          cons: {
            cons: [
              "No touchpad makes messaging a pain",
              "No GPS, wifi, or other modern feature",
            ],
            title: "",
          },
        },
      },
      created: "1660914656",
      changed: "1661184663",
      brand: "Nokia",
      model: "8210 4G",
      bestFor: "For less than £100",
      rating: "2.5",
      priceComparisonProvider: "monetizer",
      information: {
        productSpec: [
          {
            value: "131mm x 56mm x 14mm",
            key: "Size",
          },
          {
            value: "107g",
            key: "Weight",
          },
          {
            value: "2.8in LCD",
            key: "Screen",
          },
          {
            value: "0.3MP",
            key: "Camera (rear)",
          },
          {
            value: "None",
            key: "Camera (selfie)",
          },
          {
            value: "128MB",
            key: "Storage",
          },
          {
            value: "48MP",
            key: "RAM",
          },
          {
            value: "No",
            key: "5G",
          },
        ],
        pros: {
          pros: ["Battery lasts weeks", "Incredibly cheap", "Fun 90s style"],
        },
        cons: {
          cons: [
            "No touchpad makes messaging a pain",
            "No GPS, wifi, or other modern feature",
          ],
          title: "",
        },
      },
    },
  },
];

const extra: Extra = {
  featureTitle: "",
  isBreakingNews: "",
  authorInfo: "",
  isHideNewsletterSignUp: true,
  isDisableAutoGallery: "",
  isDisableAffiliate: "",
  isDisableImportUpdate: "",
  isDisableAllAds: "",
  isHideDisplayAds: "",
  isHideHardCodedAds: "",
  isHidePreRollAds: "",
  urlRedirect: "",
  seoDescription:
    "Cheap smartphones don’t have to compromise on cameras, battery life, screen quality or GPS. Here are the 10 best budget smartphones of 2022",
  canonicalUrl: "",
  starRating: "",
  isHideFromFIA: "",
  isHideFromAMP: "",
  isHideFromAppleNews: "",
  isShowSponsoredCapsule: "",
  displayDatePreference: "lastUpdatedDate",
  liveblog: "",
  liveblogKeypoints: "",
  liveblogKeypointsTitle: "",
  verdict: [
    {
      type: "H2",
      data: {
        markup: "<h2>The verdict: Budget phones</h2>",
      },
    },
    {
      type: "markup",
      data: {
        markup:
          '<p>Our selection of budget phones ranges from less than £100 to just over £400, so the right phone for you might depend on how much cash you want to spend. For most shoppers, the <a rel="nofollow" target="_blank" href="http://buy.geni.us/Proxy.ashx?tsid=3658&amp;GR_URL=https%3A%2F%2Fwww.amazon.co.uk%2FSamsung-Galaxy-Mobile-Android-Smartphone%2Fdp%2FB09QH3JT6P%3Fascsubtag%3DIN%7C1843598%7CB09QH3JT6P%23isAffiliate">Samsung Galaxy A53</a> offers the best value for money. The phone looks and feels premium, is easy to use, secure and has the 120Hz Amoled display of a phone costing twice as much.</p>',
      },
    },
    {
      type: "markup",
      data: {
        markup:
          '<p>For an even cheaper option, the <a rel="nofollow" target="_blank" href="http://buy.geni.us/Proxy.ashx?tsid=3658&amp;GR_URL=https%3A%2F%2Fwww.amazon.co.uk%2FXiaomi-Redmi-Note-Smartphone-Dotdisplay%2Fdp%2FB09QLGB31J%3Fascsubtag%3DIN%7C1843598%7CB09QLGB31J%23isAffiliate">Xiaomi redmi note 11</a> manages to cram top-shelf camera specifications and a rich, vivid display into an Android phone costing less than £200.</p>',
      },
    },
    {
      type: "markup",
      data: {
        markup:
          '<p><strong>Protect your identity online and browse securely with our pick of </strong><a href="https://www.independent.co.uk/extras/indybest/gadgets-tech/best-vpn-free-paid-iphone-android-streaming-netflix-mac-windows-torrenting-b1811919.html"><strong>the best VPNs in 2022</strong></a></p>',
      },
    },
  ],
  silentUpdate: true,
  heroImageLocalCaption:
    "<p>Today’s budget phones are impressively fast and packed with luxury features </p>",
  heroImageLocalCopyright: "iStock/The Independent",
  products: [
    {
      type: "product",
      data: {
        title: "Samsung galaxy A53",
        id: 32645,
        uuid: "87bbbab3-0aa1-4dc9-99fb-f98544a99f42",
        stats: {
          publication_id: 1,
          affiliate_match: 1,
          link_http_code: 503,
          out_of_stock: 0,
          timestamp: 1661184716,
          date: "2022-08-22 17:11:56",
        },
        remoteID: null,
        vendorName: "Amazon.co.uk",
        price: "303.00",
        vendorLink:
          "http://buy.geni.us/Proxy.ashx?tsid=3658&GR_URL=https%3A%2F%2Fwww.amazon.co.uk%2FSamsung-Galaxy-Mobile-Android-Smartphone%2Fdp%2FB09QH3JT6P%3Fascsubtag%3DIN%7C1843598%7CB09QH3JT6P%23isAffiliate",
        priceComparison:
          "https://www.amazon.co.uk/Samsung-Galaxy-Mobile-Android-Smartphone/dp/B09QH3JT6P",
        image: {
          type: "image",
          data: {
            title: "samsung galaxy a53 5g",
            description: "samsung galaxy a53 5g",
            caption: null,
            copyright: "Samsung",
            credit: null,
            alt: null,
            doNotReuse: false,
            url: "https://static.independent.co.uk/2022/08/19/13/samsung%20galaxy%20a53%205g.png",
            id: null,
            bundle: "remote_image",
            mid: 2746748,
            changed: "1660910864",
            created: "1660910864",
            uid: 4263,
            workflow: {
              name: "Published",
              id: 62,
              uuid: "312eeebb-ed05-4519-99a5-3a48c2856a46",
              firstLetter: "p",
            },
            extra: {
              imageSize: {
                width: 2048,
                height: 1536,
              },
            },
          },
        },
        body: [
          {
            type: "markup",
            data: {
              markup:
                "<p>Best known for producing flagship premium devices at the top-end of the price spectrum, Samsung also makes some of the best budget smartphones you can buy. </p>",
            },
          },
          {
            type: "markup",
            data: {
              markup:
                "<p>The Samsung Galaxy A53 sports a stylish design and is excellent value for money, cramming in high-spec features such as a great-looking Amoled screen with a smooth 120Hz refresh rate and a camera array that runs rings around other phones at this price.</p>",
            },
          },
          {
            type: "markup",
            data: {
              markup:
                "<p>To keep the price this low, the Samsung Galaxy A53 runs on a relatively slow processor with poor battery efficiency, so performance and battery life take a small hit compared to pricier Galaxy phones. Overall, however, this is an attractive and affordable phone at an unbeatable price.</p>",
            },
          },
        ],
        extra: {
          brand: "Samsung",
          model: "Galaxy A53",
          bestFor: "Overall",
          productId: "B09QH3JT6P",
          productIdType: "ASIN",
          rating: "4.5",
          priceComparisonProvider: "monetizer",
          information: {
            productSpec: [
              {
                value: "159mm x 75mm x 8mm",
                key: "Size",
              },
              {
                value: "189g",
                key: "Weight",
              },
              {
                value: "6.5in Amoled, 120Hz",
                key: "Screen",
              },
              {
                value: "64MP wide, 12MP ultrawide, 5MP macro, 5MP depth",
                key: "Camera (rear)",
              },
              {
                value: "32MP",
                key: "Camera (selfie)",
              },
              {
                value: "128GB/256GB",
                key: "Storage",
              },
              {
                value: "4GB/6GB/8GB",
                key: "RAM",
              },
              {
                value: "Yes",
                key: "5G",
              },
            ],
            pros: {
              pros: [
                "Stunning screen",
                "Quality cameras",
                "Five years of security updates",
              ],
            },
            cons: {
              cons: ["No wireless charging", "Average performance"],
              title: "",
            },
          },
        },
        created: "1660753549",
        changed: "1661184716",
        brand: "Samsung",
        model: "Galaxy A53",
        bestFor: "Overall",
        productId: "B09QH3JT6P",
        productIdType: "ASIN",
        rating: "4.5",
        priceComparisonProvider: "monetizer",
        information: {
          productSpec: [
            {
              value: "159mm x 75mm x 8mm",
              key: "Size",
            },
            {
              value: "189g",
              key: "Weight",
            },
            {
              value: "6.5in Amoled, 120Hz",
              key: "Screen",
            },
            {
              value: "64MP wide, 12MP ultrawide, 5MP macro, 5MP depth",
              key: "Camera (rear)",
            },
            {
              value: "32MP",
              key: "Camera (selfie)",
            },
            {
              value: "128GB/256GB",
              key: "Storage",
            },
            {
              value: "4GB/6GB/8GB",
              key: "RAM",
            },
            {
              value: "Yes",
              key: "5G",
            },
          ],
          pros: {
            pros: [
              "Stunning screen",
              "Quality cameras",
              "Five years of security updates",
            ],
          },
          cons: {
            cons: ["No wireless charging", "Average performance"],
            title: "",
          },
        },
      },
    },
    {
      type: "product",
      data: {
        title: "Google pixel 6a",
        id: 32646,
        uuid: "e0253798-f5be-432b-80e2-11402f352d96",
        stats: {
          publication_id: 1,
          affiliate_match: 1,
          link_http_code: 503,
          out_of_stock: 0,
          timestamp: 1661184648,
          date: "2022-08-22 17:10:48",
        },
        remoteID: null,
        vendorName: "Amazon.co.uk",
        price: "394.49",
        vendorLink:
          "http://buy.geni.us/Proxy.ashx?tsid=3658&GR_URL=https%3A%2F%2Fwww.amazon.co.uk%2FGoogle-Pixel-6a-Smartphone-megapixel%2Fdp%2FB0B4DMBH5T%3Fascsubtag%3DIN%7C1843598%7CB0B4DMBH5T%23isAffiliate",
        priceComparison:
          "https://www.amazon.co.uk/Google-Pixel-6a-Smartphone-megapixel/dp/B0B4DMBH5T",
        image: {
          type: "image",
          data: {
            title: "google pixel 6a",
            description: "google pixel 6a",
            caption: null,
            copyright: "Google",
            credit: null,
            alt: null,
            doNotReuse: false,
            url: "https://static.independent.co.uk/2022/08/19/13/google%20pixel%206a.png",
            id: null,
            bundle: "remote_image",
            mid: 2746743,
            changed: "1660910575",
            created: "1660910575",
            uid: 4263,
            workflow: {
              name: "Published",
              id: 62,
              uuid: "312eeebb-ed05-4519-99a5-3a48c2856a46",
              firstLetter: "p",
            },
            extra: {
              imageSize: {
                width: 2048,
                height: 1536,
              },
            },
          },
        },
        body: [
          {
            type: "markup",
            data: {
              markup:
                "<p>Offering all the coolest features of a Google-made phone in a device costing less than £400, the Pixel 6a is a scaled-back version of the more expensive Pixel 6 and Pixel 6 pro.</p>",
            },
          },
          {
            type: "markup",
            data: {
              markup:
                "<p>That means you get the customisable Material You interface, a host of clever photo-editing features, adaptive battery life and Google Assistant smarts, all packed into a 5G phone powered by the same Tensor chip as its larger siblings.</p>",
            },
          },
          {
            type: "markup",
            data: {
              markup:
                "<p>“The 6.1in Pixel 6a is a pocket-friendly phone in the figurative sense as well as the literal one,” we said in our review. “For £399, it unlocks access to the full suite of Pixel-exclusive features while trimming away some of the super high-end hardware that makes pricey flagships of the Pixel 6 and Pixel 6 pro.”</p>",
            },
          },
          {
            type: "markup",
            data: {
              markup:
                '<p><a href="https://www.independent.co.uk/extras/indybest/gadgets-tech/phones-accessories/google-pixel-6a-phone-review-b2129205.html">Read the full Google Pixel 6a review</a></p>',
            },
          },
        ],
        extra: {
          brand: "Google",
          model: "Pixel 6a",
          bestFor: "Budget Pixel phone",
          rating: "4",
          priceComparisonProvider: "monetizer",
          information: {
            productSpec: [
              {
                value: "152mm x 72mm x 9mm",
                key: "Size",
              },
              {
                value: "178g",
                key: "Weight",
              },
              {
                value: "6.1in OLED, 60Hz",
                key: "Screen",
              },
              {
                value: "12MP wide, 12MP ultrawide",
                key: "Camera (rear)",
              },
              {
                value: "8MP",
                key: "Camera (selfie)",
              },
              {
                value: "128GB",
                key: "Storage",
              },
              {
                value: "6GB",
                key: "RAM",
              },
              {
                value: "Yes",
                key: "5G",
              },
            ],
            pros: {
              pros: [
                "Great performance",
                "Same Tensor chip as more expensive Pixels",
                "Clever Google Assistant features",
              ],
            },
            cons: {
              cons: ["Only 60Hz display"],
              title: "",
            },
          },
        },
        created: "1660753552",
        changed: "1661184647",
        brand: "Google",
        model: "Pixel 6a",
        bestFor: "Budget Pixel phone",
        rating: "4",
        priceComparisonProvider: "monetizer",
        information: {
          productSpec: [
            {
              value: "152mm x 72mm x 9mm",
              key: "Size",
            },
            {
              value: "178g",
              key: "Weight",
            },
            {
              value: "6.1in OLED, 60Hz",
              key: "Screen",
            },
            {
              value: "12MP wide, 12MP ultrawide",
              key: "Camera (rear)",
            },
            {
              value: "8MP",
              key: "Camera (selfie)",
            },
            {
              value: "128GB",
              key: "Storage",
            },
            {
              value: "6GB",
              key: "RAM",
            },
            {
              value: "Yes",
              key: "5G",
            },
          ],
          pros: {
            pros: [
              "Great performance",
              "Same Tensor chip as more expensive Pixels",
              "Clever Google Assistant features",
            ],
          },
          cons: {
            cons: ["Only 60Hz display"],
            title: "",
          },
        },
      },
    },
    {
      type: "product",
      data: {
        title: "Xiaomi redmi note 11 Pro 5G",
        id: 32649,
        uuid: "ac24a3f3-24e0-4dd9-b8eb-752230a5ed1b",
        stats: {
          publication_id: 1,
          affiliate_match: 1,
          link_http_code: 200,
          out_of_stock: 0,
          timestamp: 1661183930,
          date: "2022-08-22 16:58:50",
        },
        remoteID: null,
        vendorName: "AO.com",
        price: "285.00",
        vendorLink:
          "https://www.awin1.com/awclick.php?mid=19526&id=201309&p=https://ao.com/product/mzb0auien-xiaomi-redmi-note-11-pro-mobile-phone-grey-93573-305.aspx#isAffiliate",
        priceComparison: "https://www.argos.co.uk/product/2065641",
        image: {
          type: "image",
          data: {
            title: "Xiaomi Redmi Note 11 Pro 5G",
            description: "Xiaomi Redmi Note 11 Pro 5G",
            caption: null,
            copyright: "Xiaomi",
            credit: null,
            alt: null,
            doNotReuse: false,
            url: "https://static.independent.co.uk/2022/08/19/12/Xiaomi%20Redmi%20Note%2011%20Pro%205G.png",
            id: null,
            bundle: "remote_image",
            mid: 2746731,
            changed: "1660909913",
            created: "1660909913",
            uid: 4263,
            workflow: {
              name: "Published",
              id: 62,
              uuid: "312eeebb-ed05-4519-99a5-3a48c2856a46",
              firstLetter: "p",
            },
            extra: {
              imageSize: {
                width: 2048,
                height: 1536,
              },
            },
          },
        },
        body: [
          {
            type: "markup",
            data: {
              markup:
                "<p>The Xiaomi Redmi Note 11 Pro 5G looks and feels a lot more expensive than it is, thanks to its premium frosted-glass backplate – most budget phones use plastic – its narrow bezels, neat finish and sculpted squared-off edges. </p>",
            },
          },
          {
            type: "markup",
            data: {
              markup:
                "<p>Switch it on, and the illusion of holding a flagship phone continues. You get a poppy and vibrant 120Hz, full HD OLED screen with excellent contrast and colour reproduction, making this our pick for an entertainment-focused budget phone. The camera performance is decent in daylight conditions, and the battery can go for a couple of days if you don’t spend hours flicking through Instagram.</p>",
            },
          },
        ],
        extra: {
          brand: "Xiaomi",
          model: "Redmi Note 11 Pro 5G",
          bestFor: "Xiaomi phone",
          rating: "3.5",
          priceComparisonProvider: "monetizer",
          information: {
            productSpec: [
              {
                value: "164mm x 76mm x 8mm",
                key: "Size",
              },
              {
                value: "202g",
                key: "Weight",
              },
              {
                value: "6.7in Amoled, 120Hz",
                key: "Screen",
              },
              {
                value: "108MP wide, 8MP ultrawide, 2MP macro",
                key: "Camera (rear)",
              },
              {
                value: "16MP",
                key: "Camera (selfie)",
              },
              {
                value: "64GB/128GB",
                key: "Storage",
              },
              {
                value: "4GB/6GB/8GB",
                key: "RAM",
              },
              {
                value: "Yes",
                key: "5G",
              },
            ],
            pros: {
              pros: [
                "Bright Amoled screen",
                "Fast charging",
                "Stylish matte-glass finish",
              ],
            },
            cons: {
              cons: ["Middling camera quality"],
            },
          },
        },
        created: "1660753562",
        changed: "1661183930",
        brand: "Xiaomi",
        model: "Redmi Note 11 Pro 5G",
        bestFor: "Xiaomi phone",
        rating: "3.5",
        priceComparisonProvider: "monetizer",
        information: {
          productSpec: [
            {
              value: "164mm x 76mm x 8mm",
              key: "Size",
            },
            {
              value: "202g",
              key: "Weight",
            },
            {
              value: "6.7in Amoled, 120Hz",
              key: "Screen",
            },
            {
              value: "108MP wide, 8MP ultrawide, 2MP macro",
              key: "Camera (rear)",
            },
            {
              value: "16MP",
              key: "Camera (selfie)",
            },
            {
              value: "64GB/128GB",
              key: "Storage",
            },
            {
              value: "4GB/6GB/8GB",
              key: "RAM",
            },
            {
              value: "Yes",
              key: "5G",
            },
          ],
          pros: {
            pros: [
              "Bright Amoled screen",
              "Fast charging",
              "Stylish matte-glass finish",
            ],
          },
          cons: {
            cons: ["Middling camera quality"],
          },
        },
      },
    },
    {
      type: "product",
      data: {
        title: "Apple iphone SE (2022)",
        id: 32647,
        uuid: "f424a461-8065-4bff-a55c-9a5a7ac5e28f",
        stats: {
          publication_id: 1,
          affiliate_match: 1,
          link_http_code: 403,
          out_of_stock: 0,
          timestamp: 1661272874,
          date: "2022-08-23 17:41:14",
        },
        remoteID: null,
        vendorName: "Currys.co.uk",
        price: "419.00",
        vendorLink:
          "https://www.awin1.com/awclick.php?mid=1599&id=201309&p=https://www.currys.co.uk/products/apple-iphone-se-2022-64-gb-midnight-10236203.html#isAffiliate",
        priceComparison:
          "https://www.currys.co.uk/products/apple-iphone-se-2022-64-gb-midnight-10236203.html",
        image: {
          type: "image",
          data: {
            title: "iPhone SE 2022",
            description: "iPhone SE 2022",
            caption: null,
            copyright: "Apple",
            credit: null,
            alt: null,
            doNotReuse: false,
            url: "https://static.independent.co.uk/2022/08/19/13/iPhone%20SE%202022.png",
            id: null,
            bundle: "remote_image",
            mid: 2746739,
            changed: "1660910486",
            created: "1660910486",
            uid: 4263,
            workflow: {
              name: "Published",
              id: 62,
              uuid: "312eeebb-ed05-4519-99a5-3a48c2856a46",
              firstLetter: "p",
            },
            extra: {
              imageSize: {
                width: 2048,
                height: 1536,
              },
            },
          },
        },
        body: [
          {
            type: "markup",
            data: {
              markup:
                "<p>Apple is an unavoidably premium brand, so it’s no surprise that the cheapest iPhone is still the most expensive phone on our list. The iPhone SE is a thin, lightweight 5G device styled after the classic iPhone 8. It has a smaller 4.7in screen that pales in comparison to the more expensive iPhone 13 range and a physical Touch ID button. There’s no fancy pants facial recognition here.</p>",
            },
          },
          {
            type: "markup",
            data: {
              markup:
                "<p>Yet, there’s no compromise on camera quality. Although the iPhone SE has only two lenses to work with (that means no true portrait mode, wide angle or optical zoom), it manages to produce excellent photography in all conditions. That’s thanks partly to the powerful A15 Bionic chip – the same found in the iPhone 13 mini – which keeps performance high and helps with processing camera output.</p>",
            },
          },
        ],
        extra: {
          brand: "Apple",
          model: "iPhone SE",
          bestFor: "Cheap iPhone",
          rating: "4",
          priceComparisonProvider: "monetizer",
          information: {
            productSpec: [
              {
                value: "138mm x 67mm x 7mm",
                key: "Size",
              },
              {
                value: "144g ",
                key: "Weight",
              },
              {
                value: "4.7in retina display",
                key: "Screen",
              },
              {
                value: "12MP wide",
                key: "Camera (rear)",
              },
              {
                value: "7MP",
                key: "Camera (selfie)",
              },
              {
                value: "64GB/128GB/256GB",
                key: "Storage",
              },
              {
                value: "4GB",
                key: "RAM",
              },
              {
                value: "Yes",
                key: "5G",
              },
            ],
            pros: {
              pros: [
                "Powerful A15 bionic chip",
                "Long battery life",
                "iPhone-worthy camera performance",
              ],
            },
            cons: {
              title: "",
              cons: ["Small screen can feel cramped"],
            },
          },
        },
        created: "1660753555",
        changed: "1661272874",
        brand: "Apple",
        model: "iPhone SE",
        bestFor: "Cheap iPhone",
        rating: "4",
        priceComparisonProvider: "monetizer",
        information: {
          productSpec: [
            {
              value: "138mm x 67mm x 7mm",
              key: "Size",
            },
            {
              value: "144g ",
              key: "Weight",
            },
            {
              value: "4.7in retina display",
              key: "Screen",
            },
            {
              value: "12MP wide",
              key: "Camera (rear)",
            },
            {
              value: "7MP",
              key: "Camera (selfie)",
            },
            {
              value: "64GB/128GB/256GB",
              key: "Storage",
            },
            {
              value: "4GB",
              key: "RAM",
            },
            {
              value: "Yes",
              key: "5G",
            },
          ],
          pros: {
            pros: [
              "Powerful A15 bionic chip",
              "Long battery life",
              "iPhone-worthy camera performance",
            ],
          },
          cons: {
            title: "",
            cons: ["Small screen can feel cramped"],
          },
        },
      },
    },
    {
      type: "product",
      data: {
        title: "Motorola moto G22",
        id: 32648,
        uuid: "ca6805db-a38e-4d79-bddb-23b9645cfec8",
        stats: {
          publication_id: 1,
          affiliate_match: 1,
          link_http_code: 503,
          out_of_stock: 0,
          timestamp: 1661184651,
          date: "2022-08-22 17:10:51",
        },
        remoteID: null,
        vendorName: "Amazon.co.uk",
        price: "119.99",
        vendorLink:
          "http://buy.geni.us/Proxy.ashx?tsid=3658&GR_URL=https%3A%2F%2Fwww.amazon.co.uk%2FMotorola-Android-MediaTek-processor-TurboPower%2Fdp%2FB09S13CKCS%3Fascsubtag%3DIN%7C1843598%7CB09S13CKCS%23isAffiliate",
        priceComparison:
          "https://www.amazon.co.uk/Motorola-Android-MediaTek-processor-TurboPower/dp/B09S13CKCS",
        image: {
          type: "image",
          data: {
            title: "Motorola moto G22",
            description: "Motorola moto G22",
            caption: null,
            copyright: "Motorola",
            credit: null,
            alt: null,
            doNotReuse: false,
            url: "https://static.independent.co.uk/2022/08/19/12/Motorola%20moto%20G22.png",
            id: null,
            bundle: "remote_image",
            mid: 2746732,
            changed: "1660909946",
            created: "1660909946",
            uid: 4263,
            workflow: {
              name: "Published",
              id: 62,
              uuid: "312eeebb-ed05-4519-99a5-3a48c2856a46",
              firstLetter: "p",
            },
            extra: {
              imageSize: {
                width: 2048,
                height: 1536,
              },
            },
          },
        },
        body: [
          {
            type: "markup",
            data: {
              markup:
                "<p>When you start shopping for cheap phones around the £100 range, you have to accept a degree of compromise. At a fraction of the price of some of the other phones on our list, the Motorola Moto G22 is never going to offer top-tier performance, but it has a superb quad-camera array with a decent wide-angle mode and a healthy two-day battery life.</p>",
            },
          },
          {
            type: "markup",
            data: {
              markup:
                "<p>The 6.5in, 720p screen is unremarkable, though two premium features make a surprise appearance: the inclusion of a hole-punch selfie camera and a fluid 90Hz refresh rate, which makes scrolling and gaming feel silky smooth.</p>",
            },
          },
        ],
        extra: {
          brand: "Motorola",
          model: "Moto G22",
          bestFor: "Android phone under £150",
          productId: "B09S13CKCS",
          productIdType: "ASIN",
          rating: "3",
          priceComparisonProvider: "monetizer",
          information: {
            productSpec: [
              {
                value: "164mm x 75 x 8mm",
                key: "Size",
              },
              {
                value: "185g",
                key: "Weight",
              },
              {
                value: "6.5in LCD, 90Hz",
                key: "Screen",
              },
              {
                value: "50MP wide, 8MP ultrawide, 2MP macro, 2MP depth",
                key: "Camera (rear)",
              },
              {
                value: "16MP",
                key: "Camera (selfie)",
              },
              {
                value: "64GB/128GB",
                key: "Storage",
              },
              {
                value: "4GB",
                key: "RAM",
              },
              {
                value: "No",
                key: "5G",
              },
            ],
            pros: {
              pros: [
                "Two-day battery life",
                "Decent performance for the price",
              ],
            },
            cons: {
              cons: ["No 5G", "Lacklustre display"],
              title: "",
            },
          },
        },
        created: "1660753559",
        changed: "1661184651",
        brand: "Motorola",
        model: "Moto G22",
        bestFor: "Android phone under £150",
        productId: "B09S13CKCS",
        productIdType: "ASIN",
        rating: "3",
        priceComparisonProvider: "monetizer",
        information: {
          productSpec: [
            {
              value: "164mm x 75 x 8mm",
              key: "Size",
            },
            {
              value: "185g",
              key: "Weight",
            },
            {
              value: "6.5in LCD, 90Hz",
              key: "Screen",
            },
            {
              value: "50MP wide, 8MP ultrawide, 2MP macro, 2MP depth",
              key: "Camera (rear)",
            },
            {
              value: "16MP",
              key: "Camera (selfie)",
            },
            {
              value: "64GB/128GB",
              key: "Storage",
            },
            {
              value: "4GB",
              key: "RAM",
            },
            {
              value: "No",
              key: "5G",
            },
          ],
          pros: {
            pros: ["Two-day battery life", "Decent performance for the price"],
          },
          cons: {
            cons: ["No 5G", "Lacklustre display"],
            title: "",
          },
        },
      },
    },
    {
      type: "product",
      data: {
        title: "Xiaomi redmi note 11",
        id: 32650,
        uuid: "5cb52c54-4db6-48f8-96fe-191da6a6a71c",
        stats: {
          publication_id: 1,
          affiliate_match: 1,
          link_http_code: 200,
          out_of_stock: 0,
          timestamp: 1661184656,
          date: "2022-08-22 17:10:56",
        },
        remoteID: null,
        vendorName: "Amazon.co.uk",
        price: "199.99",
        vendorLink:
          "http://buy.geni.us/Proxy.ashx?tsid=3658&GR_URL=https%3A%2F%2Fwww.amazon.co.uk%2FXiaomi-Redmi-Note-Smartphone-Dotdisplay%2Fdp%2FB09QLGB31J%3Fascsubtag%3DIN%7C1843598%7CB09QLGB31J%23isAffiliate",
        priceComparison:
          "https://www.amazon.co.uk/Xiaomi-Redmi-Note-Smartphone-Dotdisplay/dp/B09QLGB31J",
        image: {
          type: "image",
          data: {
            title: "Xiaomi Redmi Note 11",
            description: "Xiaomi Redmi Note 11",
            caption: null,
            copyright: "Xiaomi",
            credit: null,
            alt: null,
            doNotReuse: false,
            url: "https://static.independent.co.uk/2022/08/19/17/Xiaomi%20Redmi%20Note%2011.png",
            id: null,
            bundle: "remote_image",
            mid: 2747206,
            changed: "1660925956",
            created: "1660925956",
            uid: 4263,
            workflow: {
              name: "Published",
              id: 62,
              uuid: "312eeebb-ed05-4519-99a5-3a48c2856a46",
              firstLetter: "p",
            },
            extra: {
              imageSize: {
                width: 2048,
                height: 1536,
              },
            },
          },
        },
        body: [
          {
            type: "markup",
            data: {
              markup:
                "<p>If you’re not interested in 5G, don’t give a hoot about refresh rates, and only plan on taking pictures if you run into Bigfoot, the Xiaomi Redmi Note 11 is the cheap Android phone for you.</p>",
            },
          },
          {
            type: "markup",
            data: {
              markup:
                '<p>It cuts out some of the more advanced features of the Pro version of the phone (£319, <a rel="nofollow" target="_blank" href="http://www.anrdoezrs.net/links/8099906/type/dlg/https://www.argos.co.uk/product/2065641#isAffiliate">Argos.co.uk</a>) and keeps the sharp and vivid 6.4in display, the speedy Snapdragon 680 processor, the impressive battery life and the sophisticated looks. Refresh rates have been dialled back to 90Hz, the camera loses some of its night-time photography credentials, and you won’t be able to connect to any 5G networks.</p>',
            },
          },
        ],
        extra: {
          brand: "Xiaomi",
          model: "Redmi Note 11",
          bestFor: "Value",
          productId: "B09QLGB31J",
          productIdType: "ASIN",
          rating: "3.5",
          priceComparisonProvider: "monetizer",
          information: {
            productSpec: [
              {
                value: "160mm x 74mm x 8mm",
                key: "Size",
              },
              {
                value: "179g",
                key: "Weight",
              },
              {
                value: "6.4in Amoled, 90Hz",
                key: "Screen",
              },
              {
                value: "50MP wide, 8MP ultrawide, 2MP macro, 2MP depth",
                key: "Camera (rear)",
              },
              {
                value: "13MP",
                key: "Camera (selfie)",
              },
              {
                value: "64GB/128GB",
                key: "Storage",
              },
              {
                value: "4GB/6GB",
                key: "RAM",
              },
              {
                value: "No",
                key: "5G",
              },
            ],
            pros: {
              pros: ["Premium look and finish", "Luscious Amoled screen"],
            },
            cons: {
              cons: ["No 5G", "Average camera performance"],
              title: "",
            },
          },
        },
        created: "1660753565",
        changed: "1661184656",
        brand: "Xiaomi",
        model: "Redmi Note 11",
        bestFor: "Value",
        productId: "B09QLGB31J",
        productIdType: "ASIN",
        rating: "3.5",
        priceComparisonProvider: "monetizer",
        information: {
          productSpec: [
            {
              value: "160mm x 74mm x 8mm",
              key: "Size",
            },
            {
              value: "179g",
              key: "Weight",
            },
            {
              value: "6.4in Amoled, 90Hz",
              key: "Screen",
            },
            {
              value: "50MP wide, 8MP ultrawide, 2MP macro, 2MP depth",
              key: "Camera (rear)",
            },
            {
              value: "13MP",
              key: "Camera (selfie)",
            },
            {
              value: "64GB/128GB",
              key: "Storage",
            },
            {
              value: "4GB/6GB",
              key: "RAM",
            },
            {
              value: "No",
              key: "5G",
            },
          ],
          pros: {
            pros: ["Premium look and finish", "Luscious Amoled screen"],
          },
          cons: {
            cons: ["No 5G", "Average camera performance"],
            title: "",
          },
        },
      },
    },
    {
      type: "product",
      data: {
        title: "Nokia G11",
        id: 32651,
        uuid: "1362dce1-a791-44a5-b363-7622cec13602",
        stats: {
          publication_id: 1,
          affiliate_match: 1,
          link_http_code: 503,
          out_of_stock: 0,
          timestamp: 1661184660,
          date: "2022-08-22 17:11:00",
        },
        remoteID: null,
        vendorName: "Amazon.co.uk",
        price: "109.00",
        vendorLink:
          "http://buy.geni.us/Proxy.ashx?tsid=3658&GR_URL=https%3A%2F%2Fwww.amazon.co.uk%2FNokia-Smartphone-Android-Charging-Compatible%2Fdp%2FB09RQZ6LT6%3Fascsubtag%3DIN%7C1843598%7CB09RQZ6LT6%23isAffiliate",
        priceComparison:
          "https://www.amazon.co.uk/Nokia-Smartphone-Android-Charging-Compatible/dp/B09RQZ6LT6",
        image: {
          type: "image",
          data: {
            title: "nokia g11",
            description: "nokia g11",
            caption: null,
            copyright: "Nokia",
            credit: null,
            alt: null,
            doNotReuse: false,
            url: "https://static.independent.co.uk/2022/08/19/16/nokia%20g11.png",
            id: null,
            bundle: "remote_image",
            mid: 2747071,
            changed: "1660922253",
            created: "1660922253",
            uid: 4263,
            workflow: {
              name: "Published",
              id: 62,
              uuid: "312eeebb-ed05-4519-99a5-3a48c2856a46",
              firstLetter: "p",
            },
            extra: {
              imageSize: {
                width: 2048,
                height: 1536,
              },
            },
          },
        },
        body: [
          {
            type: "markup",
            data: {
              markup:
                "<p>The best budget phones include exactly the features you need from them and strip out everything you don’t. In that regard, the Nokia G11 is a phone for anyone looking for an Android handset for calls and messaging, with a battery life counted in days rather than hours.</p>",
            },
          },
          {
            type: "markup",
            data: {
              markup:
                "<p>The functional 13MP camera won’t be winning any contests. The CPU and RAM have been picked out of a bargain bin but are just capable enough not to be noticeably slugging when launching apps and navigating the device. The 6.5in display is surprisingly decent, too, and might be the cheapest 90Hz screen we’ve seen.</p>",
            },
          },
          {
            type: "markup",
            data: {
              markup:
                "<p>Otherwise, the Nokia G11 is a defiantly boring phone, designed for people who don’t want to think about phones too much. Cheap, practical and long-lasting, it nails the brief.</p>",
            },
          },
        ],
        extra: {
          brand: "Nokia",
          model: "G11",
          bestFor: "Battery life",
          productId: "B09RQZ6LT6",
          productIdType: "ASIN",
          rating: "3",
          priceComparisonProvider: "monetizer",
          information: {
            productSpec: [
              {
                value: "164mm x 76mm x 8mm",
                key: "Size",
              },
              {
                value: "189g",
                key: "Weight",
              },
              {
                value: "6.5in LCD, 90Hz",
                key: "Screen",
              },
              {
                value: "13MP main, 2MP macro, 2MP depth ",
                key: "Camera (rear)",
              },
              {
                value: "8MP",
                key: "Camera (selfie)",
              },
              {
                value: "32GB/64GB",
                key: "Storage",
              },
              {
                value: "3GB/4GB",
                key: "RAM",
              },
              {
                value: "No",
                key: "5G",
              },
            ],
            pros: {
              pros: ["Enormous battery life", "Great screen at this price"],
            },
            cons: {
              cons: ["Sluggish performance", "Poor camera"],
              title: "",
            },
          },
        },
        created: "1660753568",
        changed: "1661184659",
        brand: "Nokia",
        model: "G11",
        bestFor: "Battery life",
        productId: "B09RQZ6LT6",
        productIdType: "ASIN",
        rating: "3",
        priceComparisonProvider: "monetizer",
        information: {
          productSpec: [
            {
              value: "164mm x 76mm x 8mm",
              key: "Size",
            },
            {
              value: "189g",
              key: "Weight",
            },
            {
              value: "6.5in LCD, 90Hz",
              key: "Screen",
            },
            {
              value: "13MP main, 2MP macro, 2MP depth ",
              key: "Camera (rear)",
            },
            {
              value: "8MP",
              key: "Camera (selfie)",
            },
            {
              value: "32GB/64GB",
              key: "Storage",
            },
            {
              value: "3GB/4GB",
              key: "RAM",
            },
            {
              value: "No",
              key: "5G",
            },
          ],
          pros: {
            pros: ["Enormous battery life", "Great screen at this price"],
          },
          cons: {
            cons: ["Sluggish performance", "Poor camera"],
            title: "",
          },
        },
      },
    },
    {
      type: "product",
      data: {
        title: "OnePlus nord CE 2 lite 5G",
        id: 32652,
        uuid: "2219012d-e88f-484c-b541-334e2f84b953",
        stats: {
          publication_id: 1,
          affiliate_match: 1,
          link_http_code: 503,
          out_of_stock: 0,
          timestamp: 1661184311,
          date: "2022-08-22 17:05:11",
        },
        remoteID: null,
        vendorName: "Amazon.co.uk",
        price: "199.99",
        vendorLink:
          "http://buy.geni.us/Proxy.ashx?tsid=3658&GR_URL=https%3A%2F%2Fwww.amazon.co.uk%2FOnePlus-Nord-CE-Lite-Smartphone%2Fdp%2FB09WVJ28GJ%3Fascsubtag%3DIN%7C1843598%7CB09WVJ28GJ%23isAffiliate",
        priceComparison:
          "https://www.amazon.co.uk/OnePlus-Nord-CE-Lite-Smartphone/dp/B09WVJ28GJ",
        image: {
          type: "image",
          data: {
            title: "Oneplus nord ce 2",
            description: "Oneplus nord ce 2",
            caption: null,
            copyright: "OnePlus",
            credit: null,
            alt: null,
            doNotReuse: false,
            url: "https://static.independent.co.uk/2022/08/19/12/Oneplus%20nord%20ce%202.png",
            id: null,
            bundle: "remote_image",
            mid: 2746719,
            changed: "1660909581",
            created: "1660909581",
            uid: 4263,
            workflow: {
              name: "Published",
              id: 62,
              uuid: "312eeebb-ed05-4519-99a5-3a48c2856a46",
              firstLetter: "p",
            },
            extra: {
              imageSize: {
                width: 2048,
                height: 1536,
              },
            },
          },
        },
        body: [
          {
            type: "markup",
            data: {
              markup:
                "<p>A low-cost alternative to the top-end OnePlus 10T, the OnePlus Nord CE 2 Lite 5G is less than a third of the price and manages to stand out in a crowded budget Android market. That’s partly thanks to its striking blue colourway, fluid 120Hz display, a competent 64MP camera array that produces crisp photography and its class-leading OxygenOS operating system. </p>",
            },
          },
          {
            type: "markup",
            data: {
              markup:
                "<p>Performance is where the OnePlus pulls away from other sub-£200 phones. The Snapdragon 695 is an older CPU, but it’s far from sluggish and helps this cheap and unassuming phone achieve exceptional battery life.</p>",
            },
          },
        ],
        extra: {
          brand: "OnePlus",
          model: "Nord CE 2 Lite 5G",
          bestFor: "Budget OnePlus phone",
          productId: "B09WVJ28GJ",
          productIdType: "ASIN",
          rating: "3",
          priceComparisonProvider: "monetizer",
          information: {
            productSpec: [
              {
                value: "164mm x 75mm x 8mm",
                key: "Size",
              },
              {
                value: "195g",
                key: "Weight",
              },
              {
                value: "6.6in LCD, 120Hz",
                key: "Screen",
              },
              {
                value: "64MP wide, 2MP macro, 2MP depth",
                key: "Camera (rear)",
              },
              {
                value: "16MP",
                key: "Camera (selfie)",
              },
              {
                value: "128GB",
                key: "Storage",
              },
              {
                value: "6GB/8GB",
                key: "RAM",
              },
              {
                value: "Yes",
                key: "5G",
              },
            ],
            pros: {
              pros: ["Great build quality", "Smooth-scrolling 120Hz display"],
            },
            cons: {
              cons: ["Average performance"],
            },
          },
        },
        created: "1660753572",
        changed: "1661184311",
        brand: "OnePlus",
        model: "Nord CE 2 Lite 5G",
        bestFor: "Budget OnePlus phone",
        productId: "B09WVJ28GJ",
        productIdType: "ASIN",
        rating: "3",
        priceComparisonProvider: "monetizer",
        information: {
          productSpec: [
            {
              value: "164mm x 75mm x 8mm",
              key: "Size",
            },
            {
              value: "195g",
              key: "Weight",
            },
            {
              value: "6.6in LCD, 120Hz",
              key: "Screen",
            },
            {
              value: "64MP wide, 2MP macro, 2MP depth",
              key: "Camera (rear)",
            },
            {
              value: "16MP",
              key: "Camera (selfie)",
            },
            {
              value: "128GB",
              key: "Storage",
            },
            {
              value: "6GB/8GB",
              key: "RAM",
            },
            {
              value: "Yes",
              key: "5G",
            },
          ],
          pros: {
            pros: ["Great build quality", "Smooth-scrolling 120Hz display"],
          },
          cons: {
            cons: ["Average performance"],
          },
        },
      },
    },
    {
      type: "product",
      data: {
        title: "realme 8 5G",
        id: 32653,
        uuid: "23de502c-ec72-4386-bd78-0c3f8cd0a3e8",
        stats: {
          publication_id: 1,
          affiliate_match: 1,
          link_http_code: 503,
          out_of_stock: 0,
          timestamp: 1661183955,
          date: "2022-08-22 16:59:15",
        },
        remoteID: null,
        vendorName: "Amazon.co.uk",
        price: "149.00",
        vendorLink:
          "http://buy.geni.us/Proxy.ashx?tsid=3658&GR_URL=https%3A%2F%2Fwww.amazon.co.uk%2Frealme-Smartphone-Dimensity-Processor-Nightscape%2Fdp%2FB091GG5J9H%3Fascsubtag%3DIN%7C1843598%7CB091GG5J9H%23isAffiliate",
        priceComparison:
          "https://www.amazon.co.uk/realme-Smartphone-Dimensity-Processor-Nightscape/dp/B091GG5J9H",
        image: {
          type: "image",
          data: {
            title: "realme 8 5g",
            description: "Realme 8 5G",
            caption: null,
            copyright: "Realme",
            credit: null,
            alt: null,
            doNotReuse: false,
            url: "https://static.independent.co.uk/2022/08/19/12/realme%208%205g.png",
            id: null,
            bundle: "remote_image",
            mid: 2746708,
            changed: "1660909198",
            created: "1660909198",
            uid: 4263,
            workflow: {
              name: "Published",
              id: 62,
              uuid: "312eeebb-ed05-4519-99a5-3a48c2856a46",
              firstLetter: "p",
            },
            extra: {
              imageSize: {
                width: 2048,
                height: 1536,
              },
            },
          },
        },
        body: [
          {
            type: "markup",
            data: {
              markup:
                "<p>A super-cheap Android phone, the realme 8 5G offers mid-range performance, zippy 5G data speeds and a bright and cheerful 90Hz screen for less than £150.</p>",
            },
          },
          {
            type: "markup",
            data: {
              markup:
                "<p>While it’s been superseded by the realme 9, last year’s model is where the best deals can be found. The camera system is modest – there’s no ultra-wide angle lens, so framing your shots can take a bit more effort – but overall, the picture quality doesn’t disappoint. An expandable microSD card slot also lets you upgrade the paltry 64GB storage capacity that comes as standard.</p>",
            },
          },
        ],
        extra: {
          brand: "Realme",
          model: "8 5G",
          bestFor: "Budget 5G phone",
          productId: "B091GG5J9H",
          productIdType: "ASIN",
          rating: "3",
          priceComparisonProvider: "monetizer",
          information: {
            productSpec: [
              {
                value: "162mm x 75mm x 8mm",
                key: "Size",
              },
              {
                value: "185g",
                key: "Weight",
              },
              {
                value: "6.5in LCD, 90Hz",
                key: "Screen",
              },
              {
                value: "48MP wide, 2MP macro, 2MP depth",
                key: "Camera (rear)",
              },
              {
                value: "16MP",
                key: "Camera (selfie)",
              },
              {
                value: "64GB/128GB",
                key: "Storage",
              },
              {
                value: "4GB/8GB",
                key: "RAM",
              },
              {
                value: "Yes",
                key: "5G",
              },
            ],
            pros: {
              pros: ["Impressively cheap", "Fast 5G connection"],
            },
            cons: {
              cons: ["No wide-angle lens"],
            },
          },
        },
        created: "1660753575",
        changed: "1661183955",
        brand: "Realme",
        model: "8 5G",
        bestFor: "Budget 5G phone",
        productId: "B091GG5J9H",
        productIdType: "ASIN",
        rating: "3",
        priceComparisonProvider: "monetizer",
        information: {
          productSpec: [
            {
              value: "162mm x 75mm x 8mm",
              key: "Size",
            },
            {
              value: "185g",
              key: "Weight",
            },
            {
              value: "6.5in LCD, 90Hz",
              key: "Screen",
            },
            {
              value: "48MP wide, 2MP macro, 2MP depth",
              key: "Camera (rear)",
            },
            {
              value: "16MP",
              key: "Camera (selfie)",
            },
            {
              value: "64GB/128GB",
              key: "Storage",
            },
            {
              value: "4GB/8GB",
              key: "RAM",
            },
            {
              value: "Yes",
              key: "5G",
            },
          ],
          pros: {
            pros: ["Impressively cheap", "Fast 5G connection"],
          },
          cons: {
            cons: ["No wide-angle lens"],
          },
        },
      },
    },
    {
      type: "product",
      data: {
        title: "Nokia 8210 4G",
        id: 32713,
        uuid: "3c6d1fc5-deaf-4dc1-a26b-820656914ec3",
        stats: {
          publication_id: 1,
          affiliate_match: 1,
          link_http_code: 404,
          out_of_stock: 0,
          timestamp: 1661184674,
          date: "2022-08-22 17:11:14",
        },
        remoteID: null,
        vendorName: "Nokia",
        price: "64.99",
        vendorLink:
          "http://go.redirectingat.com/?id=44681X1458326&url=https%3A%2F%2Fwww.nokia.com%2Fphones%2Fen_gb%2Fnokia-8210-4g&sref=https://www.independent.co.uk/extras/indybest/gadgets-tech/phones-accessories/best-budget-smartphone-cheap-b1843598.html#isAffiliate",
        priceComparison: "https://www.nokia.com/phones/en_gb/nokia-8210-4g",
        image: {
          type: "image",
          data: {
            title: "Nokia 8310 4g",
            description: "Nokia 8310 4g",
            caption: null,
            copyright: "Nokia",
            credit: null,
            alt: null,
            doNotReuse: false,
            url: "https://static.independent.co.uk/2022/08/10/15/Nokia%208310%204g%202.png",
            id: null,
            bundle: "remote_image",
            mid: 2735023,
            changed: "1660141854",
            created: "1660141854",
            uid: 4263,
            workflow: {
              name: "Published",
              id: 62,
              uuid: "312eeebb-ed05-4519-99a5-3a48c2856a46",
              firstLetter: "p",
            },
            extra: {
              imageSize: {
                width: 2048,
                height: 1536,
              },
            },
          },
        },
        body: [
          {
            type: "markup",
            data: {
              markup:
                "<p>Phones don’t get much cheaper than this. The Nokia 8210 4G is a reimagined version of the 1999 classic and takes the “smart” back out of smartphone.</p>",
            },
          },
          {
            type: "markup",
            data: {
              markup:
                "<p>What it lacks in modern conveniences – like a touchscreen and wifi – it makes up for with a frankly enormous battery life, making it a great choice for anyone looking for a cheap emergency phone to throw in their glovebox, take on a hike or give to a kid or relative who struggles with touchscreen devices.</p>",
            },
          },
          {
            type: "markup",
            data: {
              markup:
                "<p>For your £65, you get a really basic camera, a 3.5mm audio jack, a built-in MP3 player and an FM radio tuner.</p>",
            },
          },
          {
            type: "markup",
            data: {
              markup:
                '<p><a href="https://www.independent.co.uk/extras/indybest/gadgets-tech/phones-accessories/nokia-8210-4g-review-b2142244.html">Read the full Nokia 8210 4G review</a></p>',
            },
          },
        ],
        extra: {
          brand: "Nokia",
          model: "8210 4G",
          bestFor: "For less than £100",
          rating: "2.5",
          priceComparisonProvider: "monetizer",
          information: {
            productSpec: [
              {
                value: "131mm x 56mm x 14mm",
                key: "Size",
              },
              {
                value: "107g",
                key: "Weight",
              },
              {
                value: "2.8in LCD",
                key: "Screen",
              },
              {
                value: "0.3MP",
                key: "Camera (rear)",
              },
              {
                value: "None",
                key: "Camera (selfie)",
              },
              {
                value: "128MB",
                key: "Storage",
              },
              {
                value: "48MP",
                key: "RAM",
              },
              {
                value: "No",
                key: "5G",
              },
            ],
            pros: {
              pros: [
                "Battery lasts weeks",
                "Incredibly cheap",
                "Fun 90s style",
              ],
            },
            cons: {
              cons: [
                "No touchpad makes messaging a pain",
                "No GPS, wifi, or other modern feature",
              ],
              title: "",
            },
          },
        },
        created: "1660914656",
        changed: "1661184663",
        brand: "Nokia",
        model: "8210 4G",
        bestFor: "For less than £100",
        rating: "2.5",
        priceComparisonProvider: "monetizer",
        information: {
          productSpec: [
            {
              value: "131mm x 56mm x 14mm",
              key: "Size",
            },
            {
              value: "107g",
              key: "Weight",
            },
            {
              value: "2.8in LCD",
              key: "Screen",
            },
            {
              value: "0.3MP",
              key: "Camera (rear)",
            },
            {
              value: "None",
              key: "Camera (selfie)",
            },
            {
              value: "128MB",
              key: "Storage",
            },
            {
              value: "48MP",
              key: "RAM",
            },
            {
              value: "No",
              key: "5G",
            },
          ],
          pros: {
            pros: ["Battery lasts weeks", "Incredibly cheap", "Fun 90s style"],
          },
          cons: {
            cons: [
              "No touchpad makes messaging a pain",
              "No GPS, wifi, or other modern feature",
            ],
            title: "",
          },
        },
      },
    },
  ],
};
