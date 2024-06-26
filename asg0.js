
 // DrawRectangle.js
 // Function to draw a vector on the canvas
 //const { dot } = require('./cuon-matrix-cse160');

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
    var scaledY = v.elements[1] * 20;
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


function angleBetween(v1,v2) {
    if (v1.magnitude() != 0 && v2.magnitude() != 0) {
        var alpha = Math.acos(Vector3.dot(v1,v2) / (v1.magnitude() * v2.magnitude()));
        return (alpha * 180) / Math.PI;
    }
}

function areaTriangle(v1,v2) {
    var crossVector = Vector3.cross(v1,v2);
    //console.log(`crossVector: ${crossVector.elements}`);
    var areaPar = crossVector.magnitude();
    //console.log(`areaPar: ${areaPar}`);
    return areaPar / 2;
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
    } else if (opSelector == "mag") {
        var m1 = v1.magnitude();
        var m2 = v2.magnitude();
        console.log(`Magnitude v1: ${m1}`);
        console.log(`Magnitude v2: ${m2}`);
    } else if (opSelector == "norm") {
        v3 = v1.normalize();
        v4 = v2.normalize();
    } else if (opSelector == "angle") {
        var angle = angleBetween(v1, v2);
        console.log(`Angle: ${angle}`);
    } else if (opSelector == "area-triangle") {
        var area = areaTriangle(v1,v2);
        console.log(`Area of the triangle: ${area}`);
    }
    if (opSelector == "mul" || opSelector == "div" || opSelector == "norm") {
        drawVector(v3, "green");
        drawVector(v4, "green");
    } else if (opSelector == "mag" || opSelector == "angle" || opSelector == "area-triangle") {
        // do nothing
    }
    else {
        drawVector(v3, "green");
    }

}

