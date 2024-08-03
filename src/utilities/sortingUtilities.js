export const sortTickets = (tickets, sortPreference) => {
  return tickets.sort((a, b) => {
    if (sortPreference === "High to Low") {
      return b.priority - a.priority;
    } else if (sortPreference === "Low to High") {
      return a.priority - b.priority;
    } else {
      return 0;
    }
  });
};
