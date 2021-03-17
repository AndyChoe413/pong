// Size of the game area (in px)
const GAME_AREA_WIDTH = 700;
const GAME_AREA_HEIGHT = 500;

// Size of the paddles (in px)
const PADDLE_HEIGHT = 100;
const PADDLE_WIDTH = 20;

// Size of the ball (in px)
const BALL_SIZE = 20;

// Get the computer paddle element
const computerPaddle = document.querySelector('.computer-paddle');

// Initial computer paddle y-position and y-velocity
let computerPaddleYPosition = 0;
let computerPaddleYVelocity = 3;

// Get the ball element
const ball = document.querySelector('.ball')

//initial ball position
let ballXPosition = 0;
let ballYPosition = 0;
let ballXVelocity = 2;
let ballYVelocity = 2;

// Update the pong world
function update() {

    //-----------------ball code----------------------------//

    // Update ball position
    ballXPosition += ballXVelocity
    ballYPosition += ballYVelocity
    
    if (ballYPosition <= 0) {
        ballYVelocity = - ballYVelocity
    }

    if (ballXPosition >= GAME_AREA_HEIGHT - BALL_SIZE) {
    ballXVelocity = + ballXVelocity
    }
    
    if (ballXPosition <= 0) {
        ballXVelocity = + ballXVelocity
    }

        //If ball goes off screen bring it back
    if (ballYPosition >= GAME_AREA_HEIGHT - BALL_SIZE) {
    ballYVelocity = - ballYVelocity
    }

    //Apply the balls y-position
    ball.style.left = `${ballXPosition}px`;

    //Apply the balls x-position
    ball.style.top = `${ballYPosition}px`;
    

    // ---------------Paddle code----------------------------//

    
    // Update the computer paddle's position
    computerPaddleYPosition = computerPaddleYPosition + computerPaddleYVelocity;

    if (computerPaddleYPosition + PADDLE_HEIGHT >= GAME_AREA_HEIGHT) {
        computerPaddleYPosition -= 2;
        computerPaddleYPosition = GAME_AREA_HEIGHT - PADDLE_HEIGHT;
    }

     if (computerPaddleYPosition - PADDLE_HEIGHT <= -1) {
        computerPaddleYPosition = PADDLE_HEIGHT;
    }


    // If the computer paddle goes off the edge of the screen, bring it back
    computerPaddleYPosition = computerPaddleYPosition % (GAME_AREA_HEIGHT - PADDLE_HEIGHT);

    // Apply the y-position 
    computerPaddle.style.top = `${computerPaddleYPosition}px`;

    console.log(computerPaddleYPosition)
}

// Call the update() function everytime the browser is ready to re-render
function loop() {
    update();
    window.requestAnimationFrame(loop);
}
window.requestAnimationFrame(loop);