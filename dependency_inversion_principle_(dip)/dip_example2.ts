//#region BAD EXAMPLE

// class ShippingService {
//     shipPackage(box: any): void {
//         console.log(`Shipping package: ${JSON.stringify(box)}`);
//     }
// }

// class NotificationService {
//     sendNotification(message: string): void {
//         console.log(`Sending notification: ${message}`);
//     }
// }


// class OrderProcessor {
//     private shippingService: ShippingService;
//     private notificationService: NotificationService;

//     constructor() {
//         this.shippingService = new ShippingService();
//         this.notificationService = new NotificationService();
//     }

//     processOrder(order: any): void {
//         this.shippingService.shipPackage(order);
//         this.notificationService.sendNotification('Your order has been processed.');
//     }
// }


// const orderProcessor = new OrderProcessor();
// orderProcessor.processOrder({ });

//#endregion

//#region GOD EXAMPLE
// Abstracciones
interface ShippingService {
    shipPackage(package: any): void;
}

interface NotificationService {
    sendNotification(message: string): void;
}

// Clases de bajo nivel
class FedExShippingService implements ShippingService {
    shipPackage(box: any): void {
        console.log(`Shipping via FedEx: ${JSON.stringify(box)}`);
    }
}

class EmailNotificationService implements NotificationService {
    sendNotification(message: string): void {
        console.log(`Sending email notification: ${message}`);
    }
}

// Clase de alto nivel
class OrderProcessor {
    private shippingService: ShippingService;
    private notificationService: NotificationService;

    constructor(shippingService: ShippingService, notificationService: NotificationService) {
        this.shippingService = shippingService;
        this.notificationService = notificationService;
    }

    processOrder(order: any): void {
        // Procesamiento del pedido
        this.shippingService.shipPackage(order);
        this.notificationService.sendNotification('Your order has been processed.');
    }
}

// Uso
const fedExShippingService = new FedExShippingService();
const emailNotificationService = new EmailNotificationService();

const orderProcessor = new OrderProcessor(fedExShippingService, emailNotificationService);
orderProcessor.processOrder({ id: 1, name: "my_package", price: 300 });
//#endregion