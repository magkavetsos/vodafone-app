import styles from "./OurServices.module.css";
import Graph from "./components/Graph/index.js";
import Form from "./components/Form/index.js";

export default function OurServices(props) {
  const { data } = props;
  return (
    <div>
      <div className={styles.title}>{data?.title || ""}</div>
      <div className={styles.ourServicesContainer}>
        <Graph data={data} />
        <Form data={data} />
      </div>
    </div>
  );
}
