import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { addEvent } from '../../Redux/actions/event';
import "./additEvent.css"

const AddEvent = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    
    const submitEvent = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      // eslint-disable-next-line no-console
      console.log({
        Name: data.get("Name"),
        Description: data.get("Description"),
        Category: data.get("Category"),
        Location: data.get("Location"),
        isFree: data.get("isFree"),
        Number: data.get("Number"),
      });
      dispatch(
        addEvent(
          {
            Name: data.get("Name"),
            Description: data.get("Description"),
            Category: data.get("Category"),
            Location: data.get("Location"),
            isFree: data.get("isFree"),
            Number: data.get("Number"),
            Image:data.get("Image"),
            Price:data.get("Price")
          },
          history
        )
      );
    };
    const [price, setPrice] = useState(false)

    const handlePrice=(e)=>{
      let { value } = e.target;
       setPrice(value);
    }
    console.log(price)
    return (
      <div className="addit">
        <form action="#" onSubmit={submitEvent}>
          <div className="formit">
            <label>
              EVENT NAME
              <em>&#x2a;</em>
            </label>
            <input id="customerName" required="" type="text" name="Name" />
            <label>
              LOCATION
              <em>&#x2a;</em>
            </label>
            <input id="customerEmail" name="Location" required="" type="text" />
            <label>
              Category
              <em>&#x2a;</em>
            </label>
            <input id="customerEmail" name="Category" required="" type="text" />
            <label>PHONE</label>
            <input
              id="customerPhone"
              name="Number"
              type="tel"
            />
            <select name="isFree" id="free" onChange={handlePrice}>
              <option value={false}>Free</option>
              <option value={true}>price</option>
            </select>
            {price ? 
            <div>
              <label>
                PRICE<em>&#x2a;</em>
              </label> <input id="orderNumber" name="Price" type="text" /></div> : null}
            <label>
              IMAGE<em>&#x2a;</em>
            </label>
            <input id="orderNumber" name="Image" type="text" />
            <label>
              Description
              <em>&#x2a;</em>
            </label>
            <textarea
              id="customerNote"
              name="Description"
              required=""
              rows="4"
            ></textarea>
            <div id="submitbtn">
              <Link to="/dashboard">
                <button className="closes">CLOSE</button>
              </Link>
              <button className="submitbtn">SUBMIT</button>
            </div>
          </div>
        </form>
      </div>
    );
}

export default AddEvent 
