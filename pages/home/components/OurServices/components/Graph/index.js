import styles from "./Graph.module.css";

export default function Graph(props) {
  const { data } = props;

  const returnBackgroundColor = (title) => {
    switch (title) {
      case "Percentage 1":
        return "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(88,254,238,1) 100%, rgba(0,212,255,1) 100%)";
      case "Percentage 2":
        return "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(116,192,247,1) 100%, rgba(0,212,255,1) 100%)";
      case "Percentage 3":
        return "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(250,188,175,1) 100%, rgba(0,212,255,1) 100%)";
      case "Percentage 4":
        return "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(249,170,218,1) 100%, rgba(0,212,255,1) 100%)";
      default:
        return "black";
    }
  };

  const returnBorderColor = (title) => {
    switch (title) {
      case "Percentage 1":
        return "#58FEEE";
      case "Percentage 2":
        return "#74C0F7";
      case "Percentage 3":
        return "#FABCAF";
      case "Percentage 4":
        return "#F9AADA";
      default:
        return "black";
    }
  };
  return (
    <div>
      <div className={styles.graphTitle}>{data?.graphText}</div>
      <div className={styles.graphContent}>
        {data?.stats?.map((stat, i) => {
          return (
            <div>
              <div className={styles.barHeader}>
                <div className={styles.barTitle}>
                  {stat?.title.toUpperCase()}
                </div>
                <div className={styles.barAmount}>{`${
                  stat?.amount / 10
                }%`}</div>
              </div>
              <div key={`stat-${i}`} className={styles.progressBar}>
                <div
                  style={{
                    width: `${stat?.amount / 10}%`,
                    background: returnBackgroundColor(stat?.title),
                    height: "5px",
                    position: "relative",
                  }}
                >
                  <div
                    className={styles.outerCircle}
                    style={{ borderColor: returnBorderColor(stat?.title) }}
                  >
                    <div
                      className={styles.innerCircle}
                      style={{ borderColor: returnBorderColor(stat?.title) }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
