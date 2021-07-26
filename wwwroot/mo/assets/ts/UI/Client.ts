import * as Universe from '@src/UI/Universe';
import * as Planet from '@src/UI/Planet';
import CommonUI from '@src/CommonUI';
import $ from 'jquery';

const log = console.log;
const { Async } = CommonUI;

$(() => {
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
        let cashGenerator: null | Generator = null;
        let eventChkFlag = true;

        function* rocketOpen(layer: string) {
            eventChkFlag = false;
            const $target = $(layer);
            try {
                //스크롤막음
                $('body').addClass('overlay-hidden');

                //레이어팝업 열림
                $target.addClass('active');

                const delay1 = yield Async.wait(700);

                //구름삭제
                $target.find('.layer-top').addClass('no-cloud');

                //로켓발사
                $target.find('.btn-rocket-open').addClass('open');

                const delay2 = yield Async.wait(300);

                //테두리 변경
                $target.find('.layer-cont').addClass('active');

                //닫기버튼활성화
                $target.find('.btn-rocket-close').addClass('open');
            } catch (err) {
                log(err.message);
            }
            eventChkFlag = true;
        }

        function* rocketClose(layer: string) {
            eventChkFlag = false;
            const $target = $(layer);
            try {
                //스크롤 풀기
                $('body').removeClass('overlay-hidden');

                //닫기버튼 사라짐
                $target.find('.btn-rocket-close').removeClass('open');
                $target.find('.btn-rocket-close').addClass('close');

                //const delay1 = yield Async.wait(300);

                //레이어팝업 닫힘
                $target.removeClass('active');
                //$('.btn-rocket-open').removeClass('open');

                const delay2 = yield Async.wait(1000);

                //로켓 위로
                $target.find('.btn-rocket-open').addClass('close');
                $target.find('.btn-rocket-open').removeClass('open');

                const delay3 = yield Async.wait(600);

                //초기화
                $target.find('.btn-rocket-close').removeClass('close');
                $target.find('.btn-rocket-open').removeClass('close');
                $target.find('.layer-top').removeClass('no-cloud');
                $target.find('.layer-cont').removeClass('active');
            } catch (err) {
                log(err.message);
            }
            eventChkFlag = true;
        }

        $('.rocket-layer-open').on('click', (e) => {
            const layer = '.' + $(e.target).data('layer');
            console.log(layer);
            //console.log(eventChkFlag);
            if (!eventChkFlag) return;
            cashGenerator = rocketOpen(layer);
            Async.generaterRun(cashGenerator);
        });

        $('.btn-rocket-close').on('click', (e) => {
            const layer = '.' + $(e.target).data('layer');
            if (!eventChkFlag) return;
            cashGenerator = rocketClose(layer);
            Async.generaterRun(cashGenerator);
        });
    })();
});
