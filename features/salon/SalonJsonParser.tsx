import { AxiosResponse } from "axios";
import { SalonUiModel } from "./models";

export function handleSalonsSearchResponce(responce: AxiosResponse): SalonUiModel[] {
    if (responce.status == 200) {
        const root = JSON.parse(responce.data);
        return parseSalons(root);
    }
    return []
}

function parseSalons(json: SalonsJsonResponse): SalonUiModel[] {
    const salons: SalonUiModel[] = [];
    json.data.forEach((item) => {
        salons.push(parseSalon(item))
    })
    return salons;
}

function parseSalon(json: SalonJsonObject): SalonUiModel {
    return {
        id: json.id,
        name: json.name
    }
}

type SalonsJsonResponse = {
    data: SalonJsonObject[],
    message: string
}

type SalonJsonObject = {
    id: number,
    name: string,
}