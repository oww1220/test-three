import * as THREE from 'three';

export class Stage {
    public renderParam: { width: number; height: number };
    public scene: null | THREE.Scene;
    public camera: null | THREE.PerspectiveCamera;
    public renderer: null | THREE.WebGLRenderer;
    public geometry: null;
    public material: null;
    public mesh: null;
    public isInitialized: boolean;

    constructor() {
        this.renderParam = {
            width: window.innerWidth,
            height: window.innerHeight,
        };

        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.geometry = null;
        this.material = null;
        this.mesh = null;

        this.isInitialized = false;
    }

    init() {
        this._setScene();
        this._setRender();
        this._setCamera();
        this._setFog();

        this.isInitialized = true;
    }

    _setScene() {
        this.scene = new THREE.Scene();
    }

    _setRender() {
        const elem: any = document.getElementById('webgl-planet');
        this.renderer = new THREE.WebGLRenderer({
            canvas: elem,
            alpha: true,
        });
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(this.renderParam.width, this.renderParam.height / 2);
    }

    _setCamera() {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight / 2;

        if (!this.isInitialized) {
            this.camera = new THREE.PerspectiveCamera(2, this.renderParam.width / this.renderParam.height / 2);
        }

        this.camera!.aspect = windowWidth / windowHeight;
        this.camera!.updateProjectionMatrix();
        this.renderer!.setPixelRatio(window.devicePixelRatio);
        this.renderer!.setSize(windowWidth, windowHeight);
    }

    _setFog() {
        this.scene!.fog = new THREE.Fog(0x000000, 50, 2000);
    }
    _render() {
        let rot = 0;
        rot += 0.1;
        const radian = (rot * Math.PI) / 180;
        this.camera!.position.x = 1000 * Math.sin(radian);
        this.camera!.position.z = 1000 * Math.cos(radian);
        this.camera!.lookAt(new THREE.Vector3(0, 0, 0));
        this.renderer!.render(this.scene!, this.camera!);
    }

    onResize() {
        this._setCamera();
    }
    onRaf() {
        this._render();
    }
}

export class Mesh {
    stage: any;
    mesh: any;
    constructor(stage) {
        this.stage = stage;
        this.mesh = null;
    }

    init() {
        this._setMesh();
    }

    _setMesh() {
        // 태두리
        const geometry = new THREE.TorusGeometry(13, 1, 10, 100);
        const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });

        this.mesh = new THREE.Mesh(geometry, material);
        this.stage.scene.add(this.mesh);

        // 행성
        const geometry2 = new THREE.CircleGeometry(10, 32);
        const texture2 = new THREE.TextureLoader().load(
            'https://threejsfundamentals.org/threejs/resources/images/wall.jpg',
        );
        const material2 = new THREE.MeshBasicMaterial({
            map: texture2,
            flatShading: true,
        });
        const cube = new THREE.Mesh(geometry2, material2);
        this.stage.scene.add(cube);
    }

    _render() {
        //this.mesh!.rotation.y += 0.0005;
    }

    onRaf() {
        this._render();
    }
}
