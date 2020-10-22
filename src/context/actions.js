import {get,set} from "local-storage";

export const addIP = (ip) => {
    const printers = get('printers') || [];

    if (printers instanceof Array) {

        set('printers', [...printers, ip]);
    } else {
        set('printers', [ip]);
    }


}

export const removeIP = (ip) => {
    const printers = get('printers');

    set('printers', printers.filter(el => el !== ip))
}

export const getIPs = () => {
    return get('printers')
}