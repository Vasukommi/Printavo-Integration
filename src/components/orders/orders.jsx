import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import "./orders.css";

const printavoOrderFields = [
    "Order ID",
    "Order Name",
    "Order Date",
    "Customer Name",
    "Customer Email",
];

const ourFields = [
    { label: 'Order ID', value: 'NY' },
    { label: 'Order Name', value: 'RM' },
    { label: 'Order Date', value: 'LDN' },
    { label: 'Customer Name', value: 'IST' },
    { label: 'Customer Email', value: 'PRS' }
];

const Order = () => {
    const [selectedOption, setSelectedOption] = useState(ourFields[0]);

    const handleChange = (option) => {
        setSelectedOption(option);
    };
    return (
        <div>
            <form action="">
                <div>
                    {printavoOrderFields.map((eachField) => {
                        return (
                            <div className="printavo-mapping-container" key={eachField}>
                                <div>
                                    {eachField}
                                </div>
                                <div>
                                    <Dropdown options={ourFields} onChange={handleChange} value={selectedOption} placeholder="Select option" />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </form>
        </div>
    )
}

export default Order