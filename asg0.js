
 // DrawRectangle.js
 // Function to draw a vector on the canvas

 function main() {
    // Retrieve <canvas> element <- (1)
    var canvas = document.getElementById('example');
    if (!canvas) {
        console.log('Failed to retrieve the <canvas> element');
        return;
    }
    canvas.style.backgroundColor = "black";
    // Get the rendering context for 2DCG <- (2)
    var ctx = canvas.getContext('2d');
    var v1 = new Vector3([2.25,2.25,0])
    // Draw a blue rectangle <- (3)
    //ctx.fillStyle = 'rgba(0, 0, 255, 1.0)'; // Set a blue color
   // ctx.fillRect(120, 10, 150, 150); // Fill a rectangle with the color
    //drawVector(v1, "red");
}

function drawVector(v,color) {
    var canvas = document.getElementById('example');
    var ctx = canvas.getContext('2d');
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2,canvas.height / 2);
    var scaledX = v.elements[0] * 20;
    var scaledY = v.elements[1] * 20
    ctx.lineTo(canvas.width / 2 + scaledX,canvas.height / 2 - scaledY); // used ChatGPT to fix the proper repositioning
    ctx.stroke();
}

function handleDrawEvent() {
    var canvas = document.getElementById('example');
    var ctx = canvas.getContext('2d');
     // Specify the color for clearing <canvas>
     ctx.fillStyle = 'black';
     ctx.fillRect(0, 0, canvas.width, canvas.height);
    let xVal = document.getElementById("v1-xVal").value;
    let yVal = document.getElementById("v1-yVal").value;
    var v1 = new Vector3([xVal,yVal,0])
    drawVector(v1, "red");

    let xVal2 = document.getElementById("v2-xVal").value;
    let yVal2 = document.getElementById("v2-yVal").value;
    var v2 = new Vector3([xVal2,yVal2,0])
    drawVector(v2, "blue");
    
    // let v1 = document.getElementById("name").value;
    //console.log(xVal);
    //console.log(yVal);
    //console.log(xVal2);
    //console.log(yVal2);
    //console.log("clearing canvas!");
   
}
function handleDrawOperationEvent() {
    var canvas = document.getElementById('example');
    var ctx = canvas.getContext('2d');
    // Specify the color for clearing <canvas>
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    let xVal = document.getElementById("v1-xVal").value;
    let yVal = document.getElementById("v1-yVal").value;
    var v1 = new Vector3([xVal,yVal,0])
    drawVector(v1, "red");

    let xVal2 = document.getElementById("v2-xVal").value;
    let yVal2 = document.getElementById("v2-yVal").value;
    var v2 = new Vector3([xVal2,yVal2,0])
    drawVector(v2, "blue");

    //used ChatGPT to help with this portion
    var opSelector = document.getElementById("op-select").value;
    var v3;
    var v4;
    if (opSelector == "add") {
        v3 = v1.add(v2);
    } else if (opSelector == "sub") {
        v3 = v1.sub(v2);
    } else if (opSelector == "mul") {
        var scalar = parseFloat(document.getElementById("scalar-val").value); // have to use parseFloat to do operations properly
        v3 = v1.mul(scalar);
        v4 = v2.mul(scalar);
        //console.log(v3);
        //console.log(v4);
        
    } else if (opSelector == "div") {
        var scalar = parseFloat(document.getElementById("scalar-val").value); // have to use parseFloat to do operations properly
        v3 = v1.div(scalar);
        v4 = v2.div(scalar);
        //console.log(v3);
        //console.log(v4);
    }
    if (opSelector == "mul" || opSelector == "div" ) {
        drawVector(v3, "green");
        drawVector(v4, "green");
    }else {
        drawVector(v3, "green");
    }

}