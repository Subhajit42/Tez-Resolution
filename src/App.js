import { useState, useEffect } from "react";

// Components
import Navbar from "./components/Navbar";
import MyComponent from "./components/DataEntry";


const App = () => {
  // Players holding lottery tickets
  const [players, setPlayers] = useState([]);
  const [tickets, setTickets] = useState(5);
  const [loading, setLoading] = useState(false);

  const myStyle={
      backgroundImage: "url('https://png.pngtree.com/background/20210711/original/pngtree-happy-new-year-fireworks-and-stars-holiday-background-picture-image_1168834.jpg')",
      height:'100vh',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      zIndex: 1
  };


  return (
    <div className="body h-100" style={myStyle}>
      <Navbar style={{position:"absolute",zIndex:2}}/>
      <div className="container my-5">
        <h1 style={{color:"white"}}>Enter your resolution</h1>
        <br></br>
      </div>
      <MyComponent/>
      
    </div>
  );
};

export default App;