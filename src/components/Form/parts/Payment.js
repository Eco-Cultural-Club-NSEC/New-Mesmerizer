import React, {useState} from 'react';
import { singleRegistration } from "../../../utils/regFunctions";

const Payment = (props) => {

  const [ss, setSS] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await singleRegistration(props.info, ss);
    console.log(data);
  };
  
  const handleSS = (e) => {
    setSS(e.target.files[0]);
  };
  return (
    <div className='text-white'>
      <label className="flex items-start flex-col">
        Upload Image:
        <input
          type="file"
          className="text-white"
          name="email"
          onChange={handleSS}
        />
      </label>
      <button onClick={handleSubmit}></button>
    </div>
  )
}

export default Payment
