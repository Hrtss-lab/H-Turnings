/*
  ================================
  EDIT THIS FILE FOR EACH PERSON.
  Nothing else in the project needs to change.
  ================================
*/

const CONFIG = {
  // Shown in the welcome page heading
  name: "Someone",

  // index.html — the welcome page heading (before the name) and message.
  // Use <br> inside welcomeHeading if you want a manual line break.
  welcomeHeading: "Hey you",
  welcomeMessage: "It's another year of moments only you could have lived.",

  // gift.html — revealed once the gift is opened
  giftMessage: "This isn't the gift. The gift is that someone thought of you today.",

  // Number of candles on the cake (final.html)
  candles: 5
};

/*
  Page order — used to build the side nav dots.
  Only touch this if you rename one of the HTML files.
*/
const PAGES = [
  { id: "welcome", file: "index.html", label: "Welcome" },
  { id: "gift", file: "gift.html", label: "Gift" },
  { id: "final", file: "final.html", label: "Final" }
];
