const Form = ({ setFormData, handleFormSubmit }) => {
    return (
      <div className="form-wrapperr">
        <h2 className="form-titler">Player Details</h2>
        <form onSubmit={handleFormSubmit} className="form-containerr">
          <input
            type="text"
            placeholder="Your Name"
            required
            className="inputr"
            onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            className="inputr"
            onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
          />
          <select
            required
            className="inputr"
            onChange={(e) => setFormData((prev) => ({ ...prev, sex: e.target.value }))}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <input
            type="number"
            placeholder="Enter your Number"
            required
            className="inputr"
            onChange={(e) => setFormData((prev) => ({ ...prev, number: e.target.value }))}
          />
          <input
            type="number"
            placeholder="Your Age"
            required
            className="inputr"
            onChange={(e) => setFormData((prev) => ({ ...prev, age: e.target.value }))}
          />
          <button type="submit" className="submit-buttonr">
            Start Playing
          </button>
        </form>
      </div>
    );
  };
export default Form;