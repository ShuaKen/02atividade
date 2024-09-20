import './App.css';

function App() {
  const date = new Date();
  const currentYear = date.getFullYear();
  const veiculos = [
    { id: 1, nome: 'Celta', marca: 'Chevrolet', ano: 2015 },
    { id: 2, nome: 'Uno', marca: 'Fiat', ano: 2018 },
    { id: 3, nome: 'Fusca', marca: 'Volkswagen', ano: 1969 },
    { id: 4, nome: 'Civic', marca: 'Honda', ano: 2017 },
    { id: 5, nome: 'Corolla', marca: 'Toyota', ano: 2019 },
    { id: 6, nome: 'Vectra', marca: 'Chevrolet', ano: 1999},
    { id: 7, nome: 'Golf', marca: 'Volkswagen', ano: 2016 }
  ];
  const isentoIPVA = veiculos => (currentYear - veiculos.ano ) <= 20 ? 'Ainda Paga IPVA': 'Insento de IPVA';
  return (
    <div className="App">
      <h1>Lista de Veículos</h1>
      <ul>
        {veiculos.map((veiculo) => (
          <li key={veiculo.id}>
            {veiculo.nome} - {veiculo.marca} ({veiculo.ano})- {isentoIPVA(veiculo)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
