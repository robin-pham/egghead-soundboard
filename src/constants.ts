interface ClipInfo {
  buttonText: string;
  filename: string;
  category?: string;
}
const FOLDER = "clips";
const CATEGORIES = {
  HARDCORE: "Hardcore",
  GOOD_MORNING: "Good Morning",
  INSPIRATIONAL: "Inspirational",
  SIMPLE: "SIMPLE",
  MISC: "MISC",
};

const addCategory = (category: string) => (obj: ClipInfo) => ({ ...obj, category });

const HARDCORE_CLIPS = [
  {
    buttonText: "Hardcore!",
    filename: `${FOLDER}/hardcore.wav`,
  },
  {
    buttonText: "Hardcore to the Mega",
    filename: `${FOLDER}/hardcore-mega.wav`,
  },
  {
    buttonText: "Hardcore Party",
    filename: `${FOLDER}/hardcore-party.wav`,
  },
  {
    buttonText: "...the Hardcore Plays",
    filename: `${FOLDER}/hardcore-plays.wav`,
  },
  {
    buttonText: "This is Hardcore",
    filename: `${FOLDER}/this-is-hardcore.wav`,
  },
].map(addCategory(CATEGORIES.HARDCORE));

const GOOD_MORNING_CLIPS = [
  {
    buttonText: "Good morning yeah!",
    filename: `${FOLDER}/good-morning-yeah.wav`,
  },
  {
    buttonText: "Good morning! Yeah! Pump it up! (x3)",
    filename: `${FOLDER}/good-morning-yeah-pump-it.wav`,
  },
  {
    buttonText: "Good morning comrade. Yeah!",
    filename: `${FOLDER}/good-morning-comrades.wav`,
  },
].map(addCategory(CATEGORIES.GOOD_MORNING));

const INSPIRATIONAL_CLIPS = [
  {
    buttonText: "It's nice to be important, but it's important to be nice",
    filename: `${FOLDER}/important-to-be-nice.wav`,
  },
  {
    buttonText: "Incremental progress! Yeah!",
    filename: `${FOLDER}/incremental-progress.wav`,
  },
  {
    buttonText: "Oncore! All right! Yeah!",
    filename: `${FOLDER}/oncore-allright.wav`,
  },
  {
    buttonText: "It's the message...",
    filename: `${FOLDER}/the-message.wav`,
  },
].map(addCategory(CATEGORIES.INSPIRATIONAL));

const MISC_CLIPS = [
  {
    buttonText: "Welcome to Revachol! Yeah!",
    filename: `${FOLDER}/welcome-to-revachol.wav`,
  },
  {
    buttonText: "Heavyweight champ",
    filename: `${FOLDER}/heavweight-champ.wav`,
  },
  {
    buttonText: "Spitting out lyrics the day I was born",
    filename: `${FOLDER}/spitting-out-lyrics.wav`,
  },
  {
    buttonText: "...the place to be.",
    filename: `${FOLDER}/the-place-to-be.wav`,
  },
].map(addCategory(CATEGORIES.MISC));

const SIMPLE_CLIPS = [
  {
    buttonText: "Internally coherent",
    filename: `${FOLDER}/internally-coherent.wav`,
  },
  {
    buttonText: "Yeah!",
    filename: `${FOLDER}/yeah.wav`,
  },
  {
    buttonText: "Yeah, request",
    filename: `${FOLDER}/yeah-request.wav`,
  },
  {
    buttonText: "You know about it?",
    filename: `${FOLDER}/you-know-about-it.wav`,
  },
  {
    buttonText: "But there is no question",
    filename: `${FOLDER}/no-question.wav`,
  },
].map(addCategory(CATEGORIES.SIMPLE));

export const SOUND_FILES = [
  ...HARDCORE_CLIPS,
  ...GOOD_MORNING_CLIPS,
  ...INSPIRATIONAL_CLIPS,
  ...SIMPLE_CLIPS,
  ...MISC_CLIPS,
];
