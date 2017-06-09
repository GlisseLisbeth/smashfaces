const Description = () => {
  const secction = $('<section class="container description"></section>');
  const p = $('<p>Bienvenidas al juego de Smash Faces, tu misión es poder identificar a todas tus compañeras de clase, ingresando para ellos su nombre. Tienes 5 oportunidades antes de perder 1 punto y pasar a la siguiente.</p>');
  secction.append(p);
  return secction;
}
