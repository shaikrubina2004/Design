import ProjectGallery from "./components/ProjectGallery";
import OverlappingCards from "./components/Service/OverlappingCards";
import ViewOurServiceBadge from "./components/ServiceBadge";
import Home from "./components/Home";

// Fisher-Yates shuffle
function shuffleImages(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Auto import images once (correct)
const imageModules = import.meta.glob("./components/Gallary/*.{jpg,png,jpeg,webp}", { eager: true });

let images = Object.values(imageModules).map((img) => img.default);

// Random shuffle
images = shuffleImages(images);

console.log("Loaded Images:", images);

function App() {
  return (
    <>
    
      <Home/>
      {/* <OverlappingCards />
      <ProjectGallery images={images} />
      <ViewOurServiceBadge/> */}
    </>
  );
}

export default App;
