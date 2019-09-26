function randomArrayItem(data) {
  return data[Math.floor(Math.random() * data.length)];
}

export function getRandomTagline() {
  const taglines = ["Christmas", "holiday", "shopping"];
  return randomArrayItem(taglines);
}
