
module ClientApp {
    export module Service {

        app = angular.module('app');

        export class FirstService {
            constructor() {
            }

            public getFirstServiceRecords(): number {
                return 12345;
            }
        }

        app.service('firstService', FirstService);

    }
}