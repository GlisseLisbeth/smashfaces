'use strict';

const render = (root) =>{
  root.empty();
  const wrapper = $('<div class ="wrapper"></div>');
  wrapper.append(Header());
  wrapper.append(Description());
  wrapper.append(Game())
  root.append(wrapper);
}

// const state = {
//   codersMexico = [],
//   codersPeru = []
// }

$( _ => {
  const root = $('.root');
  render(root);
});
