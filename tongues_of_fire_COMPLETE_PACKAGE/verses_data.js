
const VERSE_DATA = {
  all: [
    { text: "For God so loved the world that He gave His only begotten Son...", reference: "John 3:16", type: "nt" },
    { text: "In the beginning God created the heavens and the earth.", reference: "Genesis 1:1", type: "ot" },
    { text: "The Lord is my shepherd; I shall not want.", reference: "Psalm 23:1", type: "ot" },
    { text: "Jesus wept.", reference: "John 11:35", type: "nt" },
    { text: "Trust in the Lord with all your heart.", reference: "Proverbs 3:5", type: "ot" },
    { text: "I can do all things through Christ who strengthens me.", reference: "Philippians 4:13", type: "nt" }
  ],
  ot: [],
  nt: []
};

VERSE_DATA.ot = VERSE_DATA.all.filter(v => v.type === "ot");
VERSE_DATA.nt = VERSE_DATA.all.filter(v => v.type === "nt");
