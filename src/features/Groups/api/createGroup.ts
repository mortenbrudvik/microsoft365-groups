import { Providers } from "@microsoft/mgt-element";
import { Group } from "../types/Group";
export const createGroup = async (name: string, description: string) => {
    let group: any = null
    await Providers.client.api("/groups").post({
        "description": description,
        "displayName": name,
        "creationOptions": [
            "Testing"
        ],
        "groupTypes": [
            "Unified"
        ],
        "mailEnabled": 'false',
        "mailNickname": generateUUID(),
        "securityEnabled": 'false'
    }).then((response) => {
        const g = response.value;
        group = {name: g.displayName, description: g.description, id: g.id};
    }).catch((error) => {
        console.error(error);
    });
    
    return group as Group;
};

function generateUUID() { // Public Domain/MIT
    let d = new Date().getTime();//Timestamp
    let d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now() * 1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        let r = Math.random() * 16;//random number between 0 and 16
        if(d > 0){//Use timestamp until depleted
            r = (d + r)%16 | 0;
            d = Math.floor(d/16);
        } else {//Use microseconds since page-load if supported
            r = (d2 + r)%16 | 0;
            d2 = Math.floor(d2/16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

