import { useState, useEffect } from 'react';

export default function Chat() {
  const [color, setColor] = useState('green');

  useEffect(() => {
    if (color === 'red') {
      alert('COMUNISTA!');
    }
  }, [color]);

  return (
    <div>
      <div
        style={{
          padding: 12,
          marginBottom: 21,
          backgroundColor: color,
        }}
      >
        <p>Teste de Elemento colorido {color}</p>
      </div>

      <div
        class="d-flex gap-2"
        style={{ padding: 9, flexWrap: 'wrap', backgroundColor: '#dfdfdf' }}
      >
        <button
          onClick={() => setColor('blue')}
          type="button"
          className="btn btn-primary"
        >
          Primary
        </button>
        <button
          onClick={() => setColor('gray')}
          type="button"
          className="btn btn-secondary"
        >
          Secondary
        </button>
        <button
          onClick={() => setColor('green')}
          type="button"
          className="btn btn-success"
        >
          Success
        </button>
        <button
          onClick={() => setColor('red')}
          type="button"
          className="btn btn-danger"
        >
          Danger
        </button>
        <button
          onClick={() => setColor('orange')}
          type="button"
          className="btn btn-warning"
        >
          Warning
        </button>
        <button
          onClick={() => setColor('lightblue')}
          type="button"
          className="btn btn-info"
        >
          Info
        </button>
        <button
          onClick={() => setColor('white')}
          type="button"
          className="btn btn-light"
        >
          Light
        </button>
        <button
          onClick={() => setColor('black')}
          type="button"
          className="btn btn-dark"
        >
          Dark
        </button>
      </div>
    </div>
  );
}
