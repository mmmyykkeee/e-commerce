import React from "react";

function WishedProducts({ img, ProductName, Price, Quantity, Total }) {
  return (
    <div>
      <td className="shoping__cart__item">
        <img src={img} alt="" />
        <h5>{ProductName}</h5>
      </td>
      <td className="shoping__cart__price">Kshs. {Price}</td>
      <td className="shoping__cart__quantity">
        <div className="quantity">
          <div className="pro-qty">
            <input type="text" value={Quantity} />
          </div>
        </div>
      </td>
      <td className="shoping__cart__total">Kshs. {Total}</td>
      <td className="shoping__cart__item__close">
        <span className="icon_close"></span>
      </td>
    </div>
  );
}

export default WishedProducts;
