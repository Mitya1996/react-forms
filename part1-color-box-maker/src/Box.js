import CloseIcon from "@material-ui/icons/Close";
import "./Box.css";

function Box({ id, width, height, backgroundColor, deleteBox }) {
  return (
    <>
      <CloseIcon onClick={() => deleteBox(id)} />
      <div
        class="Box"
        style={{
          width: `${width}px`,
          height: `${height}px`,
          backgroundColor: backgroundColor,
        }}
      ></div>
    </>
  );
}

export default Box;
