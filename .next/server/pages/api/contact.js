"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/contact";
exports.ids = ["pages/api/contact"];
exports.modules = {

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ "(api)/./config/nodemailer.js":
/*!******************************!*\
  !*** ./config/nodemailer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mailOptions\": () => (/* binding */ mailOptions),\n/* harmony export */   \"transporter\": () => (/* binding */ transporter)\n/* harmony export */ });\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst email = process.env.EMAIL;\nconst pass = process.env.EMAIL_PASS;\nconst transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0___default().createTransport({\n    service: \"gmail\",\n    auth: {\n        user: email,\n        pass\n    }\n});\nconst mailOptions = {\n    from: email,\n    to: email\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9jb25maWcvbm9kZW1haWxlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBb0M7QUFDUjtBQUU1QixNQUFNRSxRQUFRQyxRQUFRQyxHQUFHLENBQUNDLEtBQUs7QUFDL0IsTUFBTUMsT0FBT0gsUUFBUUMsR0FBRyxDQUFDRyxVQUFVO0FBRTVCLE1BQU1DLGNBQWNSLGlFQUEwQixDQUFDO0lBQ2xEVSxTQUFTO0lBQ1RDLE1BQUs7UUFDREMsTUFBTVY7UUFDTkk7SUFDSjtBQUNKLEdBQUc7QUFFSSxNQUFNTyxjQUFjO0lBQ3ZCQyxNQUFNWjtJQUNOYSxJQUFJYjtBQUNSLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb250YWN0LWVtYWlsLy4vY29uZmlnL25vZGVtYWlsZXIuanM/NTMyNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbm9kZW1haWxlciBmcm9tIFwibm9kZW1haWxlclwiO1xyXG5pbXBvcnQgZG90ZW52IGZyb20gJ2RvdGVudic7XHJcblxyXG5jb25zdCBlbWFpbCA9IHByb2Nlc3MuZW52LkVNQUlMO1xyXG5jb25zdCBwYXNzID0gcHJvY2Vzcy5lbnYuRU1BSUxfUEFTUztcclxuXHJcbmV4cG9ydCBjb25zdCB0cmFuc3BvcnRlciA9IG5vZGVtYWlsZXIuY3JlYXRlVHJhbnNwb3J0KHtcclxuICAgIHNlcnZpY2U6ICdnbWFpbCcsXHJcbiAgICBhdXRoOntcclxuICAgICAgICB1c2VyOiBlbWFpbCxcclxuICAgICAgICBwYXNzLFxyXG4gICAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgbWFpbE9wdGlvbnMgPSB7XHJcbiAgICBmcm9tOiBlbWFpbCxcclxuICAgIHRvOiBlbWFpbCxcclxufSJdLCJuYW1lcyI6WyJub2RlbWFpbGVyIiwiZG90ZW52IiwiZW1haWwiLCJwcm9jZXNzIiwiZW52IiwiRU1BSUwiLCJwYXNzIiwiRU1BSUxfUEFTUyIsInRyYW5zcG9ydGVyIiwiY3JlYXRlVHJhbnNwb3J0Iiwic2VydmljZSIsImF1dGgiLCJ1c2VyIiwibWFpbE9wdGlvbnMiLCJmcm9tIiwidG8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./config/nodemailer.js\n");

/***/ }),

