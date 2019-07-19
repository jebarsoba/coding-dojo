sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel"
 ], function (UIComponent, JSONModel) {
    "use strict";

    return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
        metadata: {
            manifest: "json"
        },
        init: function () {
            // call the init function of the parent
            // And I'd add the following:
            // 'apply' executes the 'init' function in the context of the first parameter (this component), seeding it with arguments (second parameter)
            UIComponent.prototype.init.apply(this, arguments);
            // set data model
            var oData = {
                recipient: {
                name: "World"
                }
            };
            var oModel = new JSONModel(oData);
            this.setModel(oModel);
        }
    });
 });