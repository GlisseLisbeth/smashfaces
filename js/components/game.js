'use strict';
var random, nameSeat, objSeat;
const reRender = (nameSeat , objSeat, img, update) => {
    random = Math.floor(Math.random() * objSeat.length);
    img.attr("src","fotos/"+nameSeat+"/" +  objSeat[random].image);
		update();
    return random;
  }

const Game = (update) =>{
  const game = $('<section class="container game"></section>');
  const gameUp = $('<div class ="row"></div>');
  const colGameUpLeft = $('<div class="col-lg-8 col-md-8 col-sm-8 col-xs-8"></div>');
  const span  = $('<span class="span12">Elige tu sede: </span>');
  const seats = $('<select class="seats" name="seats"></select>');
  const option = $('<option value="" hidden>Seleccione una opción</option>');
  const optionPeru = $('<option value="peru">Perú</option>');
  const optionMexico = $('<option value="mexico">México</option>');
  const colGameUpRight = $('<div class="col-lg-4 col-md-4 col-sm-4 col-xs-4"></div>');
  const points = $('<div class="points span12 pull-right">Puntos:<span id="points"></span></div>');

  const gameDown = $('<div id="game" class="row"></div>');
  const colGameDownLeft = $('<div class="down-left col-lg-6 col-md-6 col-sm-6 col-xs-6"></div>');
  const img = $('<img class="img-foto img-responsive" src="fotos/no-foto.jpg";"></img>');
  const colGameDownRight = $('<div class="down-right col-lg-6 col-md-6 col-sm-6 col-xs-6"></div>');
  const formGroup = $('<div class="form-group span12 margin-top-20"></div>');
  const nameLabel = $('<label class="name" for="name">Ingresa su nombre: </label>');
  const nameInput = $('<input type="text" class="form-control" id="name">')
  const send = $('<button id="btnSend" class="btn btn-warning text-uppercase center-block">Comprobar</button>');
  const msg = $('<div class="row "><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12"></div></div>');
  const alertMsg =$('<div class="alert alert-success msg hidden">Holas</div>');
  colGameDownLeft.append(img);
  gameDown.append(colGameDownLeft);
  formGroup.append(nameLabel);
  formGroup.append(nameInput);
  colGameDownRight.append(formGroup);
  colGameDownRight.append(send);
  gameDown.append(colGameDownRight);

  colGameUpLeft.append(span);
  seats.append(option);
  seats.append(optionMexico);
  seats.append(optionPeru);
  colGameUpLeft.append(seats);
  gameUp.append(colGameUpLeft);
  colGameUpRight.append(points);
  gameUp.append(colGameUpRight);
  msg.append(alertMsg);
  game.append(gameUp);
  game.append(gameDown);
  game.append(msg);

  seats.on('change',(e) => {
    e.preventDefault();
    nameSeat = $(e.target).val();
    if(nameSeat == "peru"){
      objSeat = state.peru;
      optionMexico.hide();
    }
    else if(nameSeat == "mexico"){
      objSeat = state.mexico;
      optionPeru.hide();
    }
    reRender(nameSeat, objSeat, img, update);
    nameInput.focus();
    update();
  });

  send.on('click',(e) => {
    e.preventDefault();
    msg.show();
    if(objSeat[random].name === nameInput.val()){
        msg.removeClass( "alert alert-success msg hidden" ).addClass( "alert alert-success msg" );
        msg.html("Bien").fadeOut(1000);
        state.point += 5;
        reRender(nameSeat, objSeat, img, update);
      }
      else if(state.intent<=5){
        msg.removeClass( "alert alert-success msg hidden" ).addClass( "alert alert-danger msg" );
        state.intent += 1;
        msg.html("Incorrecto, hiciste "+state.intent+" intento(s)").fadeOut(1000);
        if(state.intent == 5){
          state.intent = 0;
          state.point -= 1;
          reRender(nameSeat, objSeat, img, update);
          }
      }
      points.html("Puntos: "+state.point + " puntos");
      nameInput.val("");
      nameInput.focus();
      update();
  });
  return game;
}
