import { useState} from "react";

export default function Paramatere() {
    const [groups, setGroups] = useState([
        {
            id: "1",
            title: "Kollokvie 1",
            subtitle: "Frontend og mobilutvikling",
            description: "Vi er en gruppe..."
        },
        {
            id: "2",
            title: "Kollokvie 2",
            subtitle: "Frontend og mobilutvikling",
            description: "Vi er en gruppe..."
        },
        {
            id: "3",
            title: "Kollokvie 3",
            subtitle: "Frontend og mobilutvikling",
            description: "Vi er en gruppe..."
        },
        {
            id: "4",
            title: "Kollokvie 43",
            subtitle: "Frontend og mobilutvikling",
            description: "Vi er en gruppe..."
        },
        {
            id: "5",
            title: "Kollokvie 5",
            subtitle: "Frontend og mobilutvikling",
            description: "Vi er en gruppe..."
        }
    ]);

    const [groupFilter, setGroupFilter] = useState("");

    function updateGroupFilter(event) {
        setGroupFilter(event.target.value);
    }

    return (
        <>
            <input value={groupFilter} onChange={updateGroupFilter} />

            <div className="flex flex-row flex-wrap">
                {groups &&
                    groups
                        .filter(group => group.title.includes(groupFilter))
                        .map((group) => (
                            <div className="card bg-white flex flex-col items-center justify-center p-10 shadow-2xl rounded-2xl w-64 m-4" key={group.id}>
                                <div className="name text-gray-800 text-xl font-medium mt-4" >
                                    {group.title}
                                </div>
                                <div className="name text-gray-800 text-xl font-medium" >
                                    {group.subtitle}
                                </div>
                            </div>
                        ))}
            </div>
        </>
    );
};

