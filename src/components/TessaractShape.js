import React, { useEffect } from "react";

const TessractShape = () => {
  useEffect(() => {
    // Create a new canvas element
    const canvas = document.createElement("canvas");
    canvas.id = "c1";
    document.body.appendChild(canvas);

    const c = canvas.getContext("2d");

    //Pixel Dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    c.translate(canvas.width / 2, canvas.height / 2);
    let rx = 0;
    let ry = 0;
    let rz = 0;
    let rw = 0;
    //Camera Data
    const Camera = {
      //Focal Length
      focalLength: 35,
      wFocalLength: 12,
      //Pinhole Location
      x: 0,
      y: 0,
      z: 0,
      w: 0,
      //Camera Rotation
      rotX: 0,
      rotY: 0,
      rotZ: 0,
    };
    Camera.z = -(Camera.focalLength ** 2);
    Camera.w = -(Camera.wFocalLength ** 2);
    //Vertex Object
    class Vertex {
      constructor(x, y, z, w) {
        this.loc = [
          x / Camera.focalLength,
          y / Camera.focalLength,
          z / Camera.focalLength,
          w / Camera.focalLength,
        ];
        this.ploc = [];
      }
      //3D Rotation Transformation
      rotate(xr, yr, zr, wr) {
        //4D Rotation on YW Axis
        let yy = this.loc[1];
        this.loc[1] = yy * Math.cos(wr) - this.loc[3] * Math.sin(wr);
        this.loc[3] = yy * Math.sin(wr) + this.loc[3] * Math.cos(wr);
        //Constants
        let x = this.loc[0];
        let y = this.loc[1];
        let z = this.loc[2];
        //Rotation Data
        let sx = Math.sin(xr);
        let sy = Math.sin(yr);
        let sz = Math.sin(zr);
        let cx = Math.cos(xr);
        let cy = Math.cos(yr);
        let cz = Math.cos(zr);
        //Repeating Parts of Equation
        let eq1 = sz * y + cz * x;
        let eq2 = cz * y - sz * x;
        let eq3 = cy * z + sy * eq1;
        //Applying Transformations
        this.loc[0] = cy * eq1 - sy * z;
        this.loc[1] = sx * eq3 + cx * eq2;
        this.loc[2] = cx * eq3 - sx * eq2;
      }
      //Projected 2D Coordinates
      project() {
        //Projects 4D to 3D
        this.loc[3] -= Camera.w / Camera.wFocalLength;
        this.loc[0] = (-this.loc[0] / this.loc[3]) * Camera.wFocalLength;
        this.loc[1] = (-this.loc[1] / this.loc[3]) * Camera.wFocalLength;
        this.loc[2] = (-this.loc[2] / this.loc[3]) * Camera.wFocalLength;
        //Camera Location
        let x = this.loc[0] - Camera.x / Camera.focalLength;
        let y = this.loc[1] - Camera.y / Camera.focalLength;
        let z = this.loc[2] - Camera.z / Camera.focalLength;
        //Camera Rotation
        let sx = Math.sin(Camera.rotX);
        let sy = Math.sin(Camera.rotY);
        let sz = Math.sin(Camera.rotZ);
        let cx = Math.cos(Camera.rotX);
        let cy = Math.cos(Camera.rotY);
        let cz = Math.cos(Camera.rotZ);
        //Repeating Parts of Equation
        let eq1 = sz * y + cz * x;
        let eq2 = cz * y - sz * x;
        let eq3 = cy * z + sy * eq1;
        //Camera Transformations
        let dx = cy * eq1 - sy * z;
        let dy = sx * eq3 + cx * eq2;
        let dz = cx * eq3 - sx * eq2;
        //Projection
        this.ploc = [
          (Camera.focalLength / dz) * dx * Camera.focalLength,
          (Camera.focalLength / dz) * dy * Camera.focalLength,
        ];
      }
    }
    //Face Object
    class Face {
      constructor(v1, v2, v3, v4, noCull) {
        this.vertices = [v1, v2, v3, v4];
        if (noCull === true) this.noCull = noCull;
      }
      show() {
        //Drawing Face
        c.beginPath();
        c.moveTo(this.vertices[0].ploc[0], this.vertices[0].ploc[1]);
        for (let i = 1; i < this.vertices.length; i++)
          c.lineTo(this.vertices[i].ploc[0], this.vertices[i].ploc[1]);
        c.closePath();
        c.stroke();
      }
    }
    function draw() {
      requestAnimationFrame(draw);
      c.clearRect(
        -canvas.width / 2,
        -canvas.height / 2,
        canvas.width,
        canvas.height
      );
      ry = (ry - 0.012) % (Math.PI * 2);
      rw = (rw - 0.01) % (Math.PI * 2);
      let faces = [];
      let w = 300;
      //Vertices
      let v = [];
      v[0] = new Vertex(-w / 2, w / 2, -w / 2, w / 2);
      v[1] = new Vertex(w / 2, w / 2, -w / 2, w / 2);
      v[2] = new Vertex(w / 2, w / 2, w / 2, w / 2);
      v[3] = new Vertex(-w / 2, w / 2, w / 2, w / 2);
      v[4] = new Vertex(-w / 2, -w / 2, -w / 2, w / 2);
      v[5] = new Vertex(w / 2, -w / 2, -w / 2, w / 2);
      v[6] = new Vertex(w / 2, -w / 2, w / 2, w / 2);
      v[7] = new Vertex(-w / 2, -w / 2, w / 2, w / 2);
      v[8] = new Vertex(-w / 2, w / 2, -w / 2, -w / 2);
      v[9] = new Vertex(w / 2, w / 2, -w / 2, -w / 2);
      v[10] = new Vertex(w / 2, w / 2, w / 2, -w / 2);
      v[11] = new Vertex(-w / 2, w / 2, w / 2, -w / 2);
      v[12] = new Vertex(-w / 2, -w / 2, -w / 2, -w / 2);
      v[13] = new Vertex(w / 2, -w / 2, -w / 2, -w / 2);
      v[14] = new Vertex(w / 2, -w / 2, w / 2, -w / 2);
      v[15] = new Vertex(-w / 2, -w / 2, w / 2, -w / 2);
      //Rotating and Projecting vertices
      for (let i = 0; i < v.length; i++) {
        //If Rotation is Needed
        if (Math.abs(rx) + Math.abs(ry) + Math.abs(rz) + Math.abs(rw) > 0)
          v[i].rotate(rx, ry, rz, rw);
        v[i].project();
      }
      //Faces
      faces.push(new Face(v[0], v[1], v[2], v[3]));
      faces.push(new Face(v[4], v[7], v[6], v[5]));
      faces.push(new Face(v[0], v[4], v[5], v[1]));
      faces.push(new Face(v[2], v[6], v[7], v[3]));
      faces.push(new Face(v[8], v[9], v[10], v[11]));
      faces.push(new Face(v[12], v[15], v[14], v[13]));
      faces.push(new Face(v[8], v[12], v[13], v[9]));
      faces.push(new Face(v[10], v[14], v[15], v[11]));
      faces.push(new Face(v[0], v[1], v[9], v[8]));
      faces.push(new Face(v[2], v[3], v[11], v[10]));
      faces.push(new Face(v[4], v[7], v[15], v[12]));
      faces.push(new Face(v[6], v[5], v[13], v[14]));
      for (let i = 0; i < faces.length; i++) faces[i].show();
    }
    draw();

    // Cleanup logic if needed
    return () => {
      // Remove the canvas element when the component is unmounted
      document.body.removeChild(canvas);
      // Cleanup code (if necessary)
    };
  }, []);

  return (
    <div className="tess">
    </div>
  );
};

export default TessractShape;