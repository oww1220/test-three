import * as Universe from '@src/UI/Universe';
import * as Planet from '@src/UI/Planet';
import CommonUI from '@src/CommonUI';
import $ from 'jquery';

const log = console.log;
const { Async } = CommonUI;

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

$(() => {
    let cashGenerator: null | Generator = null;
    let eventChkFlag = true;

    function* drawerOpen() {
        eventChkFlag = false;
        try {
            $('.drawer-W').addClass('active');

            const delay1 = yield Async.wait(800);

            $('.drawer-cont').addClass('bg');

            const delay2 = yield Async.wait(100);

            $('.drawer-W .dummy').hide();
        } catch (err) {
            log(err.message);
        }
        eventChkFlag = true;
    }

    function* drawerClose() {
        eventChkFlag = false;
        try {
            $('.drawer-W .dummy').show();

            const delay1 = yield Async.wait(100);

            $('.drawer-cont').removeClass('bg');

            const delay2 = yield Async.wait(800);

            $('.drawer-W').removeClass('active');
        } catch (err) {
            log(err.message);
        }
        eventChkFlag = true;
    }

    $('.btn-drawer-open').on('click', () => {
        //console.log(eventChkFlag);
        if (!eventChkFlag) return;
        cashGenerator = drawerOpen();
        Async.generaterRun(cashGenerator);
    });

    $('.btn-drawer-close').on('click', () => {
        if (!eventChkFlag) return;
        cashGenerator = drawerClose();
        Async.generaterRun(cashGenerator);
    });
});
