import PokemonForm from './PokemonForm'
import Filter from './Filter'
import PokemonCollection from './PokemonCollection'
//Imported data from other files

function App() {
  return (
    <div className="App ui container">
      <h1>Pokedex</h1>
      <br />
      <PokemonForm />
      <br />
      <Filter />
      <br />
      <PokemonCollection />
    </div>
  );
}
//component that holds all of the other components in it to create the actual app.

export default App;
