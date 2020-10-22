export class Order {
    colsPerLine = 42; // or 57
    printer = null
    order = null

    constructor(printer, order, colsPerLine) {
        this.colsPerLine = colsPerLine
        this.printer = printer
        this.order = order

        this.buildOrder()
    }

    printHeader = () => {
        this.printer.addFeed();
        this.printer.addFeed();
        this.printer.addFeed();
        this.printer.addTextSize(1, 2);
        this.printer.addTextAlign(this.printer.ALIGN_CENTER);
        this.printer.addText('Town and Country Pizza\n');
        this.printer.addTextSize(1, 1);
        this.printer.addText('406/173-199 Pioneer Rd\n');
        this.printer.addText('Geelong, VIC 3216\n');
        this.printer.addFeed();
        this.printer.addText('*** Kitchen ***\n');
        this.printBr()
    }

    printOrderdetails = () => {
        this.printer.addTextSize(1, 2);
        this.printer.addTextFont(this.printer.FONT_SPECIAL_A);
        this.printer.addTextStyle(false, false, true, this.printer.COLOR_1);
        this.printer.addText('Online Pre-order Delivery\n');
        this.printer.addText('Code: 703944\n');
        this.printer.addTextStyle(false, false, false, this.printer.COLOR_1);
        this.printer.addTextSize(1, 1);
        this.printer.addTextAlign(this.printer.ALIGN_CENTER);
        this.printer.addTextFont(this.printer.FONT_A);
        this.printer.addText(this.alignJustify('Placed', 'Tue 13th 05:12:PM'));
        this.printer.addText(this.alignJustify('Expected', '06:30'));
        this.printer.addTextFont(this.printer.FONT_A);
        this.printer.addTextStyle(false, false, false, this.printer.COLOR_1);
        this.printBr();
    }

    printCustommerDetails = () => {
        this.printer.addTextStyle(false, false, true, this.printer.COLOR_1);
        this.printer.addText(this.alignLeft('Customer'));
        this.printer.addTextStyle(false, false, false, this.printer.COLOR_1);
        this.printer.addText(this.alignLeft('Will Richards - 0419371396'));
        this.printer.addText(this.alignLeft('6 Bexley Court, Highton'));
        this.printBr();
    }

    printNotes = () => {
        this.printer.addTextStyle(false, false, true, this.printer.COLOR_1);
        this.printer.addText(this.alignLeft('Notes'));
        this.printer.addTextStyle(false, false, false, this.printer.COLOR_1);
        this.printer.addText(this.alignLeft('N/A'));
        this.printBr();
    }

    printOrders = () => {
        this.printer.addTextSize(1, 2);
        this.printer.addText(this.alignLeft('3 Large Hawaiian'));
        this.printer.addText(this.alignLeft('2 Large Country Special'));
        this.printer.addFeed();
        this.printer.addText(this.alignRight('Delivery Fee: 5.00'));
        this.printer.addText(this.alignRight('Total (Inc GST): 95.00'));
        this.printer.addText(this.alignRight('*ORDER NOT PAID-CASH*'));
        this.printer.addTextSize(1, 1);
        this.printBr();
    }

    printFooter = () => {
        this.printer.addTextStyle(false, false, true, this.printer.COLOR_1);
        this.printer.addText(this.alignLeft('Specials'));
        this.printer.addTextStyle(false, false, false, this.printer.COLOR_1);
        this.printer.addTextSize(1, 2);
        this.printer.addText(this.alignJustify('2 Large Pizzas', '-8.10'));
        this.printer.addText(this.alignJustify('2 Large Pizzas', '-8.10'));
        this.printer.addText(this.alignJustify('2 Large Pizzas', '-8.10'));
        this.printer.addCut();
    }

    alignLeft = (t) => {
        const restLen = this.colsPerLine - t.length
        return (t + ' '.repeat(restLen) + '\n');
    }

    alignRight = (t) => {
        const restLen = this.colsPerLine - t.length
        return (' '.repeat(restLen) + t + '\n');
    }

    alignJustify = (t1, t2) => {
        const restLen = this.colsPerLine - t1.length - t2.length
        return (t1 + ' '.repeat(restLen) + t2 + '\n');
    }

    printBr = (symbol = '=') => {
        this.printer.addText(symbol.repeat(this.colsPerLine) + '\n');
    }

    buildOrder = () => {
        this.printHeader();
        this.printOrderdetails();
        this.printCustommerDetails();
        this.printNotes();
        this.printOrders();
        this.printFooter();
    }
}

/*

printer.addFeed();
    builder.addFeed();
    builder.addFeed();
    builder.addFeed();
    builder.addTextSize(1, 2);
    builder.addTextAlign(builder.ALIGN_CENTER);
    builder.addText('Town and Country Pizza\n');
    builder.addTextSize(1, 1);
    builder.addText('406/173-199 Pioneer Rd\n');
    builder.addText('Geelong, VIC 3216\n');
    builder.addFeed();
    builder.addText('*** Kitchen ***\n');
    builder.addText('==========================================\n');
    builder.addTextSize(1, 2);
    builder.addTextFont(builder.FONT_SPECIAL_A);
    builder.addTextStyle(false, false, true, builder.COLOR_1);
    builder.addText('Online Pre-order Delivery\n');
    builder.addText('Code: 703944\n');
    builder.addTextStyle(false, false, false, builder.COLOR_1);
    builder.addTextSize(1, 1);
    builder.addTextAlign(builder.ALIGN_CENTER);
    builder.addTextFont(builder.FONT_A);
    builder.addText('Placed                   Tue 13th 05:12:PM\n');
    builder.addText('Expected                             06:30\n');
    builder.addTextFont(builder.FONT_A);
    builder.addTextStyle(false, false, false, builder.COLOR_1);
    builder.addText('==========================================\n');
    builder.addTextStyle(false, false, true, builder.COLOR_1);
    builder.addText('Customer                                  \n');
    builder.addTextStyle(false, false, false, builder.COLOR_1);
    builder.addText('Will Richards - 0419371396                \n');
    builder.addText('6 Bexley Court, Highton                   \n');
    builder.addText('==========================================\n');
    builder.addTextStyle(false, false, true, builder.COLOR_1);
    builder.addText('Notes                                     \n');
    builder.addTextStyle(false, false, false, builder.COLOR_1);
    builder.addText('N/A                                       \n');
    builder.addText('==========================================\n');
    builder.addTextSize(1, 2);
    builder.addText('3 Large Hawaiian                          \n');
    builder.addText('2 Large Country Special                   \n');
    builder.addFeed();
    builder.addText('                        Delivery Fee: 5.00\n');
    builder.addText('                    Total (Inc GST): 95.00\n');
    builder.addText('                     *ORDER NOT PAID-CASH*\n');
    builder.addTextSize(1, 1);
    builder.addText('==========================================\n');
    builder.addTextStyle(false, false, true, builder.COLOR_1);
    builder.addText('Specials                                  \n');
    builder.addTextStyle(false, false, false, builder.COLOR_1);
    builder.addTextSize(1, 2);
    builder.addText('2 Large Pizzas                       -8.10\n');
    builder.addText('2 Large Pizzas                       -8.10\n');
    builder.addText('2 Large Pizzas                       -8.10\n');
    builder.addText('******************************************\n');
    builder.addCut()

*/