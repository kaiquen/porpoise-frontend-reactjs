import { useState } from "react";
import styles from "./styles.module.scss";

interface IProps {
  size: string;
}

export const Checkbox = ({size}:IProps) => {
  const [checked, setChecked] = useState(false);

  const handleCheckeboxChange = () => {
    setChecked(!checked);
  };

  return (
    <div className={styles.container} onClick={handleCheckeboxChange}>
      <input
        type="checkbox"
        onChange={handleCheckeboxChange}
        checked={checked}
      />
      <label
        style={
          checked && true
            ? { backgroundColor:'#999', color:'#fff'}
            : { backgroundColor: '#fff' }
        }
      >
        {size}
      </label>
    </div>
  );
};
