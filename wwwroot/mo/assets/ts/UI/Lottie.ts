import CommonUI from '@src/CommonUI';
import lottie from 'lottie-web';
import $ from 'jquery';

const log = console.log;

$(() => {
    lottie.loadAnimation({
        container: document.getElementById('lottie00_01')!,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '../images/json/00_data-01.json',
    });
    lottie.loadAnimation({
        container: document.getElementById('lottie00_02')!,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '../images/json/00_data-02.json',
    });
    lottie.loadAnimation({
        container: document.getElementById('lottie01')!,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '../images/json/01_data.json',
    });
    lottie.loadAnimation({
        container: document.getElementById('lottie03')!,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '../images/json/03_data.json',
    });
    lottie.loadAnimation({
        container: document.getElementById('lottie05')!,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '../images/json/05_data.json',
    });
    lottie.loadAnimation({
        container: document.getElementById('lottie06')!,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '../images/json/06_data.json',
    });
    lottie.loadAnimation({
        container: document.getElementById('lottie09')!,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '../images/json/09_data.json',
    });
    lottie.loadAnimation({
        container: document.getElementById('lottie10')!,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '../images/json/10_data.json',
    });
    lottie.loadAnimation({
        container: document.getElementById('lottie11')!,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '../images/json/11_data.json',
    });
    lottie.loadAnimation({
        container: document.getElementById('lottie13')!,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '../images/json/13_data.json',
    });
    lottie.loadAnimation({
        container: document.getElementById('lottie14')!,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '../images/json/14_data.json',
    });
});
