'use strict';

const render = (root) =>{
  root.empty();
  const wrapper = $('<div class ="wrapper"></div>');
  wrapper.append(Header(_=>render(root)));
  wrapper.append(Description(_=>render(root)));
  wrapper.append(Game(_=>render(root)))
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
