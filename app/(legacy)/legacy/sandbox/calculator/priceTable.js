const priceTable = [
    {
        id : "type",
        title: "Service Type",
        desc: "제작하시고저 하시는 서비스의 형태를 선택하시오.",
        content: [
            { name: "Website", id: "website", price: 120 },
            { name: "App", id: "app", price: 150 },
            { name: "etc", id: "etc", price: 80 }
        ]
    },
    {
        id : "pages",
        title: "Pages / Views",
        desc: "님의 서비스를 구성하는 페이지 또는 뷰의 수 입니다.",
        content: [
            { name: "1~3 views", id: "light", price: 100 },
            { name: "3~10 views", id: "medium", price: 300 },
            { name: "10+ views", id: "heavy", price: 600 }
        ]
    },
    {
        id : "stack",
        title: "Techical",
        content: [
            { name: "1~3 views", id: "light", price: 100 },
            { name: "3~10 views", id: "medium", price: 300 },
            { name: "10+ views", id: "heavy", price: 600 }
        ]
    },
    {
        id : "support",
        title: "Technical Support",
        desc: "서비스에 포함할 기술지원 기간을 선택하세요.",
        content: [
            { name: "No", id: "no", price: 0 },
            { name: "1 year", id: "s1y", price: 220 },
            { name: "3 year", id: "s3y", price: 600 }
        ]
    }
];

export default priceTable;
