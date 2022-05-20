import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "The web developer",
    link: "https://adarshbalika.netlify.app/",
    profilePic: "https://res.cloudinary.com/vacay-book/image/upload/v1652946516/cld-sample.jpg",
  },
  {
    _id: uuid(),
    firstName: "John",
    lastName: "Doe",
    username: "johndoe",
    password: "johnDoe123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "Photographer",
    link: "https://google.com/",
    profilePic: "https://res.cloudinary.com/vacay-book/image/upload/v1652949304/profilepic/photo-1652528042257-ebaa90786218_nnfqub.jpg",
  },
  {
    _id: uuid(),
    firstName: "Aniket",
    lastName: "Prakash",
    username: "anik31",
    password: "aniketPrakash123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "Frontend Developer",
    link: "https://peerlist.io/aniketprakash",
    profilePic: "https://res.cloudinary.com/vacay-book/image/upload/v1652949599/profilepic/56336326_w3vnqd.jpg",
  },
  {
    _id: uuid(),
    firstName: "Sonam",
    lastName: "Gupta",
    username: "sonamgupta",
    password: "sonamGupta123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "Log galat bolte mere bare mein...",
    link: "https://google.com/",
    profilePic: "https://res.cloudinary.com/vacay-book/image/upload/v1652949852/profilepic/photo-1652160130353-e104e3bcfe21_kbsffq.jpg",
  },
  {
    _id: uuid(),
    firstName: "Angel",
    lastName: "Priya",
    username: "angelpriya",
    password: "angelPriya123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "Papa ki pari",
    link: "https://google.com/",
    profilePic: "https://res.cloudinary.com/vacay-book/image/upload/v1652949863/profilepic/photo-1652374968229-a66a1c170c04_rbg3l6.jpg",
  },
];
