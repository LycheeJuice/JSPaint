(function() {
    "use scrict";
    
    //global variables
    let brush;
    let gameArea;
    let playing = false;
    
    window.onload = function(){
        //init
        gameArea = $("gameArea");
        initGameArea(gameArea);
        brush = new gameObject(25, 25, "blue", 10, 600, "brush");
        brush.drawObj();
        $("startGame").onclick = gameStart;
        $("colorSelect").onclick = changeColor;
        $("clear").onclick = erase;
        
    }
    
    //not sure why but doing this in the css sheet messes with the size of the elements
    function initGameArea(area) {
        area.width = 1280;
        area.height = 720; 
    }
    
    
    function gameStart() {
        playing = true;
        document.onkeydown = brushControl;
    }
    
    
    function gameObject(width, height, color, x, y, type) {
        //construct
        this.width = width;
        this.height = height;
        this.color = color; 
        this.x = x;
        this.y = y;
        this.type = type;
        
        //trackers and variables
        this.velocityX = 8;
        this.velocityY = 8;
        
        //local functions
        this.drawObj = function() {
            console.warn("drawing");
            let objArea = gameArea.getContext("2d");
            if (this.type == "brush") {
                objArea.fillStyle = this.color;
                objArea.fillRect(this.x, this.y, this.width, this.height);
            } 
            
        }
    }
         
    function brushControl(event) {
        //determine keypress and move brush object and redraw
        if(playing) {
            if (event.keyCode == '37') {
                //left arrow
                console.warn("left");
                brush.x -= brush.velocityX;
                brush.drawObj();
                    
             }
            
            if (event.keyCode == '39') {
                //right arrow
                console.warn("right");
                brush.x += brush.velocityX;
                brush.drawObj();
            }
            
            if (event.keyCode == '38') {
                //up
                console.warn("up");
                brush.y -= brush.velocityY;
                brush.drawObj();
                    
             }
            
            if (event.keyCode == '40') {
                //down
                console.warn("down");
                brush.y += brush.velocityY;
                brush.drawObj();
            }
        }  
    }
    
    function changeColor() {
        console.warn("color changed");
        let input = $("colorSwap").value;
        brush.color = input;
        console.warn(brush.color);
        
    }
    
    function erase(){
        console.warn("cleared");
        let area = gameArea.getContext("2d");
        area.clearRect(0, 0, gameArea.width, gameArea.height);
    }
    
    
    
    //helper
    function $(id){
        return document.getElementById(id);
    }
    
})();