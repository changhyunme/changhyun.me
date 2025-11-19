"use client";
import useCalculatorStore from "./store.js";
import priceTable from "./priceTable.js";

const calculateCost = (item) => {
    let total = 0;
    const details = {};

    priceTable.forEach((section) => {
        const key = section.id; // 더 이상 조건문 X
        if (!key) return;

        const selected = section.content.find(c => c.id === item[key]);
        if (!selected) return; // 이게 빠졌을 수도 있음

        details[key] = {
            label: selected.name,
            cost: selected.price
        };
        total += selected.price;
    });

    return { total, details };
};

const EstimateSummary = () => {
    const { item } = useCalculatorStore();
    const { total, details } = calculateCost(item);

    return (
        <div className="text-text border-t mt-6 pt-4 space-y-1">
            <div>Type: {details.type?.label} (${details.type?.cost})</div>
            <div>Pages: {details.pages?.label} (${details.pages?.cost})</div>
            <div>Support: {details.support?.label} (${details.support?.cost})</div>
            <div className="pt-2 font-bold">Estimated Total: ${total}</div>
        </div>
    );
};

export default EstimateSummary;
