// modified for EA 3 
var vertextShaderText =
[
'precision mediump float;',
'',
'attribute vec2 vertPosition;',
'attribute vec3 vertColor;',
'varying vec3 fragColor;',
'',
'void main()',
'{',
'   fragColor = vertColor;',
'   gl_Position = vec4(vertPosition, 0.0, 1.0);',
'}'
].join('\n');

// modified for EA 3
var fragmentShaderText =
[
'precision mediump float;',
'',
'varying vec3 fragColor;',
'void main()',
'{',
'   gl_FragColor = vec4(fragColor, 1.0);',
'}'
].join('\n');

// START EA 2 
var InitGeo = function(){

    var canvas = document.getElementById("surface");
    var gl = canvas.getContext('webgl');

    if(!gl){
        console.log("WebGL not supportet, experimental-webgl");
        gl = canvas.getContext('experimental-webgl');
    }

    if(!gl){
        altert("Browser does not support WebGL");
    }

    gl.clearColor(1.0, 1.0, 1.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    // Create Shaders
    var vertextShader = gl.createShader(gl.VERTEX_SHADER);
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);

    gl.shaderSource(vertextShader, vertextShaderText);
    gl.shaderSource(fragmentShader, fragmentShaderText);

    gl.compileShader(vertextShader);
    if (!gl.getShaderParameter(vertextShader, gl.COMPILE_STATUS)) {
        console.error('ERROR comiling vertext shader!', gl.getShaderInfoLog(vertextShader));
        return;
    }

    gl.compileShader(fragmentShader);
    if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
        console.error('ERROR comiling fragment shader!', gl.getShaderInfoLog(fragmentShader));
        return;
    }

    var program = gl.createProgram();
    gl.attachShader(program, vertextShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error('ERROR linking program!', gl.getProgramInfoLog(program));
        return;
    }

    gl.validateProgram(program);
    if (!gl.getProgramParameter(program, gl.VALIDATE_STATUS)) {
        console.error('ERROR validatimg program!', gl.getProgramInfoLog(program));
        return;
    }

    // END EA 2


    // modified for EA3
    var lineVertices =
    [
     // x,y             R,G,B
        -1.0, 0.0,      0.0, 0.533, 0.827,    
        -0.8, -0.3,     0.0, 0.467, 0.784,    
        -0.8, 0.2,      0.337, 0.714, 0.984,

        -1.0, 0.0,      0.0, 0.533, 0.827,      
        -1.0, -0.4,     0.0, 0.467, 0.784,
        -0.8, -0.3,     0.0, 0.467, 0.784,

        -1.0, -0.4,     0.0, 0.467, 0.784,      
        -0.5, -0.4,     0.0, 0.318, 0.533,
        -0.8, -0.3,     0.0, 0.467, 0.784,

        -1.0, -0.4,     0.0, 0.467, 0.784,      
        -0.8, -0.6,     0.0, 0.318, 0.533,
        -0.5, -0.4,     0.0, 0.318, 0.533,

        -0.8, -0.6,     0.0, 0.318, 0.533,     
        -0.2, -0.6,     0.0, 0.467, 0.784,
        -0.5, -0.4,     0.0, 0.318, 0.533,

        -0.5, -0.6,     0.161, 0.184, 0.345,    
        -0.5, -0.7,     0.161, 0.184, 0.345,
        -0.3, -0.6,     0.161, 0.184, 0.345,

        -0.5, -0.7,     0.161, 0.184, 0.345,      
        -0.4, -0.9,     0.0, 0.318, 0.533,
        -0.3, -0.6,     0.161, 0.184, 0.345,

        -0.8, 0.2,      0.337, 0.714, 0.984,    
        -0.8, -0.3,     0.0, 0.467, 0.784,
        -0.5, -0.2,     0.337, 0.714, 0.984,

        -0.8, -0.3,     0.0, 0.467, 0.784,      
        -0.5, -0.4,     0.0, 0.318, 0.533,
        -0.5, -0.2,     0.337, 0.714, 0.984,

        -0.5, -0.4,     0.0, 0.318, 0.533,      
        -0.3, -0.3,     0.0, 0.467, 0.784,
        -0.5, -0.2,     0.337, 0.714, 0.984,

        -0.5, -0.4,     0.0, 0.318, 0.533,      
        -0.2, -0.6,     0.0, 0.467, 0.784,
        -0.3, -0.3,     0.0, 0.467, 0.784,
        
        -0.3, -0.3,     0.0, 0.467, 0.784,      
        -0.2, -0.6,     0.0, 0.467, 0.784,
        -0.2, -0.3,     0.0, 0.467, 0.784,

        -0.2, -0.3,     0.0, 0.467, 0.784,     
        -0.2, -0.6,     0.0, 0.467, 0.784,
        0.0, -0.2,      0.337, 0.714, 0.984,    

        -0.2, -0.6,     0.0, 0.467, 0.784,     
        0.0, -0.5,      0.337, 0.714, 0.984,
        0.0, -0.2,      0.337, 0.714, 0.984,    

        -0.2, -0.6,     0.0, 0.467, 0.784,     
        0.0, -0.6,      0.0, 0.467, 0.784,
        0.0, -0.5,      0.337, 0.714, 0.984,

        -0.2, -0.6,     0.0, 0.467, 0.784,      
        -0.2, -0.7,     0.0, 0.467, 0.784,
        0.0, -0.6,      0.0, 0.467, 0.784,

        -0.2, -0.7,     0.0, 0.467, 0.784,      
        0.2, -0.9,      0.0, 0.318, 0.533,
        0.0, -0.6,      0.0, 0.467, 0.784,

        0.0, -0.6,      0.161, 0.184, 0.345,    
        0.3, -0.5,      0.161, 0.184, 0.345,
        0.0, -0.5,      0.161, 0.184, 0.345,

        0.0, -0.5,      0.161, 0.184, 0.345,     
        0.3, -0.5,      0.161, 0.184, 0.345,
        0.2, -0.3,      0.0, 0.318, 0.533,

        0.2, -0.3,      0.0, 0.318, 0.533,      
        0.3, -0.5,      0.161, 0.184, 0.345,
        0.4, 0.0,       0.161, 0.184, 0.345,

        0.3, -0.5,      0.161, 0.184, 0.345,    
        0.5, -0.1,      0.161, 0.184, 0.345,
        0.4, 0.0,       0.161, 0.184, 0.345,

        0.4, 0.0,       0.161, 0.184, 0.345,   
        0.5, -0.1,      0.161, 0.184, 0.345,
        0.5, 0.5,       0.161, 0.184, 0.345,

        0.0, -0.2,      0.0, 0.467, 0.784,     
        0.0, -0.5,      0.161, 0.184, 0.345,
        0.2, -0.3,      0.0, 0.318, 0.533,

        0.0, -0.2,      0.0, 0.467, 0.784,      
        0.2, -0.3,      0.0, 0.318, 0.533,
        0.4, 0.0,       0.161, 0.184, 0.345,

        0.2, 0.2,       0.0, 0.533, 0.827,      
        0.4, 0.0,       0.161, 0.184, 0.345,
        0.5, 0.5,       0.161, 0.184, 0.345,

        0.5, 0.5,       0.0, 0.467, 0.784,    
        0.8, 0.6,       0.337, 0.714, 0.984,
        0.4, 0.6,       0.0, 0.467, 0.784,

        0.8, 0.6,       0.337, 0.714, 0.984,       
        0.9, 0.9,       0.51, 0.812, 1.0,
        0.5, 0.8,       0.337, 0.714, 0.984,

        0.4, 0.6,       0.0, 0.467, 0.784,    
        0.8, 0.6,       0.337, 0.714, 0.984,
        0.5, 0.8,       0.337, 0.714, 0.984,

        0.3, 0.5,       0.0, 0.467, 0.784,     
        0.5, 0.5,       0.0, 0.467, 0.784,
        0.4, 0.6,       0.0, 0.467, 0.784,

        0.3, 0.5,       0.0, 0.467, 0.784,    
        0.4, 0.6,       0.0, 0.467, 0.784,
        0.0, 0.6,       0.337, 0.714, 0.984,

        0.0, 0.6,       0.337, 0.714, 0.984,   
        0.4, 0.6,       0.0, 0.467, 0.784,
        0.3, 0.8,       0.337, 0.714, 0.984,

        0.0, 0.6,       0.337, 0.714, 0.984,     
        0.3, 0.8,       0.337, 0.714, 0.984,
        -0.1, 0.9,      0.51, 0.812, 1.0,

        0.3, 0.5,       0.0, 0.467, 0.784,      
        0.2, 0.2,       0.0, 0.533, 0.827,
        0.5, 0.5,       0.161, 0.184, 0.345,

        0.0, 0.1,       0.0, 0.533, 0.827,     
        0.4, 0.0,       0.161, 0.184, 0.345,
        0.2, 0.2,       0.0, 0.533, 0.827,

        0.0, 0.1,       0.0, 0.533, 0.827,      
        0.0, -0.2,      0.0, 0.467, 0.784,
        0.4, 0.0,       0.161, 0.184, 0.345,

        0.0, 0.1,       0.0, 0.533, 0.827,      
        -0.3, 0.0,      0.51, 0.812, 1.0,      
        0.0, -0.2,      0.0, 0.467, 0.784,

        -0.3, 0.0,      0.51, 0.812, 1.0,      
        -0.5, -0.2,     0.337, 0.714, 0.984,
        0.0, -0.2,      0.0, 0.467, 0.784,

        -0.5, -0.2,     0.337, 0.714, 0.984,      
        -0.2, -0.3,     0.0, 0.467, 0.784,  
        0.0, -0.2,      0.0, 0.467, 0.784,

        -0.2, 0.2,      0.51, 0.812, 1.0,      
        -0.3, 0.0,     0.51, 0.812, 1.0,
        0.0, 0.1,      0.0, 0.533, 0.827,

        -0.8, 0.2,      0.337, 0.714, 0.984,     
        -0.5, -0.2,     0.337, 0.714, 0.984,
        -0.3, 0.0,     0.51, 0.812, 1.0,

        -0.8, 0.2,      0.337, 0.714, 0.984,     
        -0.3, 0.0,      0.51, 0.812, 1.0,
        -0.2, 0.2,      0.51, 0.812, 1.0,

        -0.5, -0.2,     0.337, 0.714, 0.984,      
        -0.3, -0.3,     0.0, 0.467, 0.784,
        -0.2, -0.3,     0.0, 0.467, 0.784

    ];

    var lineVertextBufferObject = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, lineVertextBufferObject);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(lineVertices), gl.STATIC_DRAW);

    var positionAttribLocation = gl.getAttribLocation(program, 'vertPosition');

    // new for EA 3
    var colorAttribLocation = gl.getAttribLocation(program, 'vertColor');

    // modified for EA 3
    gl.vertexAttribPointer(
        positionAttribLocation, 
        2,
        gl.FLOAT,
        gl.FALSE,
        5 * Float32Array.BYTES_PER_ELEMENT,
        0
    );

    // new for EA 3
    gl.vertexAttribPointer(
        colorAttribLocation, 
        3,
        gl.FLOAT,
        gl.FALSE,
        5 * Float32Array.BYTES_PER_ELEMENT,
        2 * Float32Array.BYTES_PER_ELEMENT
    );

    gl.enableVertexAttribArray(positionAttribLocation);

    // new for EA 3
    gl.enableVertexAttribArray(colorAttribLocation);

    // Main render
    gl.useProgram(program);
    gl.drawArrays(gl.TRIANGLES, 0, 126);
};