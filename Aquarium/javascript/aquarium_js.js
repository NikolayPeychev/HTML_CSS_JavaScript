function toggleSound() {
  var audioElem = document.getElementById('mySound1');
  if (audioElem.paused)
    audioElem.play();
 else
    audioElem.pause();
}

    function PlaySound() {
          var sound = document.getElementById("audio");
          sound.play()
      }
   

$(document).ready(function() {
    animateDiv($('#fish1'));
        animateDiv($('#fish2'));
        animateDiv($('#fish3'));
        animateDiv($('#fish4'));
        animateDiv($('#fish5'));
        animateDiv($('#fish6'));
        animateDiv($('#fish7'));

});

function makeNewPosition($container) {

    
    var h = $container.height() - -600;
    var w = $container.width() - 150;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh, nw];

}

function animateDiv($target) {
    var newq = makeNewPosition($target.parent());
    var oldq = $target.offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);

    $target.animate({
        top: newq[0],
        left: newq[1]
    }, speed, function() {
        animateDiv($target);
    });

};

function calcSpeed(prev, next) {

    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);

    var greatest = x > y ? x : y;

    var speedModifier = 0.1;

    var speed = Math.ceil(greatest / speedModifier);

    return speed;

}
