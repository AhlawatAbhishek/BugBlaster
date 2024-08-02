export default function ticketReducer(state, action) {
  //Comment out below line in production
  console.log(action); //------This helps to see the action that is being dispatched
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
    case "SET_EDITING_TICKET":
      return { ...state, editingTicket: action.payload };
    case "CLEAR_EDITING_TICKET":
      return { ...state, editingTicket: null };
    default:
      return state;
  }
}
