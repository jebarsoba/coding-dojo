# Steps I followed to setup the app structure
1. Follow the steps in "Step 1: Ready..."
1. npm install --global @ui5/cli _`(this is done only once)`_  
2. npm init --yes  
3. Add these dependencies in the package.json:
```json
"dependencies": {
  "@openui5/sap.m": "^1.67.1",
  "@openui5/sap.ui.core": "^1.67.1",
  "@openui5/sap.ui.layout": "^1.67.1",
  "@openui5/sap.tnt": "^1.67.1",
  "@openui5/themelib_sap_belize": "^1.67.1"
}
```
4. ui5 init  
5. npm install  
6. ui5 serve -o index.html  