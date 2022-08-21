var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["4acc90e2-d3af-4294-9935-a036dfb403c3"],"propsByKey":{"4acc90e2-d3af-4294-9935-a036dfb403c3":{"name":"american_pizza_1","categories":["food"],"frameCount":1,"frameSize":{"x":378,"y":374},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 17:40:57 UTC","pngLastModified":"2021-01-05 17:41:38 UTC","version":"2XLgtp13LxzzFdqWStgaBH15LGgvaKpS","sourceUrl":"assets/api/v1/animation-library/gamelab/2XLgtp13LxzzFdqWStgaBH15LGgvaKpS/category_food/american_pizza.png","sourceSize":{"x":378,"y":374},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/2XLgtp13LxzzFdqWStgaBH15LGgvaKpS/category_food/american_pizza.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

function draw() {
  rect(35, 40, 100, 10);
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
