import { CRM_BASE, CRMDIG_BASE, LRMOO_BASE } from "./rdf-prefixes";

export function getCode(uri: string) {
    if (
        uri.startsWith(CRM_BASE) ||
        uri.startsWith(CRMDIG_BASE) ||
        uri.startsWith(LRMOO_BASE)
    ) {
        return uri.split("/").slice(-1)[0].split("_")[0];
    }
    return null;
}