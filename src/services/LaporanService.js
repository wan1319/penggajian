import config from "../config";
import { helperHandlerExportResponse } from "../utils/helpers";
import AuthService from "./AuthService";
import HTTPService from "./HTTPService";

const LaporanService = {};

LaporanService.reportListGaji = (data) => {
    return new Promise((resolve, reject) => {
        HTTPService({
            url: `${config.BASE_URL}/gaji/gaji-excel`,
            method: "POST",
            responseType: "blob",
            headers: {
                "x-access-token": AuthService.getToken(),
            },
            data,
        })
            .then((response) => {
                helperHandlerExportResponse(response, resolve, "REPORTING-PEMBELIAN");
            })
            .catch((error) => {
                reject(error);
            });
    });
};
ReportingService.reportPPh = (data) => {
    return new Promise((resolve, reject) => {
        HTTPService({
            url: `${config.BASE_URL}/gaji/pph-excel`,
            method: "POST",
            responseType: "blob",
            headers: {
                "x-access-token": AuthService.getToken(),
            },
            data,
        })
            .then((response) => {
                helperHandlerExportResponse(response, resolve, "REPORTING-PEMBELIAN");
            })
            .catch((error) => {
                reject(error);
            });
    });
};
ReportingService.reportBPJS = (data) => {
    return new Promise((resolve, reject) => {
        HTTPService({
            url: `${config.BASE_URL}/gaji/bpjs-excel`,
            method: "POST",
            responseType: "blob",
            headers: {
                "x-access-token": AuthService.getToken(),
            },
            data,
        })
            .then((response) => {
                helperHandlerExportResponse(response, resolve, "REPORTING-PEMBELIAN");
            })
            .catch((error) => {
                reject(error);
            });
    });
};
ReportingService.reportslipgaji = (data) => {
    return new Promise((resolve, reject) => {
        HTTPService({
            url: `${config.BASE_URL}/gaji/:ID_Gaji/slip-excel`,
            method: "POST",
            responseType: "blob",
            headers: {
                "x-access-token": AuthService.getToken(),
            },
            data,
        })
            .then((response) => {
                helperHandlerExportResponse(response, resolve, "REPORTING-PEMBELIAN");
            })
            .catch((error) => {
                reject(error);
            });
    });
};

export default LaporanService;