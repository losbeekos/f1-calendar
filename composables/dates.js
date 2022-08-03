export const localDate = date => {
  return new Date(date).toLocaleString([], {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short',
  });
};

export const pastRace = race => {
  const today = new Date();
  return Date.parse(`${race.date}T${race.time}`) < Date.parse(today);
};

export const upcomingRace = race => {
  const today = new Date();
  return Date.parse(`${race.date}T${race.time}`) >= Date.parse(today);
};
