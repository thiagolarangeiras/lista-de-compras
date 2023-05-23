import { useState, useEffect } from 'react';
import trashBin from '../assets/trashBin.svg';

export default function ShopList() {
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    value: 0,
    qt: 1,
  });

  function subitForm(event) {
    event.preventDefault();
    let errors = '';
    if (formData.name === '') errors += 'Preencha o nome\n';
    if (formData.qt <= 0) errors += 'A menor quantidade possivel é 1\n';
    if (errors != '') {
      alert(errors);
      return;
    }
    setItems([...items, formData]);
    setFormData({
      name: '',
      value: 0,
      qt: 1,
    });
  }

  return (
    <form action="#" method="post" onSubmit={subitForm}>
      <fieldset className="border p-3 mb-3">
        <h3>Adicionar Itens</h3>
        <div className="form-group mb-3">
          <label htmlFor="name">Nome do produto:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={formData.name}
            onChange={(event) =>
              setFormData({ ...formData, name: event.target.value })
            }
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="qt">Quantidade do item:</label>
          <input
            type="number"
            className="form-control"
            id="qt"
            value={formData.qt}
            onChange={(event) =>
              setFormData({ ...formData, qt: Number(event.target.value) })
            }
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="value">Valor do item:</label>
          <input
            type="number"
            className="form-control"
            id="value"
            value={formData.value}
            onChange={(event) =>
              setFormData({
                ...formData,
                value: Number(event.target.value),
              })
            }
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Adicionar
        </button>
      </fieldset>
      <h3>Lista</h3>
      {items.map((item, index) => (
        <ItemCard id={index} item={item} setItems={setItems} />
      ))}
    </form>
  );
}

function ItemCard({ id, item, setItems }) {
  return (
    <div className="border p-3 mb-3 d-flex flex-row justify-content-between">
      <div className="m-2">
        <h4>{item.name}</h4>
        <h6>Quantidade: {item.qt}</h6>
        <h6>Valor: R$ {item.value}</h6>
        <br />
      </div>
      <button
        onClick={(event) => {
          setItems((context) => context.filter((item, index) => id !== index));
        }}
        type="button"
        className="btn btn-outline-danger p-4"
      >
        <img src={trashBin} className="bi bi-trash" alt="Lixeira" />
      </button>
    </div>
  );
}
