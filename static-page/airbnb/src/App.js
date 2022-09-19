import Header from "./components/Header"
import Hero from "./components/Hero"
import Card from './components/Card'
import data from './data'
import './App.css';

function App() {
  const card = data.map(item => {
    return(
      <Card 
        img = {item.coverImg}
        rating = {item.stats.rating}
        location = {item.stats.reviewCount}
        title = {item.title}
        price = {item.price}
      />
    )
  })
  return (
    /* < Hero /> */
    <div className="App">
      <div className="App-header">
        <Header />
        {card}
      </div>
    </div>
  );
}

export default App;
