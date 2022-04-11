import "./App.css";
import ListProduct from "./component/ListProduct";

function App() {
  const tab = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbiQOwdVAybzsVRFvjvnUiJ1Bh4FBu-B9eqdP39Fng-ywtQsZYvWTAKWErsRAF7VFPU40&usqp=CAU",
      nom: "chat",
      ref: "12345ff",
      prix: 230,
      categorie: "animal",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbiQOwdVAybzsVRFvjvnUiJ1Bh4FBu-B9eqdP39Fng-ywtQsZYvWTAKWErsRAF7VFPU40&usqp=CAU",
      nom: "chat",
      ref: "12345ff",
      prix: 230,
      categorie: "voiture",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbiQOwdVAybzsVRFvjvnUiJ1Bh4FBu-B9eqdP39Fng-ywtQsZYvWTAKWErsRAF7VFPU40&usqp=CAU",
      nom: "chat",
      ref: "12345ff",
      prix: 230,
      categorie: "electonique",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbiQOwdVAybzsVRFvjvnUiJ1Bh4FBu-B9eqdP39Fng-ywtQsZYvWTAKWErsRAF7VFPU40&usqp=CAU",
      nom: "chat",
      ref: "12345ff",
      prix: 230,
      categorie: "vetement",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbiQOwdVAybzsVRFvjvnUiJ1Bh4FBu-B9eqdP39Fng-ywtQsZYvWTAKWErsRAF7VFPU40&usqp=CAU",
      nom: "chat",
      ref: "12345ff",
      prix: 230,
      categorie: "femme",
    },
  ];
  function handlePrix(prix) {
    return alert(`Le prix de ce produit est :${prix}`)
  }
  return (
    <div className="App">
      <button>Femme</button> <button> All </button>
      <ListProduct produits={tab} cbf={handlePrix}/>
    </div>
  );
}

export default App;
