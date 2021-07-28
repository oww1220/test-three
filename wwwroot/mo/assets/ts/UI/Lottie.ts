import CommonUI from '@src/CommonUI';
import lottie from 'lottie-web';
import $ from 'jquery';

const log = console.log;

$(() => {
    if (document.getElementById('lottie00_01')) {
        lottie.loadAnimation({
            container: document.getElementById('lottie00_01')!,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: '../bundle/json/00_data-01.json',
        });
    }
    if (document.getElementById('lottie00_02')) {
        lottie.loadAnimation({
            container: document.getElementById('lottie00_02')!,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: '../bundle/json/00_data-02.json',
        });
    }
    if (document.getElementById('lottie01')) {
        lottie.loadAnimation({
            container: document.getElementById('lottie01')!,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: '../bundle/json/01_data.json',
        });
    }
    if (document.getElementById('lottie03')) {
        lottie.loadAnimation({
            container: document.getElementById('lottie03')!,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: '../bundle/json/03_data.json',
        });
    }
    if (document.getElementById('lottie05')) {
        lottie.loadAnimation({
            container: document.getElementById('lottie05')!,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: '../bundle/json/05_data.json',
        });
    }
    if (document.getElementById('lottie06')) {
        lottie.loadAnimation({
            container: document.getElementById('lottie06')!,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: '../bundle/json/06_data.json',
        });
    }
    if (document.getElementById('lottie09')) {
        lottie.loadAnimation({
            container: document.getElementById('lottie09')!,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: '../bundle/json/09_data.json',
        });
    }
    if (document.getElementById('lottie10')) {
        lottie.loadAnimation({
            container: document.getElementById('lottie10')!,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: '../bundle/json/10_data.json',
        });
    }
    if (document.getElementById('lottie11')) {
        lottie.loadAnimation({
            container: document.getElementById('lottie11')!,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: '../bundle/json/11_data.json',
        });
    }
    if (document.getElementById('lottie13')) {
        lottie.loadAnimation({
            container: document.getElementById('lottie13')!,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: '../bundle/json/13_data.json',
        });
    }
    if (document.getElementById('lottie14')) {
        lottie.loadAnimation({
            container: document.getElementById('lottie14')!,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: '../bundle/json/14_data.json',
        });
    }
    if (document.getElementById('lottie15')) {
        lottie.loadAnimation({
            container: document.getElementById('lottie15')!,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: '../bundle/json/15_data.json',
        });
    }
});
