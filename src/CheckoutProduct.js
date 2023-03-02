import './CheckoutProduct.css';
import { useState } from 'react';
import axios from 'axios';

export default function CheckoutProduct({ catsData }) {
    let age = catsData.age;
    let breed = catsData.breed;

    const baseURL = 'https://run.mocky.io/v3/3194c56e-3011-40b9-a9a3-33270087b1e7';

    const [shipped, setShipped] = useState('');
    const [insuranceProducts, setInsuranceProducts] = useState([]);
    const [name, setName] = useState('');
    const [insurance, setInsurance] = useState('');

    const handleNameChange = (e)  =>  {
        setName(e.target.value);
    }

    const selectShipped = (e) => {
        setShipped(e.target.value);
    }

    const lookForProducts = () => {
        axios.post(baseURL, {name, age, breed})
            .then((res) => {
                setInsuranceProducts(res.data);
            });
    }   

    const selectInsurance = (e) => {
        setInsurance(e.target.value);
    }

    return (
        <>
            <div className="checkout-product">
                <form>
                    <div>
                        <label><strong>Your cats name </strong></label>
                        <input type='text' onChange={handleNameChange} value={name} />
                    </div>
                    <br />
                    <label><strong>Has your cat been shipped ? </strong></label>
                    <div>
                        <input type='radio' onChange={selectShipped} value='Yes' checked={shipped === "Yes"} />
                        <label>Yes</label>
                        <input type='radio' onChange={selectShipped} value='No' checked={shipped === "No"} />
                        <label>No</label>
                    </div>
                </form>
            </div>
            <div className='shipped'>
                {shipped === 'Yes' && (
                    <button onClick={lookForProducts}>
                        Look for Products
                    </button>
                )}
                {shipped === 'No' && 
                    <h3>
                    Sorry, unfortunately we cannot offer any product for a cat that has not been shipped
                </h3>}
            </div>
            <div className="card-container">
                { insuranceProducts && insuranceProducts.map((product) => (
                <div className="card" key={product.id}>
                    <h3>{product.name}</h3>
                    { product.coverages.map((item) => (
                        <ul key={item.id}>
                            <li>{item}</li>
                        </ul>
                    ))}
                    <div>
                        <input type='radio' onChange={selectInsurance} value='Yes' checked={insurance === "Yes"} />
                        <label>Select</label>
                    </div>
                </div>
                ))}
            </div>
        </>
    )
}