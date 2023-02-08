import { Providers } from "@microsoft/mgt-element";
import { Group } from "../types/Group";
export const createGroup = async (name: string, description: string) => {
    let group: any = null
    const response = await Providers.client.api("/groups").post({
        "description": description,
        "displayName": name,
        "groupTypes": [
            "Unified"
        ],
        "mailEnabled": false,
        "mailNickname": "library",
        "securityEnabled": false
    }).then((response) => {
        const g = response.value;
        group = {name: g.displayName, description: g.description, id: g.id};
    }).catch((error) => {
        console.error(error);
    });
    
    return group as Group;
};
