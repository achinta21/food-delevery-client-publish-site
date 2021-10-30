import React from 'react';
import { useParams } from 'react-router';

const MyOrder = () => {
    const {servieId}=useParams();
    return (
        <div>
            <h1>my order: {servieId}</h1>
        </div>
    );
};

export default MyOrder;