/***/ "(api)/./pages/api/contact.js":
/*!******************************!*\
  !*** ./pages/api/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config_nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/nodemailer */ \"(api)/./config/nodemailer.js\");\n/* eslint-disable no-undef */ // Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\nconst CONTACT_MESSAGE_FIELDS = {\n    name: \"Name\",\n    email: \"Email\",\n    subject: \"Subject\",\n    message: \"Message\",\n    attachment: \"Attachment\"\n};\nconst generateEmailContent = (data)=>{\n    const stringData = Object.entries(data).reduce((str, [key, val])=>str += `${CONTACT_MESSAGE_FIELDS[key]}: \\n${val} \\n \\n`, \"\");\n    const htmlData = Object.entries(data).reduce((str, [key, val])=>str += `<h1 class = \"form-heading\" align=\"left\">${CONTACT_MESSAGE_FIELDS}</h1><p class = \"form-answer\" align=\"left\">${val}</p>`, \"\");\n    return {\n        text: stringData,\n        html: `<!DOCTYPE html>\r\n    <html>\r\n      <head>\r\n        <title></title>\r\n        <meta charset=\"utf-8\" />\r\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\r\n        <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\r\n        <style type=\"text/css\">\r\n          body,\r\n          table,\r\n          td,\r\n          a {\r\n            -webkit-text-size-adjust: 100%;\r\n            -ms-text-size-adjust: 100%;\r\n          }\r\n          table {\r\n            border-collapse: collapse !important;\r\n          }\r\n          body {\r\n            height: 100% !important;\r\n            margin: 0 !important;\r\n            padding: 0 !important;\r\n            width: 100% !important;\r\n          }\r\n          @media screen and (max-width: 525px) {\r\n            .wrapper {\r\n              width: 100% !important;\r\n              max-width: 100% !important;\r\n            }\r\n            .responsive-table {\r\n              width: 100% !important;\r\n            }\r\n            .padding {\r\n              padding: 10px 5% 15px 5% !important;\r\n            }\r\n            .section-padding {\r\n              padding: 0 15px 50px 15px !important;\r\n            }\r\n          }\r\n          .form-container {\r\n            margin-bottom: 24px;\r\n            padding: 20px;\r\n            border: 1px dashed #ccc;\r\n          }\r\n          .form-heading {\r\n            color: #2a2a2a;\r\n            font-family: \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif;\r\n            font-weight: 400;\r\n            text-align: left;\r\n            line-height: 20px;\r\n            font-size: 18px;\r\n            margin: 0 0 8px;\r\n            padding: 0;\r\n          }\r\n          .form-answer {\r\n            color: #2a2a2a;\r\n            font-family: \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif;\r\n            font-weight: 300;\r\n            text-align: left;\r\n            line-height: 20px;\r\n            font-size: 16px;\r\n            margin: 0 0 24px;\r\n            padding: 0;\r\n          }\r\n          div[style*=\"margin: 16px 0;\"] {\r\n            margin: 0 !important;\r\n          }\r\n        </style>\r\n      </head>\r\n      <body style=\"margin: 0 !important; padding: 0 !important; background: #fff\">\r\n        <div\r\n          style=\"\r\n            display: none;\r\n            font-size: 1px;\r\n            color: #fefefe;\r\n            line-height: 1px;\r\n            max-height: 0px;\r\n            max-width: 0px;\r\n            opacity: 0;\r\n            overflow: hidden;\r\n          \"\r\n        ></div>\r\n        <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\r\n          <tr>\r\n            <td\r\n              bgcolor=\"#ffffff\"\r\n              align=\"center\"\r\n              style=\"padding: 10px 15px 30px 15px\"\r\n              class=\"section-padding\"\r\n            >\r\n              <table\r\n                border=\"0\"\r\n                cellpadding=\"0\"\r\n                cellspacing=\"0\"\r\n                width=\"100%\"\r\n                style=\"max-width: 500px\"\r\n                class=\"responsive-table\"\r\n              >\r\n                <tr>\r\n                  <td>\r\n                    <table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\r\n                      <tr>\r\n                        <td>\r\n                          <table\r\n                            width=\"100%\"\r\n                            border=\"0\"\r\n                            cellspacing=\"0\"\r\n                            cellpadding=\"0\"\r\n                          >\r\n                            <tr>\r\n                              <td\r\n                                style=\"\r\n                                  padding: 0 0 0 0;\r\n                                  font-size: 16px;\r\n                                  line-height: 25px;\r\n                                  color: #232323;\r\n                                \"\r\n                                class=\"padding message-content\"\r\n                              >\r\n                                <h2>New Contact Message</h2>\r\n                                <div class=\"form-container\">${htmlData}</div>\r\n                              </td>\r\n                            </tr>\r\n                          </table>\r\n                        </td>\r\n                      </tr>\r\n                    </table>\r\n                  </td>\r\n                </tr>\r\n              </table>\r\n            </td>\r\n          </tr>\r\n        </table>\r\n      </body>\r\n    </html>`\n    };\n};\nconst handler = async (req, res)=>{\n    if (req.method === \"POST\") {\n        // eslint-disable-next-line no-unused-vars\n        const data = req.body;\n        if (!data.name || !data.email || !data.subject || !data.message || !data.attachment) {\n            return res.status(400).json({\n                message: \"Bad Request\"\n            });\n        }\n        try {\n            await _config_nodemailer__WEBPACK_IMPORTED_MODULE_0__.transporter.sendMail({\n                ..._config_nodemailer__WEBPACK_IMPORTED_MODULE_0__.mailOptions,\n                ...generateEmailContent(data),\n                subject: data.subject,\n                attachments: {\n                    filename: \"ps_ordps_pznew.ps_customer.csv\"\n                }\n            });\n            return res.status(200).json({\n                success: true\n            });\n        } catch (error) {\n            console.log(error);\n            return res.status(400).json({\n                message: error.message\n            });\n        }\n    }\n    return res.status(400).json({\n        message: \"Bad Request\"\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29udGFjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLDJCQUEyQixHQUMzQiw2RUFBNkU7QUFFVjtBQUVuRSxNQUFNRSx5QkFBeUI7SUFDN0JDLE1BQU07SUFDTkMsT0FBTztJQUNQQyxTQUFTO0lBQ1RDLFNBQVM7SUFDVEMsWUFBWTtBQUNkO0FBRUEsTUFBTUMsdUJBQXVCLENBQUNDLE9BQVM7SUFDckMsTUFBTUMsYUFBYUMsT0FBT0MsT0FBTyxDQUFDSCxNQUFNSSxNQUFNLENBQUMsQ0FBQ0MsS0FBSyxDQUFDQyxLQUFLQyxJQUFJLEdBQU1GLE9BQU8sQ0FBQyxFQUFFWixzQkFBc0IsQ0FBQ2EsSUFBSSxDQUFDLElBQUksRUFBRUMsSUFBSSxNQUFNLENBQUMsRUFBRTtJQUc5SCxNQUFNQyxXQUFXTixPQUFPQyxPQUFPLENBQUNILE1BQU1JLE1BQU0sQ0FBQyxDQUFDQyxLQUFLLENBQUNDLEtBQUtDLElBQUksR0FBTUYsT0FBTyxDQUFDLHdDQUF3QyxFQUFFWix1QkFBdUIsMkNBQTJDLEVBQUVjLElBQUksSUFBSSxDQUFDLEVBQUU7SUFHcE0sT0FBTztRQUNMRSxNQUFNUjtRQUNOUyxNQUFNLENBQUM7SUF1SVQ7QUFFRjtBQUVBLE1BQU1DLFVBQVUsT0FBT0M7SUFDckIsSUFBSUEsSUFBSUUsTUFBTSxLQUFLLFFBQVE7UUFDekIsMENBQTBDO1FBQzFDLE1BQU1kLE9BQU9ZLElBQUlHLElBQUk7UUFDckIsSUFBSSxDQUFDZixLQUFLTixJQUFJLElBQUksQ0FBQ00sS0FBS0w7WUFDdEI7Z0JBQThCRTtZQUF1QjtRQUN2RCxDQUFDO1FBQ0QsSUFBSTtZQUNGLE1BQU1MLFlBQVkwQixRQUFRLENBQUM7O2dCQUV6QjtnQkFDQXRCLFNBQVNJLEtBQUtKLE9BQU87OztnQkFLckI7WUFDRjtZQUNBLE9BQU9pQixJQUFJRyxNQUFNLENBQUMsS0FBS0M7Z0JBQU9JLFNBQVMsSUFBSTtZQUFDO1FBQzlDLEVBQUUsT0FBT0MsT0FBTztZQUNkQyxRQUFRQyxHQUFHO1lBQ1gsT0FBT1gsSUFBSUcsTUFBTSxDQUFDLEtBQUtDO2dCQUFPcEIsU0FBU3lCLE1BQU16QixPQUFPO1lBQUM7UUFDdkQ7SUFDRixDQUFDO0lBQ0MsT0FBT2dCO1FBQXVCaEIsU0FBUztJQUFjO0FBQ3ZEO0FBRUYsZUFBZWMsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbnRhY3QtZW1haWwvLi9wYWdlcy9hcGkvY29udGFjdC5qcz8zNDkzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXHJcbi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXHJcblxyXG5pbXBvcnQgeyBtYWlsT3B0aW9ucywgdHJhbnNwb3J0ZXIgfSBmcm9tIFwiLi4vLi4vY29uZmlnL25vZGVtYWlsZXJcIjtcclxuXHJcbmNvbnN0IENPTlRBQ1RfTUVTU0FHRV9GSUVMRFMgPSB7XHJcbiAgbmFtZTogXCJOYW1lXCIsXHJcbiAgZW1haWw6IFwiRW1haWxcIixcclxuICBzdWJqZWN0OiBcIlN1YmplY3RcIixcclxuICBtZXNzYWdlOiBcIk1lc3NhZ2VcIixcclxuICBhdHRhY2htZW50OiBcIkF0dGFjaG1lbnRcIlxyXG59XHJcblxyXG5jb25zdCBnZW5lcmF0ZUVtYWlsQ29udGVudCA9IChkYXRhKSA9PiB7XHJcbiAgY29uc3Qgc3RyaW5nRGF0YSA9IE9iamVjdC5lbnRyaWVzKGRhdGEpLnJlZHVjZSgoc3RyLCBba2V5LCB2YWxdICkgPT4gc3RyICs9IGAke0NPTlRBQ1RfTUVTU0FHRV9GSUVMRFNba2V5XX06IFxcbiR7dmFsfSBcXG4gXFxuYCwgXCJcIlxyXG4gIClcclxuXHJcbiAgY29uc3QgaHRtbERhdGEgPSBPYmplY3QuZW50cmllcyhkYXRhKS5yZWR1Y2UoKHN0ciwgW2tleSwgdmFsXSApID0+IHN0ciArPSBgPGgxIGNsYXNzID0gXCJmb3JtLWhlYWRpbmdcIiBhbGlnbj1cImxlZnRcIj4ke0NPTlRBQ1RfTUVTU0FHRV9GSUVMRFN9PC9oMT48cCBjbGFzcyA9IFwiZm9ybS1hbnN3ZXJcIiBhbGlnbj1cImxlZnRcIj4ke3ZhbH08L3A+YCwgXCJcIlxyXG4gIClcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHRleHQ6IHN0cmluZ0RhdGEsXHJcbiAgICBodG1sOiBgPCFET0NUWVBFIGh0bWw+XHJcbiAgICA8aHRtbD5cclxuICAgICAgPGhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPjwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgY2hhcnNldD1cInV0Zi04XCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxyXG4gICAgICAgIDxtZXRhIGh0dHAtZXF1aXY9XCJYLVVBLUNvbXBhdGlibGVcIiBjb250ZW50PVwiSUU9ZWRnZVwiIC8+XHJcbiAgICAgICAgPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiPlxyXG4gICAgICAgICAgYm9keSxcclxuICAgICAgICAgIHRhYmxlLFxyXG4gICAgICAgICAgdGQsXHJcbiAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xyXG4gICAgICAgICAgICAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRhYmxlIHtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTI1cHgpIHtcclxuICAgICAgICAgICAgLndyYXBwZXIge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnJlc3BvbnNpdmUtdGFibGUge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnBhZGRpbmcge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggNSUgMTVweCA1JSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zZWN0aW9uLXBhZGRpbmcge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTVweCA1MHB4IDE1cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmZvcm0tY29udGFpbmVyIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggZGFzaGVkICNjY2M7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZm9ybS1oZWFkaW5nIHtcclxuICAgICAgICAgICAgY29sb3I6ICMyYTJhMmE7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYSBOZXVlXCIsIFwiSGVsdmV0aWNhXCIsIFwiQXJpYWxcIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDAgOHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmZvcm0tYW5zd2VyIHtcclxuICAgICAgICAgICAgY29sb3I6ICMyYTJhMmE7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYSBOZXVlXCIsIFwiSGVsdmV0aWNhXCIsIFwiQXJpYWxcIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDAgMjRweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGRpdltzdHlsZSo9XCJtYXJnaW46IDE2cHggMDtcIl0ge1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICA8L2hlYWQ+XHJcbiAgICAgIDxib2R5IHN0eWxlPVwibWFyZ2luOiAwICFpbXBvcnRhbnQ7IHBhZGRpbmc6IDAgIWltcG9ydGFudDsgYmFja2dyb3VuZDogI2ZmZlwiPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPVwiXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXB4O1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZlZmVmZTtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDFweDtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogMHB4O1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDBweDtcclxuICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgIFwiXHJcbiAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgIDx0YWJsZSBib3JkZXI9XCIwXCIgY2VsbHBhZGRpbmc9XCIwXCIgY2VsbHNwYWNpbmc9XCIwXCIgd2lkdGg9XCIxMDAlXCI+XHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0ZFxyXG4gICAgICAgICAgICAgIGJnY29sb3I9XCIjZmZmZmZmXCJcclxuICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9XCJwYWRkaW5nOiAxMHB4IDE1cHggMzBweCAxNXB4XCJcclxuICAgICAgICAgICAgICBjbGFzcz1cInNlY3Rpb24tcGFkZGluZ1wiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8dGFibGVcclxuICAgICAgICAgICAgICAgIGJvcmRlcj1cIjBcIlxyXG4gICAgICAgICAgICAgICAgY2VsbHBhZGRpbmc9XCIwXCJcclxuICAgICAgICAgICAgICAgIGNlbGxzcGFjaW5nPVwiMFwiXHJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9XCJtYXgtd2lkdGg6IDUwMHB4XCJcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwicmVzcG9uc2l2ZS10YWJsZVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlIHdpZHRoPVwiMTAwJVwiIGJvcmRlcj1cIjBcIiBjZWxsc3BhY2luZz1cIjBcIiBjZWxscGFkZGluZz1cIjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcj1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VsbHNwYWNpbmc9XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGxwYWRkaW5nPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAwIDAgMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMyMzIzMjM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInBhZGRpbmcgbWVzc2FnZS1jb250ZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5OZXcgQ29udGFjdCBNZXNzYWdlPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jb250YWluZXJcIj4ke2h0bWxEYXRhfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICA8L3RhYmxlPlxyXG4gICAgICA8L2JvZHk+XHJcbiAgICA8L2h0bWw+YFxyXG4gIH07XHJcblxyXG59O1xyXG5cclxuY29uc3QgaGFuZGxlciA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xyXG4gICAgY29uc3QgZGF0YSA9IHJlcS5ib2R5O1xyXG4gICAgaWYgKCFkYXRhLm5hbWUgfHwgIWRhdGEuZW1haWwgfHwgIWRhdGEuc3ViamVjdCB8fCAhZGF0YS5tZXNzYWdlIHx8ICFkYXRhLmF0dGFjaG1lbnQpIHtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgbWVzc2FnZTogJ0JhZCBSZXF1ZXN0JyB9KTtcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IHRyYW5zcG9ydGVyLnNlbmRNYWlsKHtcclxuICAgICAgICAuLi5tYWlsT3B0aW9ucyxcclxuICAgICAgICAuLi5nZW5lcmF0ZUVtYWlsQ29udGVudChkYXRhKSxcclxuICAgICAgICBzdWJqZWN0OiBkYXRhLnN1YmplY3QsXHJcbiAgICAgICAgXHJcbiAgICAgICAgYXR0YWNobWVudHM6IHtcclxuICAgICAgICAgIGZpbGVuYW1lOiBcInBzX29yZHBzX3B6bmV3LnBzX2N1c3RvbWVyLmNzdlwiLFxyXG4gICAgICAgICAgLyogcGF0aDogJ0M6L1VzZXJzL2Nkcm9ndWV0dC9EZXNrdG9wL21vZHVsb3Mvb3BlbndlYmluYXJzL2FyY2hpdm9zX2NzdicgKi9cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IG1lc3NhZ2U6ICdCYWQgUmVxdWVzdCcgfSk7XHJcbiAgfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7Il0sIm5hbWVzIjpbIm1haWxPcHRpb25zIiwidHJhbnNwb3J0ZXIiLCJDT05UQUNUX01FU1NBR0VfRklFTERTIiwibmFtZSIsImVtYWlsIiwic3ViamVjdCIsIm1lc3NhZ2UiLCJhdHRhY2htZW50IiwiZ2VuZXJhdGVFbWFpbENvbnRlbnQiLCJkYXRhIiwic3RyaW5nRGF0YSIsIk9iamVjdCIsImVudHJpZXMiLCJyZWR1Y2UiLCJzdHIiLCJrZXkiLCJ2YWwiLCJodG1sRGF0YSIsInRleHQiLCJodG1sIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImJvZHkiLCJzdGF0dXMiLCJqc29uIiwic2VuZE1haWwiLCJhdHRhY2htZW50cyIsImZpbGVuYW1lIiwic3VjY2VzcyIsImVycm9yIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/contact.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/contact.js"));
module.exports = __webpack_exports__;

})();