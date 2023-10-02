//#region BAD EXAMPLE
// Clases de bajo nivel
var FedExShippingService = /** @class */ (function () {
    function FedExShippingService() {
    }
    FedExShippingService.prototype.shipPackage = function (box) {
        console.log("Shipping via FedEx: " + JSON.stringify(box));
    };
    return FedExShippingService;
}());
var EmailNotificationService = /** @class */ (function () {
    function EmailNotificationService() {
    }
    EmailNotificationService.prototype.sendNotification = function (message) {
        console.log("Sending email notification: " + message);
    };
    return EmailNotificationService;
}());
// Clase de alto nivel
var OrderProcessor = /** @class */ (function () {
    function OrderProcessor(shippingService, notificationService) {
        this.shippingService = shippingService;
        this.notificationService = notificationService;
    }
    OrderProcessor.prototype.processOrder = function (order) {
        // Procesamiento del pedido
        this.shippingService.shipPackage(order);
        this.notificationService.sendNotification('Your order has been processed.');
    };
    return OrderProcessor;
}());
// Uso
var fedExShippingService = new FedExShippingService();
var emailNotificationService = new EmailNotificationService();
var orderProcessor = new OrderProcessor(fedExShippingService, emailNotificationService);
orderProcessor.processOrder({ id: 1, name: "my_package", price: 300 });
//#endregion
