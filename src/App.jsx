import NetflixSeries from "./NetflixSeries.jsx";
import "./components/netflix.css"
const App = () => {
  return (
 <div className="body">
 <section className="container ">
  <h1 className="card-Heading">List of Best Netfilx Series</h1>
 <NetflixSeries/>
 </section>
 </div>
  );
};

export default App;
/* You can set a mixed background color using CSS gradients. 
  Add this CSS to your netflix.css or a global CSS file: */



/* If you want to use inline styles in React, you can add this to your App.jsx: */
// Add this at the top, after imports
// const pageStyle = { minHeight: "100vh", background: "linear-gradient(135deg, #141e30 0%, #243b55 100%)" };

// Then wrap your <section> with a <div style={pageStyle}> if you prefer inline styles.