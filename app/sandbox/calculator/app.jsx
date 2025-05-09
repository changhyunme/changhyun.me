"use client"
import useCalculatorStore from "./store.js";

import CalBtn from "./components/CalBtn";
import CalHeader from "./components/CalHeader";
import CalBtnGroup from "./components/CalBtnGroup";
import Blockquote from "@/components/ui/Blockquote";

import priceTable from "./priceTable.js";

const CalculatorApp = ({}) => {
    const { item, setItem } = useCalculatorStore();

    return (
        <>
            {priceTable.map((section) => {
                return (
                    <div key={section.title}>
                        {item[section.id] && (() => {
                            const selected = section.content.find(c => c.id === item[section.id]);
                            return selected ? (
                                <span className="italic text-text">
                                    
                                    <CalHeader title={section.title} price={selected.price} />
                                </span>
                            ) : null;
                        })()}
                        
                        {section.desc && <Blockquote>{section.desc}</Blockquote>}
                        <CalBtnGroup>
                            {section.content.map((sItem) => (
                                <CalBtn
                                    key={sItem.id}
                                    name={sItem.name}
                                    isActive={item[section.id] === sItem.id}
                                    onClick={() =>
                                        setItem(prev => ({
                                            ...prev,
                                            [section.id]: sItem.id
                                        }))
                                    }
                                />
                            ))}
                        </CalBtnGroup>
                    </div>
                );
            })}
        </>
    );
}

export default CalculatorApp;