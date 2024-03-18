import React from 'react';
import './Home.css'; // Ensure the CSS path is correct
import storeImage from '../img/IMG_0162.jpg'; // Adjust the path to your image accordingly

function Home() {
  const openGoogleMaps = () => {
    window.location.href = 'https://www.google.com/maps/place/M+%26+A+Liquor+%26+Wine/@40.5778748,-73.9562613,20.07z/data=!4m6!3m5!1s0x89c2446bd52105f5:0x47dd936a69f8af34!8m2!3d40.5780658!4d-73.9565138!16s%2Fg%2F1v8x32t_?entry=ttu';
  };

  const openGrubhub = () => {
    window.location.href = 'https://www.grubhub.com/restaurant/m--a-liquor-and-wine-1109-brighton-beach-ave-brooklyn/3305880?utm_source=google&utm_medium=organic&utm_campaign=place-action-link&pickup=true';
  };

  return (
    <div className="home-content">
      <div className="store-info">
        <h2>About Our Store</h2>
        <img src={storeImage} alt="Store" className="store-image" />
        <p>M & A Liquor and Wine, nestled in the vibrant community of Brighton Beach, is a small, family owned gem. Despite its size, our store boasts a carefully selected range of Vodka, Wine, Champagne, Tequila, Whiskey, and Cognac, each handpicked for its quality and distinctiveness. As a family-owned business, we focus on creating a warm, welcoming atmosphere where every customer feels valued. Our two-person team is not just knowledgeable about our products, but also passionate about helping customers find the perfect spirit for any occasion. We believe in quality over quantity, and our small scale allows us to maintain a personal touch and offer tailored recommendations. At M & A Liquor and Wine, we're more than just a store; we're a part of the Brighton Beach community, and we invite you to come in and experience the personal, attentive service that only a small business can provide.</p>
        <div className="store-address">
          <p>1109 Brighton Beach Ave, Brooklyn, NY 11235</p>
          <p>Telephone: (718) 332-3502</p>
        </div>
        <button onClick={openGoogleMaps} className="find-us-button">Find Us on Google Maps</button>
        <button onClick={openGrubhub} className="order-grubhub-button">Order on Grubhub</button>
      </div>
    </div>
  );
}

export default Home;