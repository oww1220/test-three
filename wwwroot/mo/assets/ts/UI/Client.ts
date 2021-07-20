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

    const _raf = () => {
        window.requestAnimationFrame(() => {
            stage.onRaf();
            mesh.onRaf();
            _raf();
        });
    };

    _raf();
})();
