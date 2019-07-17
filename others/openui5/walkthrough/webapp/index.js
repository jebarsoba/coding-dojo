sap.ui.define([
    "sap/ui/core/mvc/XMLView"
], async (XMLView) => {
    "use strict";

    let oView = await XMLView.create({
		viewName: "sap.ui.demo.walkthrough.view.App"
    });
    
    oView.placeAt("content");
});