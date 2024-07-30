import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
import { useReducer } from "react";
import TicketForm from "./components/TicketForm";
import ticketReducer from "./reducers/ticketReducer";
function App() {
  const initialTicketState = { tickets: [] };
  const [state, dispatch] = useReducer(ticketReducer, initialTicketState);
  return (
    <div className="App">
      <div className="container">
        <h1>Bug Blaster</h1>
        <TicketForm dispatch={dispatch} />
      </div>
    </div>
  );
}

export default App;
