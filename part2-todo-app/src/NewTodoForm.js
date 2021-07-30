import { useForm } from "react-hook-form";
import { v4 as uuid } from "uuid";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, TextField } from "@material-ui/core";
import "./NewTodoForm.css";

const schema = yup.object().shape({
  task: yup.string().max(50).required(),
});

function NewTodoForm({ createTodo }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => createTodo({ ...data, id: uuid() });

  return (
    <form className="Form" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        {...register("task")}
        helperText={errors.task?.message}
        error={errors.task}
        variant="outlined"
        label="Task"
      />

      <div style={{ margin: "10px 0 0 20px" }}>
        <Button type="submit" variant="contained">
          Add Todo
        </Button>
      </div>
    </form>
  );
}

export default NewTodoForm;
