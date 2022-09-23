var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["efff0777-b0bd-4b74-b91a-aa8ca8fe0cee","3edbdfd2-aaf7-45c5-afe0-9c6b38a042e0","7be78c4b-d6f3-41ed-b804-2f3875168c10","9f0b235f-476e-457c-b729-6f316060d90c","52f03296-148d-43d4-a05a-288a16beb53f","a5eef545-c5a2-4405-9597-da02acf00394","06e4b240-d4c9-4c88-a10d-d0d48f46bc58","ed540bc5-a13b-407b-90b2-befad60fc2ee","e660a2fc-2c9a-4bdc-9d9e-21638612bfb2","234212fc-10a4-4fa0-b39b-a5933fd7df5e","9a6c1100-0c54-4010-b7e3-4013230f1af0","3bb356ae-7908-4947-bdfe-bfab2951afb3","2971c69f-d6b7-4128-8555-36086ca7a516","54abf82a-b533-41cd-b6ef-3f4879d5030c","7c1ab80a-ab0a-452d-bf97-4c6ef8b7a95d","667680e6-f1a5-413b-85b8-667b9160d2ae","7e853db9-fae8-4a8d-bf75-d96ba99d14e3","705f86ec-c730-4b3f-ae29-8ae9972f6ddd","20a247f2-3571-48cd-ad51-8e956bc995aa","9bd1d3b8-ed07-4be9-86c1-03e3cc4be202","5f75532d-45e6-4c68-9fb2-4ed58cfab671","ee9b2f90-3558-44ce-909e-aab6fd5408f8","a8c81254-7666-4b10-9d65-baa176a055a6","453048a5-8311-4eb7-bebf-f82f585c3d75"],"propsByKey":{"efff0777-b0bd-4b74-b91a-aa8ca8fe0cee":{"name":"cricket","sourceUrl":"assets/v3/animations/lJdmskmsR8Vp1Idxnyc4jsJu8D8p5ErkYal3qFMGBno/efff0777-b0bd-4b74-b91a-aa8ca8fe0cee.png","frameSize":{"x":900,"y":451},"frameCount":1,"looping":true,"frameDelay":4,"version":"K8qE6g26XS5f1_lXJ9yFzG_P3lNlEsIG","loadedFromSource":true,"saved":true,"sourceSize":{"x":900,"y":451},"rootRelativePath":"assets/v3/animations/lJdmskmsR8Vp1Idxnyc4jsJu8D8p5ErkYal3qFMGBno/efff0777-b0bd-4b74-b91a-aa8ca8fe0cee.png"},"3edbdfd2-aaf7-45c5-afe0-9c6b38a042e0":{"name":"honeybee","sourceUrl":"assets/v3/animations/lJdmskmsR8Vp1Idxnyc4jsJu8D8p5ErkYal3qFMGBno/3edbdfd2-aaf7-45c5-afe0-9c6b38a042e0.png","frameSize":{"x":820,"y":900},"frameCount":1,"looping":true,"frameDelay":4,"version":"MCnjVCz3o.tNFepaa3LgoA6_g4UaT8.c","loadedFromSource":true,"saved":true,"sourceSize":{"x":820,"y":900},"rootRelativePath":"assets/v3/animations/lJdmskmsR8Vp1Idxnyc4jsJu8D8p5ErkYal3qFMGBno/3edbdfd2-aaf7-45c5-afe0-9c6b38a042e0.png"},"7be78c4b-d6f3-41ed-b804-2f3875168c10":{"name":"floating_alien_1","sourceUrl":"assets/api/v1/animation-library/gamelab/Dz9.cydbAADxZqnDUs9C7cNcF_F4xck5/category_characters/floating_alien.png","frameSize":{"x":239,"y":406},"frameCount":1,"looping":true,"frameDelay":2,"version":"Dz9.cydbAADxZqnDUs9C7cNcF_F4xck5","loadedFromSource":true,"saved":true,"sourceSize":{"x":239,"y":406},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Dz9.cydbAADxZqnDUs9C7cNcF_F4xck5/category_characters/floating_alien.png"},"9f0b235f-476e-457c-b729-6f316060d90c":{"name":"kid_11_1","sourceUrl":"assets/api/v1/animation-library/gamelab/zLuUEVl01I3jYuYhQVXfwnQ2dadzV8bN/category_characters/kid_11.png","frameSize":{"x":237,"y":353},"frameCount":1,"looping":true,"frameDelay":2,"version":"zLuUEVl01I3jYuYhQVXfwnQ2dadzV8bN","loadedFromSource":true,"saved":true,"sourceSize":{"x":237,"y":353},"rootRelativePath":"assets/api/v1/animation-library/gamelab/zLuUEVl01I3jYuYhQVXfwnQ2dadzV8bN/category_characters/kid_11.png"},"52f03296-148d-43d4-a05a-288a16beb53f":{"name":"pink_monster_1","sourceUrl":"assets/api/v1/animation-library/gamelab/DxGuqzBZCE_nOwNPmmU9FjNcYY37fFFp/category_characters/pink_monster.png","frameSize":{"x":242,"y":285},"frameCount":1,"looping":true,"frameDelay":2,"version":"DxGuqzBZCE_nOwNPmmU9FjNcYY37fFFp","loadedFromSource":true,"saved":true,"sourceSize":{"x":242,"y":285},"rootRelativePath":"assets/api/v1/animation-library/gamelab/DxGuqzBZCE_nOwNPmmU9FjNcYY37fFFp/category_characters/pink_monster.png"},"a5eef545-c5a2-4405-9597-da02acf00394":{"name":"mouse_gray_1","sourceUrl":"assets/api/v1/animation-library/gamelab/ZDNlc.pTAcmPf8V9XWDKdtmQbgkDMf6U/category_animals/mouse_gray.png","frameSize":{"x":300,"y":296},"frameCount":1,"looping":true,"frameDelay":2,"version":"ZDNlc.pTAcmPf8V9XWDKdtmQbgkDMf6U","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":296},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ZDNlc.pTAcmPf8V9XWDKdtmQbgkDMf6U/category_animals/mouse_gray.png"},"06e4b240-d4c9-4c88-a10d-d0d48f46bc58":{"name":"pterodactyl_1","sourceUrl":"assets/api/v1/animation-library/gamelab/T82VGzsfgoMACn2kSWURSeh98Vjj_sHH/category_animals/pterodactyl.png","frameSize":{"x":300,"y":229},"frameCount":1,"looping":true,"frameDelay":2,"version":"T82VGzsfgoMACn2kSWURSeh98Vjj_sHH","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":229},"rootRelativePath":"assets/api/v1/animation-library/gamelab/T82VGzsfgoMACn2kSWURSeh98Vjj_sHH/category_animals/pterodactyl.png"},"ed540bc5-a13b-407b-90b2-befad60fc2ee":{"name":"82515 (1).png_1","sourceUrl":"assets/v3/animations/lJdmskmsR8Vp1Idxnyc4jsJu8D8p5ErkYal3qFMGBno/ed540bc5-a13b-407b-90b2-befad60fc2ee.png","frameSize":{"x":391,"y":672},"frameCount":1,"looping":true,"frameDelay":4,"version":"edPrYSaXKJZq8c9tanlkADj5Z9_LWtLt","loadedFromSource":true,"saved":true,"sourceSize":{"x":391,"y":672},"rootRelativePath":"assets/v3/animations/lJdmskmsR8Vp1Idxnyc4jsJu8D8p5ErkYal3qFMGBno/ed540bc5-a13b-407b-90b2-befad60fc2ee.png"},"e660a2fc-2c9a-4bdc-9d9e-21638612bfb2":{"name":"carrot","sourceUrl":"assets/v3/animations/lJdmskmsR8Vp1Idxnyc4jsJu8D8p5ErkYal3qFMGBno/e660a2fc-2c9a-4bdc-9d9e-21638612bfb2.png","frameSize":{"x":148,"y":125},"frameCount":1,"looping":true,"frameDelay":4,"version":"bgzs5sAJfnIZNB5YKoOT4p5wlwb1LpCL","loadedFromSource":true,"saved":true,"sourceSize":{"x":148,"y":125},"rootRelativePath":"assets/v3/animations/lJdmskmsR8Vp1Idxnyc4jsJu8D8p5ErkYal3qFMGBno/e660a2fc-2c9a-4bdc-9d9e-21638612bfb2.png"},"234212fc-10a4-4fa0-b39b-a5933fd7df5e":{"name":"tomato","sourceUrl":"assets/v3/animations/lJdmskmsR8Vp1Idxnyc4jsJu8D8p5ErkYal3qFMGBno/234212fc-10a4-4fa0-b39b-a5933fd7df5e.png","frameSize":{"x":148,"y":125},"frameCount":1,"looping":true,"frameDelay":4,"version":"oOB3iIRYVCJZShc9_3FWelcy2VaNVibm","loadedFromSource":true,"saved":true,"sourceSize":{"x":148,"y":125},"rootRelativePath":"assets/v3/animations/lJdmskmsR8Vp1Idxnyc4jsJu8D8p5ErkYal3qFMGBno/234212fc-10a4-4fa0-b39b-a5933fd7df5e.png"},"9a6c1100-0c54-4010-b7e3-4013230f1af0":{"name":"pumpkin","sourceUrl":"assets/v3/animations/lJdmskmsR8Vp1Idxnyc4jsJu8D8p5ErkYal3qFMGBno/9a6c1100-0c54-4010-b7e3-4013230f1af0.png","frameSize":{"x":148,"y":125},"frameCount":1,"looping":true,"frameDelay":4,"version":"ErMvjkyTPc_aLU4wIEK.A9qelk_CIqU1","loadedFromSource":true,"saved":true,"sourceSize":{"x":148,"y":125},"rootRelativePath":"assets/v3/animations/lJdmskmsR8Vp1Idxnyc4jsJu8D8p5ErkYal3qFMGBno/9a6c1100-0c54-4010-b7e3-4013230f1af0.png"},"3bb356ae-7908-4947-bdfe-bfab2951afb3":{"name":"potato","sourceUrl":"assets/v3/animations/lJdmskmsR8Vp1Idxnyc4jsJu8D8p5ErkYal3qFMGBno/3bb356ae-7908-4947-bdfe-bfab2951afb3.png","frameSize":{"x":148,"y":125},"frameCount":1,"looping":true,"frameDelay":4,"version":"AZWx8254iwI_qBNOmRH4U4bKXsYymU_Q","loadedFromSource":true,"saved":true,"sourceSize":{"x":148,"y":125},"rootRelativePath":"assets/v3/animations/lJdmskmsR8Vp1Idxnyc4jsJu8D8p5ErkYal3qFMGBno/3bb356ae-7908-4947-bdfe-bfab2951afb3.png"},"2971c69f-d6b7-4128-8555-36086ca7a516":{"name":"watermelon","sourceUrl":"assets/v3/animations/lJdmskmsR8Vp1Idxnyc4jsJu8D8p5ErkYal3qFMGBno/2971c69f-d6b7-4128-8555-36086ca7a516.png","frameSize":{"x":148,"y":125},"frameCount":1,"looping":true,"frameDelay":4,"version":"xH.Q5A_hB3BFXuYX4HNuaJDEaSIoy65m","loadedFromSource":true,"saved":true,"sourceSize":{"x":148,"y":125},"rootRelativePath":"assets/v3/animations/lJdmskmsR8Vp1Idxnyc4jsJu8D8p5ErkYal3qFMGBno/2971c69f-d6b7-4128-8555-36086ca7a516.png"},"54abf82a-b533-41cd-b6ef-3f4879d5030c":{"name":"mushroom","sourceUrl":"assets/v3/animations/lJdmskmsR8Vp1Idxnyc4jsJu8D8p5ErkYal3qFMGBno/54abf82a-b533-41cd-b6ef-3f4879d5030c.png","frameSize":{"x":148,"y":125},"frameCount":1,"looping":true,"frameDelay":4,"version":"6XIBaVUQwxa2prMGdjrcAwiadaHoXTy1","loadedFromSource":true,"saved":true,"sourceSize":{"x":148,"y":125},"rootRelativePath":"assets/v3/animations/lJdmskmsR8Vp1Idxnyc4jsJu8D8p5ErkYal3qFMGBno/54abf82a-b533-41cd-b6ef-3f4879d5030c.png"},"7c1ab80a-ab0a-452d-bf97-4c6ef8b7a95d":{"name":"carrot_1_1","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"hrtxrU5HvKP.U_7vMjAFFRsltAZO.P.G","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/7c1ab80a-ab0a-452d-bf97-4c6ef8b7a95d.png"},"667680e6-f1a5-413b-85b8-667b9160d2ae":{"name":"face_pear_1","sourceUrl":"assets/api/v1/animation-library/gamelab/KN2gdmi.RZPwI88Sprp4CgocxKaPXG3a/category_food/face_pear.png","frameSize":{"x":236,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"KN2gdmi.RZPwI88Sprp4CgocxKaPXG3a","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":236,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/KN2gdmi.RZPwI88Sprp4CgocxKaPXG3a/category_food/face_pear.png"},"7e853db9-fae8-4a8d-bf75-d96ba99d14e3":{"name":"face_peach_1","sourceUrl":"assets/api/v1/animation-library/gamelab/cUFPlqmmuzHgci5G4JkL6Xj03OSHw96G/category_food/face_peach.png","frameSize":{"x":367,"y":395},"frameCount":1,"looping":true,"frameDelay":2,"version":"cUFPlqmmuzHgci5G4JkL6Xj03OSHw96G","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":367,"y":395},"rootRelativePath":"assets/api/v1/animation-library/gamelab/cUFPlqmmuzHgci5G4JkL6Xj03OSHw96G/category_food/face_peach.png"},"705f86ec-c730-4b3f-ae29-8ae9972f6ddd":{"name":"face_strawberry_1","sourceUrl":null,"frameSize":{"x":24,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"OmAfitHMPnIEA3IWScSBaHuU3nFz_dUx","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":24,"y":30},"rootRelativePath":"assets/705f86ec-c730-4b3f-ae29-8ae9972f6ddd.png"},"20a247f2-3571-48cd-ad51-8e956bc995aa":{"name":"gamefood03_1","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"RCU3y4n0ZOxVa0SUqnE0odWE3YXXukl5","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/20a247f2-3571-48cd-ad51-8e956bc995aa.png"},"9bd1d3b8-ed07-4be9-86c1-03e3cc4be202":{"name":"gamefood01_1","sourceUrl":"assets/api/v1/animation-library/gamelab/L9jm5Y4z.D0AXv6kP96ZS8khLd19NN7c/category_food/gamefood01.png","frameSize":{"x":400,"y":382},"frameCount":1,"looping":true,"frameDelay":2,"version":"L9jm5Y4z.D0AXv6kP96ZS8khLd19NN7c","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":382},"rootRelativePath":"assets/api/v1/animation-library/gamelab/L9jm5Y4z.D0AXv6kP96ZS8khLd19NN7c/category_food/gamefood01.png"},"5f75532d-45e6-4c68-9fb2-4ed58cfab671":{"name":"gamefood07_1","sourceUrl":null,"frameSize":{"x":31,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"thiYQQpIS5STj45tKqzl1zt_CWgS45cm","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":31,"y":30},"rootRelativePath":"assets/5f75532d-45e6-4c68-9fb2-4ed58cfab671.png"},"ee9b2f90-3558-44ce-909e-aab6fd5408f8":{"name":"gamefood13_1","sourceUrl":null,"frameSize":{"x":26,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"JujCj3WfSfthX1vRGnKFfpmBrtj9HkCd","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":26,"y":30},"rootRelativePath":"assets/ee9b2f90-3558-44ce-909e-aab6fd5408f8.png"},"a8c81254-7666-4b10-9d65-baa176a055a6":{"name":"gamefood16_1","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"OGzkAbhAGJjcfKxdVzHNE5YNudKiL7.U","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/a8c81254-7666-4b10-9d65-baa176a055a6.png"},"453048a5-8311-4eb7-bebf-f82f585c3d75":{"name":"gamefood06_1","sourceUrl":null,"frameSize":{"x":32,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"nAt5VcLBGMtNfwsTTRaXQh_D.ZTYvDf1","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":32,"y":30},"rootRelativePath":"assets/453048a5-8311-4eb7-bebf-f82f585c3d75.png"}}};
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


for (var i = 50; i < 400; i=i+50) 
{
  var pumpkin = createSprite(i, 50, 20, 20);
  pumpkin.setAnimation("gamefood06_1");

}


for (var s = 50; s < 368;  s=s+50)
{
  var tomate = createSprite(s,100,20,20);
  tomate.setAnimation("gamefood07_1");
}

for (var f = 50; f < 368;  f=f+50)
{
  var champiñon = createSprite(f,146,20,20);
  champiñon.setAnimation("gamefood16_1");
}

for (var d = 50; d < 368;  d=d+50)
{
  var berengena = createSprite(d,296,20,20);
    berengena.setAnimation("face_strawberry_1");
}



for (var p = 50; p < 366;  p=p+50)
{
  var pepino = createSprite(p,346,20,20);
   pepino.setAnimation("gamefood13_1");
}

for (var z = 50; z < 368;  z=z+50)
{
  var zanahoria = createSprite(z,246,20,20);
  zanahoria.setAnimation("carrot_1_1");
}

for (var e = 50; e < 368;  e=e+50)
{
  var espinaca = createSprite(e,196,20,20);
  espinaca.setAnimation("gamefood03_1");
}




function draw() {
 
background("brown");
  drawSprites();

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
