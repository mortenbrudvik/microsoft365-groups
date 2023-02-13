import { Providers } from "@microsoft/mgt-element";
import {useEffect, useState} from "react";
import {ActionIcon, Group, Stack} from "@mantine/core";
import { X } from "tabler-icons-react";

export const Groups = () => {
    const [groups, setGroups] = useState<any[]>([]);
    
    useEffect(() => {
        (async () => {
            const groups = await Providers.client?.api("/groups").get();
            //const groups = await Providers.client?.api("/groups?$filter=creationOptions/Any(x:x eq 'Team')&$select=displayName,id,description").get();
            console.log(groups);
            setGroups(groups.value)
        })();
    }, []);

    const deleteGroup = async (id: string) => {
        console.log("delete group " + id);
        const result = await Providers.client?.api("/groups/" + id).delete();
        console.log(result);
    };
    
    return (
        <div>
            <h1>Groups</h1>
            <Stack>
                {groups.map(group => (
                    <Group>
                        <div key={group.id}>{group.displayName}</div>
                        <ActionIcon onClick={ async () => {
                            await deleteGroup(group.id);
                        }}>
                            <X size={16}/>
                        </ActionIcon>
                    </Group>
                ))}
            </Stack>
        </div>
    );
}