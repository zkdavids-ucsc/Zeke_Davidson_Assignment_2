class Cube{
    constructor(){
        this.type = 'cube';
        this.color = [1.0, 1.0, 1.0, 1.0];
        this.matrix = new Matrix4();
    }

    render(){
        var rgba = this.color;

        gl.uniformMatrix4fv(u_ModelMatrix, false, this.matrix.elements);

        gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);

        drawTriangle3D([0,0,1, 1,1,1, 1,0,1]);
        drawTriangle3D([0,0,1, 0,1,1, 1,1,1]);

        gl.uniform4f(u_FragColor, rgba[0]*.9, rgba[1]*.9, rgba[2]*.9, rgba[3]);

        drawTriangle3D([0,1,0, 1,1,1, 1,1,0]);
        drawTriangle3D([0,1,0, 0,1,1, 1,1,1]);

        gl.uniform4f(u_FragColor, rgba[0]*.6, rgba[1]*.6, rgba[2]*.6, rgba[3]);

        drawTriangle3D([1,0,0, 1,1,1, 1,0,1]);
        drawTriangle3D([1,0,0, 1,1,0, 1,1,1]);

        gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);

        drawTriangle3D([0,0,0, 1,1,0, 1,0,0]);
        drawTriangle3D([0,0,0, 0,1,0, 1,1,0]);

        gl.uniform4f(u_FragColor, rgba[0]*.9, rgba[1]*.9, rgba[2]*.9, rgba[3]);

        drawTriangle3D([0,0,0, 1,0,1, 1,0,0]);
        drawTriangle3D([0,0,0, 0,0,1, 1,0,1]);

        gl.uniform4f(u_FragColor, rgba[0]*.6, rgba[1]*.6, rgba[2]*.6, rgba[3]);

        drawTriangle3D([0,0,0, 0,1,1, 0,0,1]);
        drawTriangle3D([0,0,0, 0,1,0, 0,1,1]);
    }
}
