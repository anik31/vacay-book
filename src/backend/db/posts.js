import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "Vacation calories don’t count.",
    likes: {
      likeCount: 15,
      likedBy: [],
      dislikedBy: [],
    },
    username: "anik31",
    createdAt: "2021-05-23T10:38:12+05:30",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "sainath",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "ankitanayak",
        text: "Really?",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ]
  },
  {
    _id: uuid(),
    content:
      "Eiffel in love in Paris.",
    likes: {
      likeCount: 8,
      likedBy: [],
      dislikedBy: [],
    },
    username: "johndoe",
    createdAt: "2022-01-25T10:38:12+05:30",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "sonaligupta",
        text: "With me?",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ]
  },
  {
    _id: uuid(),
    content:
      "You can’t buy happiness, but you can buy ice cream on the beach!",
    likes: {
      likeCount: 11,
      likedBy: [],
      dislikedBy: [],
    },
    username: "anik31",
    createdAt: "2022-03-05T10:38:12+05:30",
    updatedAt: formatDate(),
    comments: []
  },
  {
    _id: uuid(),
    content:
      "Catch flights, not feelings.",
    likes: {
      likeCount: 19,
      likedBy: [],
      dislikedBy: [],
    },
    username: "sainath",
    createdAt: "2022-04-15T10:38:12+05:30",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "anik31",
        text: "Lol",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      }
    ]
  },
  {
    _id: uuid(),
    content:
      "Collect moments, not things.",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    username: "ankitanayak",
    createdAt: "2022-05-30T10:38:12+05:30",
    updatedAt: formatDate(),
    comments: []
  },
  {
    _id: uuid(),
    content:
      "An adventure a day keeps the doctor away.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "sonaligupta",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: []
  }
];
