(()=> {

    const canvas = document.getElementById('painting');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const context = canvas.getContext ('2d'); 
    
    let previousPoint = {x: 0, y: 0};
    
    function getDistance(previousPoint, currentPoint){
        return Math.sqrt((previousPoint.x - currentPoint.x)** 2 + (previousPoint.y - currentPoint.y)** 2);
    }
    
    function onMouseMove({pageX, pageY}){
        const currentPoint = {x: pageX, y: pageY};
        
        context.beginPath();
        const distance = getDistance(previousPoint, currentPoint);
        const opacity = Math.min(0.5,1 / distance)
        context.strokeStyle = `rgba(300, 10, 109, ${opacity})`;
        
        context.lineCap = 'round';
        context.lineJoin = 'round';
        context.lineWidth = 40;
        
        context.moveTo(previousPoint.x, previousPoint.y);
        context.lineTo(currentPoint.x, currentPoint.y);
        
        context.stroke();
        context.closePath();
        
        previousPoint = currentPoint;
        
   }    
    
    function previousMouseEnter({pageX, pageY}){
        previousPoint.x = pageX;
        previousPoint.y = pageY;
    }

    function run(){
    }
    run();
})();