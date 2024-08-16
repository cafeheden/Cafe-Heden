import React, { useState } from 'react';
import BillingCustomer from '../../components/Admin_Comp/Billing/BillingCustomer';
import BillingMenu from '../../components/Admin_Comp/Billing/BillingMenu';
import BillingCart from '../../components/Admin_Comp/Billing/BillingCart';

const Billing = () => {
  const [customerName, setCustomerName] = useState('');
  const [customerNumber, setCustomerNumber] = useState('');

  return (
    <div className='flex flex-row px-8 gap-8'>
      <div className='w-3/5'>
        <BillingCustomer 
          customerName={customerName}
          setCustomerName={setCustomerName}
          customerNumber={customerNumber}
          setCustomerNumber={setCustomerNumber}
        />
        <BillingMenu />
      </div>
      <div className="w-1/5">
        <BillingCart 
          customerName={customerName}
          customerNumber={customerNumber}
        />
      </div>
    </div>
  );
};

export default Billing;
