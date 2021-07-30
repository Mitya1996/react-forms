// import React, { useState } from "react";

// function NewBoxForm({ createBox }) {
//   const [formData, setFormData] = useState({
//     height: "",
//     width: "",
//     backgroundColor: "",
//   });

//   const handleChange = (evt) => {
//     const { name, value } = evt.target;
//     setFormData((formData) => ({
//       ...formData,
//       [name]: value,
//     }));
//   };

//   const gatherInput = (evt) => {
//     evt.preventDefault();
//     createBox({ ...formData, id: uuid() });
//     setFormData({ height: "", width: "", backgroundColor: "" });
//   };

//   return (
//     <div>
//       <form onSubmit={gatherInput}>
//         <div>
//           <label htmlFor="height">Height</label>
//           <input
//             onChange={handleChange}
//             type="text"
//             name="height"
//             value={formData.height}
//             id="height"
//           />
//         </div>
//         <div>
//           <label htmlFor="width">Width</label>
//           <input
//             onChange={handleChange}
//             type="text"
//             name="width"
//             id="width"
//             value={formData.width}
//           />
//         </div>
//         <div>
//           <label htmlFor="backgroundColor">Background Color</label>
//           <input
//             onChange={handleChange}
//             type="text"
//             name="backgroundColor"
//             value={formData.backgroundColor}
//             id="backgroundColor"
//           />
//         </div>
//         <button id="newBoxButton">Add a new box!</button>
//       </form>
//     </div>
//   );
// }

import { useForm } from "react-hook-form";
import { v4 as uuid } from "uuid";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, TextField } from "@material-ui/core";
import "./NewBoxForm.css";

const schema = yup.object().shape({
  width: yup.number().positive().integer().min(1).max(300).required(),
  height: yup.number().positive().integer().min(1).max(300).required(),
  backgroundColor: yup.string().max(20).required(),
});

function NewBoxForm({ createBox }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => createBox({ ...data, id: uuid() });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        {...register("width")}
        helperText={errors.width?.message}
        error={errors.width}
        variant="outlined"
        label="Width"
      />

      <TextField
        {...register("height")}
        helperText={errors.height?.message}
        error={errors.height}
        variant="outlined"
        label="Height"
      />

      <TextField
        {...register("backgroundColor")}
        helperText={errors.backgroundColor?.message}
        error={errors.backgroundColor}
        variant="outlined"
        label="Color"
      />

      <div style={{ margin: "10px 0 0 20px" }}>
        <Button type="submit" variant="contained">
          Add Box
        </Button>
      </div>
    </form>
  );
}

export default NewBoxForm;
