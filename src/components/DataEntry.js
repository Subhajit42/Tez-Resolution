import React, { useState } from 'react';
import { TezosToolkit } from '@taquito/taquito';
// import { InMemorySigner } from '@taquito/signer';

const MyComponent = () => {
  const [inputValue, setInputValue] = useState('');
  const [isClicked, setIsClicked] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    
  };

  
  
  const handleContractInteraction = async () => {
    setIsClicked(true);
    try {
      const Tezos = new TezosToolkit('https://ghostet.smartpy.io');
      // const signer = InMemorySigner.fromSecretKey('');
      // Tezos.setProvider({ signer });

      const contract = await Tezos.contract.at('KT1NAwL24CArx8XVhNZcCHhkQTwArBvhFHQK');
      const operation = await contract.methods.add_string(inputValue).send();

      // Wait for the operation to be included in a block
      await operation.confirmation();

      console.log('Contract interaction successful');
    } catch (error) {
      console.error('Contract interaction failed', error);
    }
  };

  return (
    <div className='container my-5'>
      
      <input type="text" value={inputValue} style={{height:"90px",width:"100%"}} onChange={handleInputChange} />
      <br></br>
      <br></br>
      <button className="btn btn-success" onClick={handleContractInteraction}> DEPLOY </button>
      {isClicked && <div style={{color:"whitesmoke"}}>The Resolution has been deployed</div>}  
    </div>
  );
};

export default MyComponent;
