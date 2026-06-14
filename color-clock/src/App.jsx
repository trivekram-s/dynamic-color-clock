import { format } from "date-fns";

function App() {
  // Get the current date and time
  const now = new Date();

  return (
    <div className="container">
      <h1>Dynamic Color Clock</h1>

      {/* Display formatted current date and time */}
      <p>{format(now, "EEEE, MMMM dd, yyyy hh:mm:ss a")}</p>
    </div>
  );
}

export default App;