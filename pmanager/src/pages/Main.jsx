import axios from "axios";
import { useEffect, useState } from "react";
import ManagerForm from "../components/ManagerForm";
import ManagerList from "../components/ManagerList";

function Main() {
  // const [title, setTitle] = useState("");
  const [managers, setManagers] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get("http://localhost:5001/api/managers", {signal: controller.signal})
      .then((res) => {
        setManagers(res.data);
        setLoaded(true)
      })
      .catch((err) => console.log(err));
    return () => controller.abort();
  }, [loaded]);

  const reversedManagers = [...managers].reverse();

  return (
    <div>
      <h1>Main</h1>
      {/* {title && <h2>Title: {title} </h2>} */}
      <ManagerForm setLoaded={setLoaded}/>
      {loaded && <ManagerList managers={reversedManagers} setLoaded={setLoaded}/>}
    </div>
  );
}

export default Main;
