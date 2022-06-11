const data = [{
    id: 1,
    icon: "⭕️",
    status: "to do",
    title: "Human Interest Form",
    content: "Fill out human interest distribution form"
}, {
    id: 2,
    icon: "⭕️",
    status: "to do",
    title: "Purchase present",
    content: "Get an anniversary gift"
}, {
    id: 3,
    icon: "⭕️",
    status: "to do",
    title: "Invest in investments",
    content: "Call the bank to talk about investments"
}, {
    id: 4,
    icon: "⭕️",
    status: "to do",
    title: "Daily reading",
    content: "Finish reading Intro to UI/UX"
}];

const statuses = [
    {
        status: "to do",
        icon: "⭕️",
        color: "#EB5A46"
    }, 
    {
        status: "in progress",
        icon: "🔆️",
        color: "#00C2E0"
    }, 
    // {
    //     status: "in review",
    //     icon: "📝",
    //     color: "#C377E0"
    // }, 
    {
        status: "done",
        icon: "✅",
        color: "#3981DE"
    }
];


export { data, statuses };