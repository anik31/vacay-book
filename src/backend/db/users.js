import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "SVM",
    lastName: "Sainath",
    username: "sainath",
    password: "svmSainath123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "The web developer",
    link: "https://sainath-portfolio.netlify.app/",
    profilePic: "https://res.cloudinary.com/anik-vacay/image/upload/v1654089962/profilepic/64608014_fxmxdq.jpg",
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
    link: "http://www.theejohndoe.com/",
    profilePic: "https://res.cloudinary.com/anik-vacay/image/upload/v1652949304/profilepic/photo-1652528042257-ebaa90786218_nnfqub.jpg",
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
    profilePic: "https://res.cloudinary.com/anik-vacay/image/upload/v1652949599/profilepic/56336326_w3vnqd.jpg",
  },
  {
    _id: uuid(),
    firstName: "Sonali",
    lastName: "Gupta",
    username: "sonaligupta",
    password: "sonaliGupta123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "On Mexico tourism",
    link: "https://www.guptasonali.com/",
    profilePic: "https://res.cloudinary.com/anik-vacay/image/upload/v1652949852/profilepic/photo-1652160130353-e104e3bcfe21_kbsffq.jpg",
  },
  {
    _id: uuid(),
    firstName: "Ankita",
    lastName: "Nayak",
    username: "ankitanayak",
    password: "ankitaNayak123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "Getting married",
    link: "https://google.com/",
    profilePic: "https://res.cloudinary.com/anik-vacay/image/upload/v1652949863/profilepic/photo-1652374968229-a66a1c170c04_rbg3l6.jpg",
  },
];
