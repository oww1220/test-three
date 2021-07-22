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
                $('.bg-overlay').addClass('active');

                const delay1 = yield Async.wait(600);

                $('.drawer-cont').addClass('bg');

                const delay2 = yield Async.wait(100);
                $('#content').addClass('hide');
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

        function* rocketOpen() {
            eventChkFlag = false;
            try {
                //레이어팝업 열림
                $('.layer-rocket').addClass('active');

                const delay1 = yield Async.wait(700);

                //구름삭제
                $('.layer-rocket .layer-top').addClass('no-cloud');

                //로켓발사
                $('.btn-rocket-open').addClass('open');

                const delay2 = yield Async.wait(300);

                //테두리 변경
                $('.layer-rocket .layer-cont').addClass('active');

                //닫기버튼활성화
                $('.btn-rocket-close').addClass('open');
            } catch (err) {
                log(err.message);
            }
            eventChkFlag = true;
        }

        function* rocketClose() {
            eventChkFlag = false;
            try {
                //닫기버튼 사라짐
                $('.btn-rocket-close').removeClass('open');
                $('.btn-rocket-close').addClass('close');

                const delay1 = yield Async.wait(300);

                //레이어팝업 닫힘
                $('.layer-rocket').removeClass('active');
                $('.btn-rocket-open').removeClass('open');

                const delay2 = yield Async.wait(1000);

                //로켓 위로
                $('.btn-rocket-open').addClass('close');

                const delay3 = yield Async.wait(600);

                //초기화
                $('.btn-rocket-close').removeClass('close');
                $('.btn-rocket-open').removeClass('close');
                $('.layer-rocket .layer-top').removeClass('no-cloud');
                $('.layer-rocket .layer-cont').removeClass('active');
            } catch (err) {
                log(err.message);
            }
            eventChkFlag = true;
        }

        $('.btn-rocket-open').on('click', () => {
            //console.log(eventChkFlag);
            if (!eventChkFlag) return;
            cashGenerator = rocketOpen();
            Async.generaterRun(cashGenerator);
        });

        $('.btn-rocket-close').on('click', () => {
            if (!eventChkFlag) return;
            cashGenerator = rocketClose();
            Async.generaterRun(cashGenerator);
        });
    })();
});
