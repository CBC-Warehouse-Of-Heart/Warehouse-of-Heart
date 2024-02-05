export const backgroundMapConfig: Record<
  string,
  {
    image: string;
    pagePreload: string[];
  }
> = {
  "1-1": {
    image: "/img/1-1.webp",
    pagePreload: ["1-2"],
  },
  "1-2": {
    image: "/img/1-2.webp",
    pagePreload: ["1-3"],
  },
  "1-3": {
    image: "/img/1-3.webp",
    pagePreload: ["1-4"],
  },
  "1-4": {
    image: "/img/1-4.webp",
    pagePreload: [],
  },
  "4-1": {
    image: "/img/4-1.webp",
    pagePreload: ["4-2"],
  },
  "4-2": {
    image: "/img/4-2.webp",
    pagePreload: ["4-3"],
  },
  "4-3": {
    image: "/img/4-3.webp",
    pagePreload: [],
  },
  "4-4": {
    image: "/img/4-3.webp",
    pagePreload: ["4-5"],
  },
  "4-5": {
    image: "/img/4-5.webp",
    pagePreload: [],
  },
  "4-6": {
    image: "/img/4-5.webp",
    pagePreload: [],
  },
  "4-7": {
    image: "/img/4-5.webp",
    pagePreload: [],
  },
  "4-8": {
    image: "/img/4-3.webp",
    pagePreload: [],
  },
  feedback: {
    image: "/img/feedback.webp",
    pagePreload: ["feedback-submitted"],
  },
  "feedback-submitted": {
    image: "/img/feedback-submitted.webp",
    pagePreload: [],
  },
};
