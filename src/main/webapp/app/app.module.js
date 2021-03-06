(function() {
    'use strict';

    angular
        .module('chatAnalysisApp', [
            'ngStorage', 
            'ngResource',
            'ngCookies',
            'ngAria',
            'ngCacheBuster',
            'ngFileUpload',
            'ui.bootstrap',
            'ui.bootstrap.datetimepicker',
            'ui.router',
            'infinite-scroll',
            // jhipster-needle-angularjs-add-module JHipster will add new module here
            'angular-loading-bar',
            'nvd3'
        ])
        .run(run);

    run.$inject = ['stateHandler', '$rootScope'];

    function run(stateHandler) {
        stateHandler.initialize();
    }
})();
