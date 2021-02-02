import "./styles.css";
import { FiMoreVertical } from "react-icons/fi";
import { AiFillApple } from "react-icons/ai";

const tableDatas = [
  {
    company: "Apple",
    logo: <AiFillApple />,
    endDate: "22 Jun 2020",
    matched: 23,
    clamied: 23,
    status: <button className="inactive">{"Inactive"}</button>,
    empty1: <button className="details">{"Details"}</button>,
    empty2: <button>{<FiMoreVertical />}</button>,
  },
  {
    company: "Apple",
    logo: <AiFillApple />,
    endDate: "22 Jun 2020",
    matched: 23,
    clamied: 23,
    status: <button className="inactive">{"Inactive"}</button>,
    empty1: <button className="details">{"Details"}</button>,
    empty2: <button>{<FiMoreVertical />}</button>,
  },
];

function Campaign1() {
  return (
    <div className="Campaign1">
      <section class="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>End Date</th>
              <th>Matched</th>
              <th>Clamined</th>
              <th>Status</th>
              <th></th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {tableDatas.map(
              ({
                company,
                logo,
                endDate,
                matched,
                clamied,
                status,
                empty1,
                empty2,
              }) => (
                <tr>
                  <td className="flex">
                    <div className="flex pictureFrame">{logo}</div>
                    <span>{company}</span>
                  </td>
                  <td>{endDate}</td>
                  <td>{matched}</td>
                  <td>{clamied}</td>
                  <td>{status}</td>
                  <td>{empty1}</td>
                  <td>{empty2}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Campaign1;
