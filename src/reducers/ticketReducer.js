export default function ticketReducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "ADD_TICKET":
      return { ...state, tickets: [...state.tickets, action.payload] };
    case "UPDATE_TICKET":
      return {
        ...state,
        tickets: state.tickets.map((ticket) => {
          if (ticket.id === action.payload.id) {
            return action.payload;
          }
          return ticket;
        }),
      };
    case "DELETE_TICKET":
      return {
        ...state,
        tickets: state.tickets.filter((ticket) => {
          return ticket.id !== action.payload.id;
        }),
      };
    default:
      return state;
  }
}
