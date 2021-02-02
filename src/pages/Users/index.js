import "./styles.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsFillPersonFill } from "react-icons/bs";

function Users() {
  return (
    <div className="Users">
      <section class="table-container">
        <table>
          <thead>
            <tr>
              <th>
                <span className="flex items-center font-normal">
                  Name
                  <span>
                    <RiArrowDropDownLine className="text-black h-5 w-5" />
                  </span>
                </span>
              </th>
              <th>
                <span className="flex items-center font-normal">
                  Joined
                  <span>
                    <RiArrowDropDownLine className="text-black h-5 w-5" />
                  </span>
                </span>
              </th>
              <th>
                <span className="flex items-center font-normal">
                  Source
                  <span>
                    <RiArrowDropDownLine className="text-black h-5 w-5" />
                  </span>
                </span>
              </th>
              <th>
                <span className="flex items-center font-normal">
                  Status
                  <span>
                    <RiArrowDropDownLine className="text-black h-5 w-5" />
                  </span>
                </span>
              </th>
              <th>
                <span className="flex items-center font-normal">
                  LVL
                  <span>
                    <RiArrowDropDownLine className="text-black h-5 w-5" />
                  </span>
                </span>
              </th>
              <th>
                <span className="flex items-center font-normal">
                  Points
                  <span>
                    <RiArrowDropDownLine className="text-black h-5 w-5" />
                  </span>
                </span>
              </th>
              <th>
                <span className="flex items-center font-normal">
                  Received
                  <span>
                    <RiArrowDropDownLine className="text-black h-5 w-5" />
                  </span>
                </span>
              </th>
              <th>
                <span className="flex items-center font-normal">
                  Socials
                  <span>
                    <RiArrowDropDownLine className="text-black h-5 w-5" />
                  </span>
                </span>
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="flex">
                <div className="flex table-pictureFrame">
                  <BsFillPersonFill />
                </div>
                <div className="flex justify-start items-start flex-col person">
                  <span>Jude Okonkwo</span>
                  <span>jude@gmail.com</span>
                </div>
              </td>
              <td>22 Jun 2020</td>
              <td>Twitter</td>
              <td>
                <button className="basic text-white px-6 py-0.5">Basic</button>
              </td>
              <td>0</td>
              <td>1500</td>
              <td>34</td>
              <td>
                <div className="flex items-center">
                  <span className="pr-3">F</span>
                  <span className="pr-3">T</span>
                  <span className="pr-3">I</span>
                </div>
              </td>
            </tr>

            <tr>
              <td className="flex">
                <div className="flex table-pictureFrame">
                  <BsFillPersonFill />
                </div>
                <div className="flex justify-start items-start flex-col person">
                  <span>Jude Okonkwo</span>
                  <span>jude@gmail.com</span>
                </div>
              </td>
              <td>22 Jun 2020</td>
              <td>Twitter</td>
              <td>
                <button className="completed text-white px-6 py-0.5">Basic</button>
              </td>
              <td>0</td>
              <td>1500</td>
              <td>34</td>
              <td>
                <div className="flex items-center">
                  <span className="pr-3">F</span>
                  <span className="pr-3">T</span>
                  <span className="pr-3">I</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Users;
