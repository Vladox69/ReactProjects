import { tipos } from "../types/tipos";

export const getBgType = (type) => {
    switch (type) {
        case tipos.fuego:
            return 'alert-warning';
        case tipos.agua:
            return 'alert-primary';
        case tipos.veneno:
            return 'bg-warning-subtle';
        case tipos.planta:
            return 'bg-success text-white';
        case tipos.bicho:
            return 'bg-info text-white';
        case tipos.volador:
            return 'bg-danger-subtle';
        case tipos.normal:
            return 'bg-secondary text-white';
        default:
            break;
    }
}
