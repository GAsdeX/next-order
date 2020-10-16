export class Order {
    colsPerLine = 42;
    driver = null

    constructor() {

    }

    printHeader({
        
    }) {
        this.printer.addFeed();
        this.printer.addTextSize(1, 2);
        this.printer.addTextAlign(this.printer.ALIGN_CENTER);
        this.printer.addText('Town and Country Pizza\n');
        this.printer.addTextSize(1, 1);
        this.printer.addText('406/173-199 Pioneer Rd\n');
        this.printer.addText('Geelong, VIC 3216\n');
        this.printer.addFeed();
        this.printer.addText('*** Kitchen ***\n');
    }

    printLogo() {

    }

    printTitle() {

    }

    printOrders() {

    }

    printBr () {
        this.printer.addText('==========================================\n');
    }
}

/*

printer.addFeed();
    printer.addFeed();
    printer.addFeed();
    printer.addTextSize(1, 2);
    printer.addTextAlign(printer.ALIGN_CENTER);
    printer.addText('Town and Country Pizza\n');
    printer.addTextSize(1, 1);
    printer.addText('406/173-199 Pioneer Rd\n');
    printer.addText('Geelong, VIC 3216\n');
    printer.addFeed();
    printer.addText('*** Kitchen ***\n');
    printer.addText('==========================================\n');
    printer.addTextSize(1, 2);
    printer.addTextFont(printer.FONT_SPECIAL_A);
    printer.addTextStyle(false, false, true, printer.COLOR_1);
    printer.addText('Online Pre-order Delivery\n');
    printer.addText('Code: 703944\n');
    printer.addTextStyle(false, false, false, printer.COLOR_1);
    printer.addTextSize(1, 1);
    printer.addTextAlign(printer.ALIGN_CENTER);
    printer.addTextFont(printer.FONT_A);
    printer.addText('Placed                   Tue 13th 05:12:PM\n');
    printer.addText('Expected                             06:30\n');
    printer.addTextFont(printer.FONT_A);
    printer.addTextStyle(false, false, false, printer.COLOR_1);
    printer.addText('==========================================\n');
    printer.addTextStyle(false, false, true, printer.COLOR_1);
    printer.addText('Customer                                  \n');
    printer.addTextStyle(false, false, false, printer.COLOR_1);
    printer.addText('Will Richards - 0419371396                \n');
    printer.addText('6 Bexley Court, Highton                   \n');
    printer.addText('==========================================\n');
    printer.addTextStyle(false, false, true, printer.COLOR_1);
    printer.addText('Notes                                     \n');
    printer.addTextStyle(false, false, false, printer.COLOR_1);
    printer.addText('N/A                                       \n');
    printer.addText('==========================================\n');
    printer.addTextSize(1, 2);
    printer.addText('3 Large Hawaiian                          \n');
    printer.addText('2 Large Country Special                   \n');
    printer.addFeed();
    printer.addText('                        Delivery Fee: 5.00\n');
    printer.addText('                    Total (Inc GST): 95.00\n');
    printer.addText('                     *ORDER NOT PAID-CASH*\n');
    printer.addTextSize(1, 1);
    printer.addText('==========================================\n');
    printer.addTextStyle(false, false, true, printer.COLOR_1);
    printer.addText('Specials                                  \n');
    printer.addTextStyle(false, false, false, printer.COLOR_1);
    printer.addTextSize(1, 2);
    printer.addText('2 Large Pizzas                       -8.10\n');
    printer.addText('2 Large Pizzas                       -8.10\n');
    printer.addText('2 Large Pizzas                       -8.10\n');
    printer.addText('******************************************\n');
    printer.send();

*/