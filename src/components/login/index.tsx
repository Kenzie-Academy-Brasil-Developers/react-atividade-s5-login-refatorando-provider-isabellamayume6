import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../Providers/Auth";
import "./styles.css";
interface UserData {
  email: string;
  password: string;
}

const Login = () => {
  const { signIn } = useAuth();
  const schema = yup.object().shape({
    email: yup.string().required("email obrigatório"),
    password: yup.string().required("Senha obrigatória"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: UserData) => {
    signIn(data);
  };

  return (
    <div className="box">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="E-mail" {...register("email")} />
        <span>{errors.email?.message}</span>
        <input placeholder="Senha" type="password" {...register("password")} />
        <span>{errors.password?.message}</span>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};
export default Login;
