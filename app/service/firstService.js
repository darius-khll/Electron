var ClientApp;
(function (ClientApp) {
    var Service;
    (function (Service) {
        app = angular.module('app');
        class FirstService {
            constructor() {
            }
            getFirstServiceRecords() {
                return 12345;
            }
        }
        Service.FirstService = FirstService;
        app.service('firstService', FirstService);
    })(Service = ClientApp.Service || (ClientApp.Service = {}));
})(ClientApp || (ClientApp = {}));
//# sourceMappingURL=firstService.js.map