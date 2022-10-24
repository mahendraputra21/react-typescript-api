import React, { useState, ChangeEvent } from "react";
import TutorialDataService from "../services/TutorialService";
import ITutorialData from '../types/Tutorial';

const AddTutorial: React.FC = () => {
  const initialTutorialState = {
    id: 0,
    name: "",
    description: "",
    price: 0
  };
  const [tutorial, setTutorial] = useState<ITutorialData>(initialTutorialState);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setTutorial({ ...tutorial, [name]: value });
  };

  const saveTutorial = () => {
    var data = {
      id: tutorial.id,
      name: tutorial.name,
      description: tutorial.description,
      price: tutorial.price
    };

    TutorialDataService.create(data)
      .then((response: any) => {
        setTutorial({
          id: response.data.id,
          name: response.data.name,
          description: response.data.description,
          price: response.data.price
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  const newTutorial = () => {
    setTutorial(initialTutorialState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newTutorial}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="name">Product Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              required
              value={tutorial.name}
              onChange={handleInputChange}
              name="name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Product Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              required
              value={tutorial.description}
              onChange={handleInputChange}
              name="description"
            />
          </div>

          <div className="form-group">
            <label htmlFor="price">Product Price</label>
            <input
              type="text"
              className="form-control"
              id="price"
              required
              value={tutorial.price}
              onChange={handleInputChange}
              name="price"
            />
          </div>

          <button onClick={saveTutorial} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddTutorial;
