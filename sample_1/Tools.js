
Tools = {};

Tools.initStats = function(div) {
    // do nothing for now
/*    stats = new Stats();
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.top = '0px';
    stats.domElement.style.zIndex = 100;
    div.appendChild(stats.domElement);*/
}



Tools.addCoordinateAxes = function(objecto, size) {
    /*size = (typeof size === 'undefined' ? 50 : size);
    
    function v(x,y,z){ 
        return new THREE.Vector3(x,y,z); 
    }
      
    var lineGeo = new THREE.Geometry();
    lineGeo.vertices.push(
        v(-size, 0, 0), v(size, 0, 0),
        v(0, -size, 0), v(0, size, 0),
        v(0, 0, -size), v(0, 0, size)
    );

    var lineMat = new THREE.LineBasicMaterial({
        color: 0x000000, 
	lineWidth: 1
    });
    var line = new THREE.Line(lineGeo, lineMat);
    line.type = THREE.Lines;
    objecto.add(line);*/
}


Tools.trackballControl = function() {
    controls = new THREE.TrackballControls( camera );

    // only need to modify the following properties: staticMoving (default to false)
    controls.staticMoving = true;
}