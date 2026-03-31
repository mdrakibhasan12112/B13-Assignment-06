import React from 'react';
import cardImg from '../../assets/shopping-cart.png'
import { toast } from 'react-toastify';

const Card = ({ cards, setCards }) => {
  const totalPrice = cards.reduce((sum, item) => sum + item.price, 0);

  const handleProceedAllCard = () => {
   setCards([]);
     toast.error('all item remove successfull');
   
 };
 
 const handleSingleBtnDelete = (item) => {
  const filteredArray = cards.filter(c => c.id !== item.id)
  setCards(filteredArray)
     toast.error("item remove successfull")
 }

  return (
    <div className="bg-base-200 w-[86%] mx-auto mt-10 shadow-lg">
      <div>
        <h3 className="text-3xl font-semibold mb-5 p-4">Your Card</h3>

        {cards.length === 0 ? (
          <div className=" flex flex-col items-center content-center text-center py-10">
            <img className="w-[80px] mb-4" src={cardImg} alt="" />
            <p>Your card is Empty</p>
          </div>
        ) : (
          <>
            {cards.map(item => (
              <div className="shadow-sm py-10 p-5 flex justify-between">
                <div className="flex gap-5">
                  <img className="w-[30px] h-[30px]" src={item.icon} alt="" />
                  <div>
                    <h4 className="text-xl font-semibold inline-block">
                      {item.name}
                    </h4>
                    <p className="font-bold">${item.price}</p>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => handleSingleBtnDelete(item)}
                    className=" text-red-400"
                  >
                    remove
                  </button>
                </div>
              </div>
            ))}

            <div className="flex justify-between shadow-sm items-center py-10 p-5">
              <p>Total</p>
              <p className="text-xl font-semibold">${totalPrice}</p>
            </div>

            <button
              onClick={handleProceedAllCard}
              className="btn w-full bg-violet-600 mt-5 rounded-lg text-xl text-white"
            >
              Proceed to Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
