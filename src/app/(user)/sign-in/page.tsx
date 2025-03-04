import { isRegistered } from "@/actions/user";
import { redirect } from "next/navigation";

const Login = async () => {
  await isRegistered();
  redirect("/analytics");
};

export default Login;
