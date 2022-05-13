import React, { useRef } from 'react'
import '../Events.css'

export const MoveElement = () => {
    const ball = useRef()

    let currentDroppable = null;

    ball.onmousedown = function(event) {

      let shiftX = ball.current.getBoundingClientRect().left;
      let shiftY = ball.current.getBoundingClientRect().top;
      console.log(shiftX);

      ball.current.style.position = 'absolute';
      ball.current.style.zIndex = 1000;
      document.body.append(ball);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        ball.current.style.left = pageX - shiftX + 'px';
        ball.current.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        ball.current.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        ball.current.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable');
        if (currentDroppable !== droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }

      document.addEventListener('mousemove', onMouseMove);

      ball.current.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        ball.current.onmouseup = null;
      };

    };

    function enterDroppable(elem) {
      elem.style.background = 'pink';
    }

    function leaveDroppable(elem) {
      elem.style.background = '';
    }

    ball.ondragstart = function() {
      return false;
    };


  return (
    <div><img ref={ball} alt='' src="https://en.js.cx/clipart/ball.svg" id="ball"/></div>
  )
}
