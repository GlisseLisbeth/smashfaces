'use strict';

const Game = (update) =>{
  const game = $('<section class="container game"></section>');
  const gameUp = $('<div class ="row"></div>');
  const colGameUpLeft = $('<div class="col-lg-8 col-md-8 col-sm-8 col-xs-8"></div>');
  const span  = $('<span class="span12">Elige tu sede: </span>');
  const seats = $('<select class="seats" name="seats">Lima</select>');
  const colGameUpRight = $('<div class="col-lg-4 col-md-4 col-sm-4 col-xs-4"></div>');
  const points = $('<div class="points span12 pull-right">Puntos:<span id="points">puntos</span></div>');

  const gameDown = $('<div id="game" class="row"></div>');
  const colGameDownLeft = $('<div class="down-left col-lg-6 col-md-6 col-sm-6 col-xs-6"></div>');
  const img = $('<img class="img-responsive" src="fotos/mexico/Alma Patricia Jimenez.JPG";"></img>');
  const colGameDownRight = $('<div class="down-right col-lg-6 col-md-6 col-sm-6 col-xs-6"></div>');
  const formGroup = $('<div class="form-group span12"></div>');
  const nameLabel = $('<label for="name">Ingresa su nombre</label>');
  const nameInput = $('<input type="text" class="form-control" id="name">')
  const send = $('<button id="btnSend" class="btn btn-warning text-uppercase center-block">Comprobar</button>');

  colGameDownLeft.append(img);
  gameDown.append(colGameDownLeft);
  formGroup.append(nameLabel);
  formGroup.append(nameInput);
  colGameDownRight.append(formGroup);
  colGameDownRight.append(send);
  gameDown.append(colGameDownRight);

  colGameUpLeft.append(span);
  colGameUpLeft.append(seats);
  gameUp.append(colGameUpLeft);
  colGameUpRight.append(points);
  gameUp.append(colGameUpRight);

  game.append(gameUp);
  game.append(gameDown);

  return game;
}
