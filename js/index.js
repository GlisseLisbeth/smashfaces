'use strict';

const render = (root) =>{
  root.empty();
  const wrapper = $('<div class ="wrapper"></div>');
  wrapper.append(Header());
  wrapper.append(Description());
  wrapper.append(Game())
  root.append(wrapper);
}

const state = {
   mexico: mexico,
   peru: peru,
   point: 0,
   intent: 0
};

$( _ => {
    const root = $('.root');
    render(root);
});
