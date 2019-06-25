(function (window) {
    'use strict'
    var App = window.App || {};
    var $ = window.jQuery;

    function CheckList(selector) {
        if (!selector) {
            throw new Error('No selector provided');
        }

        this.$element = $(selector);
        if (this.$element.length === 0) {
            throw new Error('Could not find element with selector : ' + selector);
        }
    }
        CheckList.prototype.addRow = function (coffeeOrder) {
            this.removeRow(coffeeOrder.emailAddress);
            var rowElement = new Row(coffeeOrder);

            this.$element.append(rowElement.$element);
        }
    
        CheckList.prototype.removeRow = function (email) {  
            this.$element
            .find('[value="' + email + '"]')
            .closet('[data-coffee-order="checkbox"]')
            .remove();
        }

    function Row(coffeeOrder) {
        var $div = $('<div></div>', {
            'data-coffee-order': 'checklist', 'class': 'checklist'
        });

        var $label = $('<label></label>');

        var $checkbox = $('<input></input>', {
            type: 'checkbox', value: coffeeOrder.emailAddress
        });

        var description = coffeeOrder.size + ' ';
        if (coffeeOrder.flavor) {
            description += coffeeOrder.flavor + ' ';
        }

        description += coffeeOrder.coffee + ', ';
        description += ' (' + coffeeOrder.emailAddress + ')';
        description += ' [' + coffeeOrder.strength + 'x]';

        $label.append($checkbox);
        $label.append(description);
        $div.append($label);

        this.$element = $div;
    }

    App.CheckList = CheckList;
    window.App = App;
})(window)