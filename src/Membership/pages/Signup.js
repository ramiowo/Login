import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValed },
  } = useForm();

  const nav = useNavigate();

  const singupSubmit = (data) => {
    alert(`${data.username}님 회원가입이 완료되었습니다.`);
    nav("/login");
  };
  return (
    <form onSubmit={handleSubmit(singupSubmit)}>
      <h2>Login</h2>
      <input
        {...register("userid", {
          required: "아이디입력은 필수 입니다.",
          minLength: {
            value: 3,
            massage: "아이디는 세자리 이상 입력하세요.",
          },
        })}
        type="text"
        placeholder="아이디"
      />
      <p>{errors?.userid?.message}</p>

      <input
        {...register("password", {
          required: "비밀번호 입력은 필수 입니다.",
          pattern: {
            value: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/,
            message: "영문, 숫자, 특수기호를 조합하여 8자리 이상 입력하세요.",
          },
        })}
        type="password"
        placeholder="비밀번호"
      />
      <p>{errors.password.message}</p>

      <input
        {...register("username", {
          required: "이름 입력은 필수 입니다.",
        })}
        type="text"
        placeholder="이름"
      />
      <p>{errors.username.message}</p>

      <input
        {...register("useremail", {
          required: true,
        })}
        type="text"
        placeholder="이메일"
      />

      <Button>회원가입</Button>
    </form>
  );
};

export default Signup;
