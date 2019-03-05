varying vec2 vUv;
varying vec3 vecPos;
varying vec3 vecNormal;

uniform sampler2D map;

void  main() {
    gl_FragColor = texture2D(map, vUv);
}
