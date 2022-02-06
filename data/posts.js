import { USERS } from "./users";

export const POSTS = [
  {
    imageUrl:
      "https://shop.nevzorov.tv/wp-content/uploads/2017/12/image7-262x328.jpeg",
    likes: 535,
    user: "nevzorovtv",
    caption: "Smth like that",
    profile_picture: USERS[0].image,
    comments: [
      {
        user: "thewiseman",
        comment: "That is cool, keep on goin",
      },
      {
        user: "inmate",
        comment: "Once you wake up, you will be cool",
      },
    ],
  },
  {
    imageUrl:
      "https://shop.nevzorov.tv/wp-content/uploads/2021/05/ya_bolshe_ne_budu_i_menshe1.png",
    likes: 545,
    user: "nevzorovtvtv",
    caption: "Smth like that",
    profile_picture: USERS[0].image,
    comments: [
      {
        user: "thewiseman",
        comment: "That is cool, keep on goin",
      },
      {
        user: "inmate",
        comment: "Once you wake up, you will be cool",
      },
    ],
  },
];
