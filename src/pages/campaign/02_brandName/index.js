import "./styles.css";
import Input from "../../../components/input";

function Campaign2() {
  return (
    <section className="Campaign2 flex items-center justify-center">
      <div className="brand w-full">
        <small>Question 1</small>
        <h2 className='text-justify  text-3xl font-medium mb-14'>Brand Name & Category</h2>

        <from>
          <div className="form-sub text-justify">
            <label htmlFor="brand" className="text-justify">
              Name of brand
            </label>
            <Input
              htmlFor="brand"
              placeHolder="Select Brand"
              className="my-1"
            />
          </div>

          <div className="form-sub text-justify">
            <label htmlFor="Name" className="text-justify">
              Campaign Name
            </label>
            <Input
              htmlFor="Name"
              placeHolder="Select Brand"
              className="my-1"
              noIcon
            />
          </div>

          <div className="form-sub text-justify">
            <label htmlFor="Category" className="text-justify">
              Category
            </label>
            <Input
              htmlFor="Category"
              placeHolder="Select Brand"
              className="my-1"
            />
          </div>

          <button className="text-black bg-yellow-500 w-full rounded text-sm py-2 mt-6 hover:bg-yellow-600">
            Next
          </button>
        </from>
      </div>
    </section>
  );
}

export default Campaign2;
