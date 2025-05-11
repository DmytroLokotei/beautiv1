import { AxiosResponse } from "axios";
import { SalonServiceUiModel } from "./models";

export function handleSalonsServicesResponce(responce: AxiosResponse): SalonServiceUiModel[] {
    if (responce.status == 200) {
        const root = JSON.parse(responce.data);
        return parseServices(root);
    }
    return []
}

function parseServices(json: ServicesJsonResponse): SalonServiceUiModel[] {
    const salons: SalonServiceUiModel[] = [];
    json.data.forEach((item) => {
        salons.push(parseService(item))
    })
    return salons;
}

function parseService(json: ServiceJsonObject): SalonServiceUiModel {
    return {
        id: json.id,
        name: json.name,
        descriptions: json.descriptions,
        category: json.category,
        price: json.price,
        duration_sec: json.duration_sec
    }
}

type ServicesJsonResponse = {
    data: ServiceJsonObject[],
    message: string
}

type ServiceJsonObject = {
    id: number,
    name: string,
    descriptions: string,
    category: string,
    price: string,
    duration_sec: number
}