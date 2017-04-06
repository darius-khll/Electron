var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
var Service = ClientApp.Service;
var ClientApp;
(function (ClientApp) {
    var Component;
    (function (Component) {
        app = angular.module('app');
        class FirstComponent {
            constructor($http, firstService) {
                this.$http = $http;
                this.firstService = firstService;
                console.warn(this.firstService.getFirstServiceRecords());
            }
            $onInit() {
                return __awaiter(this, void 0, void 0, function* () {

                    const customerData = [
                        { ssn: "444-44-4444", name: "Bill1", age: 35, email: "bill@company.com" },
                        { ssn: "555-55-5555", name: "Donna1", age: 32, email: "donna@home.org" }
                    ];
                    let dbName = 'dbName12';
                    var request = indexedDB.open(dbName, 5);
                    request.onupgradeneeded = function (event) {
                        alert('created');
                        var db = event.target.result;
                        var objectStore = db.createObjectStore("customers", { keyPath: "ssn" });
                        objectStore.createIndex("name", "name", { unique: false });
                        objectStore.createIndex("email", "email", { unique: true });
                        objectStore.transaction.oncomplete = function (event) {
                            var customerObjectStore = db.transaction("customers", "readwrite").objectStore("customers");
                            for (var i in customerData) {
                                customerObjectStore.add(customerData[i]);
                            }
                        };
                    };
                    request.onsuccess = function (event) {
                        var db = event.target.result;
                        var transaction = db.transaction(["customers"]);
                        var objectStore = transaction.objectStore("customers");
                        var request = objectStore.get("444-44-4444");
                        request.onerror = function (event) {
                            alert('err');
                        };
                        request.onsuccess = function (event) {
                            alert("Name for 1 is " + request.result.name);
                        };
                    };
                });
            }
            check() {
                return __awaiter(this, void 0, void 0, function* () {
                    let records = yield this.$http.get("http://localhost:3000/getRecords");
                    alert(records.data[0]);
                    this.goToSecondComponent();
                });
            }
            goToSecondComponent() {
                this.$router.navigate(['Second']);
            }
            $onDestroy() {
                return __awaiter(this, void 0, void 0, function* () {
                    console.log("finished...");
                });
            }
        }
        Component.FirstComponent = FirstComponent;
        FirstComponent.$inject = ['$http', 'firstService'];
        app.component('first', {
            templateUrl: "app/view/firstView.html",
            controller: FirstComponent,
            controllerAs: 'vm',
            bindings: { $router: '<' }
        });
    })(Component = ClientApp.Component || (ClientApp.Component = {}));
})(ClientApp || (ClientApp = {}));
//# sourceMappingURL=firstComponent.js.map