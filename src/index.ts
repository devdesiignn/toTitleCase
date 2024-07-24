// ENTRY

String.prototype.toTitleCase = function (): string {
  const sentence = this;

  let words = sentence.trim().toLowerCase().split(" ");
  words = words.map((word) => `${word[0].toUpperCase()}${word.slice(1)}`);
  const titleCasedSentence = words.join(" ");

  return titleCasedSentence;
};
