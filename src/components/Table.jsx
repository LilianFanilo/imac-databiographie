import data from "../data/data.json";

const Table = () => {
  return (
    <div>
      <table className="block p-3 mb-1 border">
        <thead>
          <tr className="text-sm 2xl:text-xl">
            <th>Nom</th>
            <th>Éditeur</th>
            <th>Date de sortie</th>
            <th>Genre</th>
            <th>Complétion (%)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr className="text-xs 2xl:text-xl" key={index}>
              <td>{item.nom}</td>
              <td>{item.editeur}</td>
              <td>{item.dateDeSortie}</td>
              <td>{item.genre}</td>
              <td>{item.completion}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-sm italic font-semibold 2xl:text-xl">
        Extrait de la liste des jeux et de leur complétion
      </p>
    </div>
  );
};

export default Table;