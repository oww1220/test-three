import * as Universe from '@src/mo/UI/Universe';
import * as Planet from '@src/mo/UI/Planet';
import CommonUI from '@src/mo/CommonUI';
import AOS from 'aos';
import $ from 'jquery';

const log = console.log;
const { Async, LayerRocket } = CommonUI;

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

    if (document.getElementById('webgl-planet')) {
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
    }

    (() => {
        let cashGenerator: null | Generator = null;
        let eventChkFlag = true;

        function* drawerOpen() {
            eventChkFlag = false;
            try {
                if ($('.layer-rocket').length) $('.layer-rocket').addClass('low-zIndex');
                $('.btn-drawer-open').hide();
                $('.bg-overlay').addClass('active');
                $('#content').addClass('hide');

                const delay1 = yield Async.wait(600);

                $('.drawer-cont').addClass('bg');

                const delay2 = yield Async.wait(100);

                $('.bg-overlay').addClass('hide');
            } catch (err) {
                log(err.message);
            }
            eventChkFlag = true;
        }

        function* drawerClose() {
            eventChkFlag = false;
            try {
                $('#content').removeClass('hide');

                $('.bg-overlay').removeClass('hide');
                const delay1 = yield Async.wait(100);

                $('.drawer-cont').removeClass('bg');

                $('.bg-overlay').removeClass('active');
                if ($('.layer-rocket').length) $('.layer-rocket').removeClass('low-zIndex');
                const delay2 = yield Async.wait(700);
                $('.btn-drawer-open').show();
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
    })();

    (() => {
        // let cashGenerator: null | Generator = null;
        // let eventChkFlag = true;

        // function* rocketOpen(layer: string) {
        //     eventChkFlag = false;
        //     const $target = $(layer);
        //     try {
        //         //스크롤막음
        //         $('body').addClass('overlay-hidden');

        //         //레이어팝업 열림
        //         $target.addClass('active');

        //         const delay1 = yield Async.wait(700);

        //         //구름삭제
        //         $target.find('.layer-top').addClass('no-cloud');

        //         //로켓발사
        //         $target.find('.btn-rocket-open').addClass('open');

        //         const delay2 = yield Async.wait(300);

        //         //테두리 변경
        //         $target.find('.layer-cont').addClass('active');

        //         //닫기버튼활성화
        //         $target.find('.btn-rocket-close').addClass('open');
        //     } catch (err) {
        //         log(err.message);
        //     }
        //     eventChkFlag = true;
        // }

        // function* rocketClose(layer: string) {
        //     eventChkFlag = false;
        //     const $target = $(layer);
        //     try {
        //         //스크롤 풀기
        //         $('body').removeClass('overlay-hidden');

        //         //닫기버튼 사라짐
        //         $target.find('.btn-rocket-close').removeClass('open');
        //         $target.find('.btn-rocket-close').addClass('close');

        //         //const delay1 = yield Async.wait(300);

        //         //레이어팝업 닫힘
        //         $target.removeClass('active');
        //         //$('.btn-rocket-open').removeClass('open');

        //         const delay2 = yield Async.wait(1000);

        //         //로켓 위로
        //         $target.find('.btn-rocket-open').addClass('close');
        //         $target.find('.btn-rocket-open').removeClass('open');

        //         //const delay3 = yield Async.wait(300);

        //         //초기화
        //         $target.find('.btn-rocket-close').removeClass('close');
        //         $target.find('.btn-rocket-open').removeClass('close');
        //         $target.find('.layer-top').removeClass('no-cloud');
        //         $target.find('.layer-cont').removeClass('active');
        //     } catch (err) {
        //         log(err.message);
        //     }
        //     eventChkFlag = true;
        // }

        $(document).on('click', '.rocket-layer-open', (e) => {
            const layer = '.' + $(e.currentTarget).data('layer');
            //console.log(layer, e.target, e.currentTarget);
            //console.log(eventChkFlag);
            if (!LayerRocket.eventChkFlag) return;
            LayerRocket.cashGenerator = LayerRocket.open(layer, (layer) => {
                console.log(`${layer} layer open!`);
            })();
            Async.generaterRun(LayerRocket.cashGenerator);
        });
        $(document).on('click', '.btn-rocket-close', (e) => {
            const layer = '.' + $(e.currentTarget).data('layer');
            if (!LayerRocket.eventChkFlag) return;
            LayerRocket.cashGenerator = LayerRocket.close(layer, (layer) => {
                console.log(`${layer} layer close!`);
            })();
            Async.generaterRun(LayerRocket.cashGenerator);
        });
    })();
});
