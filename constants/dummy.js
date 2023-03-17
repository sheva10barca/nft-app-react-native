import assets from './assets';

const NFTData = [
   {
      id: 'NFT-01',
      name: 'The King of NFT',
      creator: 'Vladyslav Shevchenko',
      price: 10.01,
      description:
         'The Bored Ape Yacht Club is a collection of 10,000 NFT avatars that are each a unique style of a cartoon ape. Each Bored Ape has a different combination of background color, eyes, mouth, clothes, hats, moods, features, and accessories. The combinations of these attributes were used to generate 10,000 individual Bored Ape Yacht Club avatars.',
      image: assets.nftMonkey1,
      bids: [
         {
            id: 'BID-1',
            name: 'Leo Messi',
            price: 9.99,
            image: assets.messi,
            date: 'December 10, 2022 at 10:10 PM',
         },
         {
            id: 'BID-12',
            name: 'Jordan Belfort',
            price: 8.88,
            image: assets.jordanBelfort,
            date: 'December 27, 2022 at 1:50 PM',
         },
         {
            id: 'BID-13',
            name: 'Reggie Kray',
            price: 4.75,
            image: assets.reggie,
            date: 'December 31, 2022 at 3:50 PM',
         },
      ],
   },
   {
      id: 'NFT-02',
      name: 'Black box model',
      creator: 'Kendrick Lamar',
      price: 20.25,
      description:
         'The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. Lorem ipsum dolor sit amet consectetur adipiscing elit consequat accumsan sapien, lectus convallis malesuada odio curae habitasse dignissim nascetur. Nulla sed velit erat vitae leo sem inceptos diam fames arcu hendrerit, quis ultrices in eleifend posuere ipsum conubia porttitor felis.',
      image: assets.nftBlackBox,
      bids: [
         {
            id: 'BID-61',
            name: 'Leo Messi',
            price: 20.25,
            image: assets.messi,
            date: 'December 10, 2022 at 1:10 PM',
         },
         {
            id: 'BID-62',
            name: 'Jordan Belfort',
            price: 20.5,
            image: assets.jordanBelfort,
            date: 'December 27, 2022 at 1:50 PM',
         },
         {
            id: 'BID-63',
            name: 'Reggie Kray',
            price: 20.75,
            image: assets.reggie,
            date: 'December 31, 2022 at 3:50 PM',
         },
         {
            id: 'BID-64',
            name: 'Siti Nurhaliza',
            price: 21.25,
            image: assets.person02,
            date: 'December 31, 2022 at 3:50 PM',
         },
         {
            id: 'BID-65',
            name: 'Kaitlyn Lee',
            price: 7.25,
            image: assets.person02,
            date: 'December 31, 2022 at 3:50 PM',
         },
      ],
   },
   {
      id: 'NFT-03',
      name: 'Mono aburrido',
      creator: 'Putri Intan',
      price: 4.25,
      description:
         'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi quia aspernatur reiciendis praesentium adipisci dolore hic laboriosam? Fugit laborum voluptas obcaecati error distinctio eligendi tempore hic illo necessitatibus harum culpa iure, eveniet ab, quod vero officia? Assumenda odio voluptatum sit in rem quod! Ipsa aliquid minima voluptatum laudantium. Harum, maxime!',
      image: assets.nftMonkey2,
      bids: [
         {
            id: 'BID-11',
            name: 'Leo Messi',
            price: 4.25,
            image: assets.messi,
            date: 'December 11, 2022 at 6:10 PM',
         },
         {
            id: 'BID-12',
            name: 'Jordan Belfort',
            price: 4.5,
            image: assets.jordanBelfort,
            date: 'December 21, 2022 at 1:50 PM',
         },
         {
            id: 'BID-13',
            name: 'Reggie Kray',
            price: 4.75,
            image: assets.reggie,
            date: 'December 24, 2022 at 3:50 PM',
         },
      ],
   },
   {
      id: 'NFT-04',
      name: 'Bored Ape',
      creator: 'Siti Nurhaliza',
      price: 7.25,
      description:
         'The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. Nulla sed velit erat vitae leo sem inceptos diam fames arcu hendrerit, quis ultrices in eleifend posuere ipsum conubia porttitor felis.',
      image: assets.nftMonkey3,
      bids: [
         {
            id: 'BID-21',
            name: 'Leo Messi',
            price: 7.05,
            image: assets.messi,
            date: 'December 10, 2022 at 5:10 PM',
         },
      ],
   },
   {
      id: 'NFT-05',
      name: 'NFT coins race',
      creator: 'Elisabeth aho',
      price: 95.25,
      description:
         'The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. Lorem ipsum dolor sit amet consectetur adipiscing elit consequat accumsan sapien, lectus convallis malesuada odio curae habitasse dignissim nascetur. Nulla sed velit erat vitae leo sem inceptos diam fames arcu hendrerit, quis ultrices in eleifend posuere ipsum conubia porttitor felis. Lorem ipsum dolor sit amet consectetur adipiscing elit consequat accumsan sapien, lectus convallis malesuada odio curae habitasse dignissim nascetur. Nulla sed velit erat vitae leo sem inceptos diam fames arcu hendrerit, quis ultrices in eleifend posuere ipsum conubia porttitor felis.',
      image: assets.nft03,
      bids: [
         {
            id: 'BID-31',
            name: 'Leo Messi',
            price: 95.25,
            image: assets.person02,
            date: 'December 11, 2022 at 12:12 PM',
         },
         {
            id: 'BID-32',
            name: 'Jordan Belfort',
            price: 95.5,
            image: assets.jordanBelfort,
            date: 'December 22, 2022 at 3:50 PM',
         },
      ],
   },
   {
      id: 'NFT-06',
      name: 'Musico',
      creator: 'Putri Intan',
      price: 54.25,
      description:
         'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, quidem sint facere nihil vero aspernatur quibusdam reiciendis nemo doloribus similique, voluptate perferendis architecto a eius excepturi, numquam dicta earum tenetur enim recusandae voluptatem!',
      image: assets.nftMonkey4,
      bids: [
         {
            id: 'BID-41',
            name: 'Leo Messi',
            price: 56.25,
            image: assets.messi,
            date: 'December 21, 2022 at 3:10 PM',
         },
         {
            id: 'BID-42',
            name: 'Jordan Belfort',
            price: 54.25,
            image: assets.jordanBelfort,
            date: 'December 23, 2019 at 1:50 PM',
         },
         {
            id: 'BID-43',
            name: 'Reggie Kray',
            price: 55.15,
            image: assets.reggie,
            date: 'December 24, 2019 at 3:50 PM',
         },
         {
            id: 'BID-44',
            name: 'Vincent Swift',
            price: 54.15,
            image: assets.person02,
            date: 'December 26, 2019 at 5:50 PM',
         },
      ],
   },
   {
      id: 'NFT-07',
      name: 'Colorful circles',
      creator: 'David doe',
      price: 10.25,
      description:
         'The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural.',
      image: assets.nft05,
      bids: [
         {
            id: 'BID-51',
            name: 'Leo Messi',
            price: 10.25,
            image: assets.messi,
            date: 'December 31, 2022 at 6:10 PM',
         },
      ],
   },
   {
      id: 'NFT-08',
      name: 'Abstracto soulful art',
      creator: 'Victor de la Cruz',
      price: 18.25,
      description:
         'The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. Lorem ipsum dolor sit amet consectetur adipiscing elit consequat accumsan sapien, lectus convallis malesuada odio curae habitasse dignissim nascetur. Nulla sed velit erat vitae leo sem inceptos diam fames arcu hendrerit, quis ultrices in eleifend posuere ipsum conubia porttitor felis. Ullamcorper platea penatibus ornare egestas nulla ligula hendrerit nisl suscipit sociosqu maximus, tincidunt aptent habitant purus pharetra ultrices dapibus laoreet nisi lacinia. Porta malesuada netus vel sapien conubia porttitor aliquam ut pretium ante litora molestie senectus magna egestas sociosqu, eget aliquet fames pharetra felis posuere varius fringilla quisque in arcu montes eu ullamcorper.',
      image: assets.nft07,
      bids: [],
   },
];

export { NFTData };
