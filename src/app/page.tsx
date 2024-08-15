export default function Home() {
  let objetos = [10, 20, 30];
  let objetoLlave = { a: 1, b: 2, c: 3 };
  let objetoLLaveYCaja = [
    { a: 1, b: 2, c: 3 },
    { a: 1, b: 2, c: 3 },
    { a: 1, b: 2, c: 3 },
  ];
  return (
    <div>
      {/*
      {objetos.map((objeto) => (
        <div>
          <p key={objeto}>{objeto}</p>
          <p> {objetos}</p>
        </div>
      ))}

      <div className="mt-[9rem]">
        {Object.keys(objetoLlave).map((key) => (
          <div>
            <p key={key}>{key}</p>
            <p key={key}> {objetoLlave[key]}</p>
          </div>
        ))}
        
        
        */}

      <div className="mt-[9rem]">
        {objetoLLaveYCaja.map((objeto, index) => (
          <div key={index}>
            {Object.keys(objeto).map((key) => (
              <div key={key}>
                <p>{key}</p>
                <p> {objeto[key]}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
