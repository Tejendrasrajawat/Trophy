import React from "react";
import Header from "./components/Header";
import FeaturedProperties from "./components/FeaturedProperties";
import MeetOurDesigner from "./components/MeetOurDesigner";
import TopRatedProperties from "./components/TopRatedProperties";
import Footer from "./components/Footer";
import AppSection from "./components/AppSection";

function App() {
  return (
    <div className="App">
      <Header />
      <FeaturedProperties />
      <MeetOurDesigner />
      <TopRatedProperties />
      <AppSection />
      <Footer />
    </div>
  );
}

export default App;
