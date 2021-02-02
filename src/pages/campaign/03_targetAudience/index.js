import "./styles.css";
import Input from "../../../components/input";
import { AiOutlineSearch } from "react-icons/ai";

function TargetAud() {
  return (
    <section className="TargetAud flex items-center justify-center">
      <div className="targetAud w-full">
        <small>Question 6</small>
        <h2 className="text-center  text-2xl font-medium mb-9">
          Target Audience
        </h2>

        <from>
          <div className="grid grid-cols-2 gap-x-3 ">
            <div className="form-sub text-justify">
              <label htmlFor="brand" className="text-justify">
                Category
              </label>
              <Input
                htmlFor="brand"
                placeHolder="Select Brand"
                className="my-1"
              />
            </div>
            <div className="form-sub text-justify">
              <label htmlFor="brand" className="text-justify">
                State
              </label>
              <Input
                htmlFor="brand"
                placeHolder="Select Brand"
                className="my-1"
              />
            </div>
          </div>

          <div className="form-sub text-justify">
            <label htmlFor="Education" className="text-justify">
              Gender
            </label>
            <div className="grid  gap-x-3 grid-cols-3 " id="gender">
              <button>Male</button>
              <button>Female</button>
              <button>Others</button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-3 ">
            <div className="form-sub text-justify">
              <label htmlFor="From" className="text-justify">
                From
              </label>
              <Input
                htmlFor="From"
                placeHolder="Enter age"
                className="my-1"
                noIcon
              />
            </div>
            <div className="form-sub text-justify">
              <label htmlFor="to" className="text-justify">
                TO
              </label>
              <Input
                htmlFor="to"
                placeHolder="Enter age"
                className="my-1"
                noIcon
              />
            </div>
          </div>

          <div className="form-sub text-justify">
            <label htmlFor="Education" className="text-justify">
              Education
            </label>
            <Input
              htmlFor="Education"
              placeHolder="Select Brand"
              className="my-1"
              noIcon
            />
          </div>

          <div className="form-sub text-justify">
            <label htmlFor="Relationship" className="text-justify">
              Relationship
            </label>
            <Input
              htmlFor="Relationship"
              placeHolder="Select Brand"
              className="my-1"
            />
          </div>

          <div className="form-sub text-justify">
            <label htmlFor="Add More Description" className="text-justify">
              Add More Description
            </label>
            <div className="flex items-center addMoreDescription">
              <AiOutlineSearch />
              <Input
                htmlFor="Add More Description"
                placeHolder="Select Brand"
                className="my-1"
                noIcon
              />
            </div>
          </div>

          <div className="form-sub text-justify">
            <label htmlFor="Where they Shop" className="text-justify">
              Where they Shop
            </label>
            <Input
              htmlFor="Where they Shop"
              placeHolder="Select Brand"
              className="my-1"
            />
          </div>

          <button className="text-black w-full rounded text-sm py-2 mt-6 hover:bg-yellow-600 bg-yellow-500">
            Next
          </button>
        </from>
      </div>
    </section>
  );
}

export default TargetAud;
