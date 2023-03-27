
import { Request, Response } from 'express';

export const sendResponse = (res: Response, req: Request, data: any, message: String, success: boolean, code: number) => {
    const responseObj = {
        data,
        message,
        success
    }

    res.locals.response_body = {
        data,
        message,
        code,
    };
    // logger.info("logs created successfully.");

    res.status(code).json(responseObj);
};
export const sendError = (res: Response, req: Request, data: any, msg: String, code: number) => {
    // logger.error("error response send successfully.");
    sendResponse(res, req, data, msg || "Request Failed", false, code);
}
// export const ResponseUtils = {sendResponse, sendError}
// class Responses {
//     constructor() { }
//     async sendResponse(res, req, data, message, success, code) {
//         const responseObj = {
//             data,
//             message,
//             success
//         }

//         res.locals.response_body = {
//             data,
//             message,
//             code,
//         };
//         // AuditLogsService.createAuditLogs(req, res);
//         // logger.info("logs created successfully.");

//         res.status(code).json(responseObj);
//     }
//     sendError(res, req, data, msg, code) {
//         // logger.error("error response send successfully.");
//         this.sendResponse(res, req, data, msg || "Request Failed", false, code);
//     }
// }
