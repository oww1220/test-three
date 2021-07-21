import * as Universe from '@src/UI/Universe';
import * as Planet from '@src/UI/Planet';

(() => {
    const stage = new Universe.Stage();

    stage.init();

    const mesh = new Universe.Mesh(stage);

    mesh.init();

    window.addEventListener('resize', () => {
        stage.onResize();
    });

    const _raf = () => {
        window.requestAnimationFrame(() => {
            stage.onRaf();
            mesh.onRaf();
            _raf();
        });
    };

    _raf();
})();
(() => {
    const stage = new Planet.Stage();

    stage.init();

    const mesh = new Planet.Mesh(stage);

    mesh.init();

    window.addEventListener('resize', () => {
        stage.onResize();
    });

    // const render = (time) => {
    //     time *= 0.005; // convert time to seconds
    //     mesh.mesh.rotation.x += 0.001;
    //     mesh.mesh.rotation.y += 0.08;
    //     stage.onRaf();
    //     mesh.onRaf();
    //     requestAnimationFrame(render);
    // };
    // requestAnimationFrame(render);

    const _raf = () => {
        window.requestAnimationFrame(() => {
            stage.onRaf();
            mesh.onRaf();
            _raf();
        });
    };

    _raf();
})();
