import {IDynamicPerson} from "@microsoft/mgt-components";

export type Joke = {
    id: string;
    setup?: string;
    punchline?: string;
    image?: string;
    sharedWith?: IDynamicPerson[]; 
};