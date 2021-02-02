import "./styles.css";
import Campaign1 from "./01";
import Campaign2 from "./02_brandName";
import TargetAud from "./03_targetAudience";

function Campaign() {
  return (
    <div className="Campaign">
      <h1>Campaign</h1>
      <Campaign1 />
      <div className="space-out"></div>

      <Campaign2 />

      <div className="space-out"></div>

      <TargetAud />

      <div className="space-out"></div>
    </div>
  );
}

export default Campaign;
