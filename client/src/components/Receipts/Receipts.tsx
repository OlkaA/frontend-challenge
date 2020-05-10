import React, { FunctionComponent } from 'react';

interface IReceiptsProps {
  userId: string;
  fetchExpense(): void;
}

const Receipts: FunctionComponent<IReceiptsProps> = ({
  userId,
  fetchExpense,
}) => {
  const addReceipt = async (event: any) => {
    if (userId) {
      let receipt = new FormData();
      receipt.append('receipt', event.target.files[0]);
      const response = await fetch(
        `/expenses/${userId}/receipts`,
        {
          method: 'POST',
          body: receipt,
        }
      );
      fetchExpense();
      return await response.json();
    }
  };

  return (
    <label className='receipt-label'>
      <input type='file' name='file' title=' ' onChange={addReceipt} />
      Add receipt
    </label>
  );
};

export default Receipts;
