import * as Universe from '@src/UI/Universe';
import CommonUI from '@src/CommonUI';
import AOS from 'aos';
import $ from 'jquery';

const log = console.log;
const { Async } = CommonUI;

$(() => {
    // 패럴랙스 인스턴스 생성은 지연시킴!
    setTimeout(() => {
        AOS.init({
            once: true,
            delay: 400, // values from 0 to 3000, with step 50ms
            duration: 600, // values from 0 to 3000, with step 50ms
        });
    }, 500);

    if ($('.aos-tab').length) {
        const $target = $('.aos-tab li');
        $target.on('click', (e) => {
            //console.log(e.target);
            $('.aos-init').removeClass('aos-animate');
            AOS.refresh();
        });
    }

    if (document.getElementById('webgl-universe')) {
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
    }
});
