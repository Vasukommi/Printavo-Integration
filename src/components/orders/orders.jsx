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
    { name: 'Order ID', code: 'NY' },
    { name: 'Order Name', code: 'RM' },
    { name: 'Order Date', code: 'LDN' },
    { name: 'Customer Name', code: 'IST' },
    { name: 'Customer Email', code: 'PRS' }
];

const Order = () => {
    const [selectedCity, setSelectedCity] = useState(null);
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
                                    <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={ourFields} optionLabel="name"
                                        placeholder="Select a Field" className="w-full md:w-14rem" />
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