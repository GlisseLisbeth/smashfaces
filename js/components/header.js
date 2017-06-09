'use strict';

const Header = () =>{
  const header = $('<header class="container"></header>');
  const h1 = $('<h1>Smash Faces</h1>');
  const hr = $('<hr class="pull-left">');
  header.append(h1);
  header.append(hr);
  return header;
}
