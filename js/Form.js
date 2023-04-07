class Form {
  constructor() {
    //this makes the input place and the attribute has the property "placeHolder" which basically is some 
    //kind of text that you can type your name in
    this.input = createInput("").attribute("placeholder", "Enter your name");
    this.playButton = createButton("Play");
    this.titleImg = createImg("./assets/title.png", "game title");
    this.greeting = createElement("h2");
  }

  setElementsPosition() {
    this.titleImg.position(120, 160);
    this.input.position(width / 2 - 110, height / 2 - 80);
    this.playButton.position(width / 2 - 90, height / 2 - 20);
    this.greeting.position(width / 2 - 300, height / 2 - 100);
  }

  setElementsStyle() {
    //the class does this: it's the styles that we made in the style.css. This is how we get it in here 
    this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
  }

  //BP
  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

  //BP
  handleMousePressed() {
    this.playButton.mousePressed(() => {
      this.input.hide();
      this.playButton.hide();
      var message = `
      Hello ${this.input.value()}
      </br>wait for another player to join...`;
      //what does html do: it just add the text to the createElement component
      this.greeting.html(message);
      playerCount += 1;
      player.name = this.input.value();
      player.index = playerCount;
    player.addPlayer();//aa
      player.updateCount(playerCount); // BP
     player.getDistance(); //aa
    });
  }

  display() {
    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed();
  }
}
