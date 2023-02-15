import assets from "./assets";

const NFTData = [
  {
    id: "NFT-01",
    name: "Abstracto #312",
    creator: "Putri Intan",
    price: 4.25,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet aliquam luctus, nisi nisl aliquam mauris, eget aliquam nisl nisl sit amet dolor. Sed euismod, nunc sit amet aliquam luctus, nisi nisl aliquam mauris, eget aliquam nisl nisl sit amet dolor.",
    image: assets.nft01,
    bids: [
      {
        id: "BID-11",
        name: "Jessica Tan",
        price: 4.25,
        
        date: "December 12, 2019 at 12:10 PM",
      },
      {
        id: "BID-12",
        name: "Jennifer Sia",
        price: 4.5,
        
        date: "December 27, 2019 at 1:50 PM",
      },
      {
        id: "BID-13",
        name: "Rosie Wong",
        price: 4.75,
        
        date: "December 31, 2019 at 3:50 PM",
      },
    ],
  },
  {
    id: "NFT-02",
    name: "Green Coins",
    creator: "Siti Nurhaliza",
    price: 7.25,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam mauris, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam mauris, eget aliquam nisl nisl sit amet lorem.",
    image: assets.nft02,
    bids: [
      {
        id: "BID-21",
        name: "Jessica Tan",
        price: 7.05,
        
        date: "December 12, 2019 at 12:10 PM",
      },
    ],
  },
];

export { NFTData };
