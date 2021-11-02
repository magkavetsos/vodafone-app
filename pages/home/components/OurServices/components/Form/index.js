import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "./Form.module.css";
import { useForm } from "react-hook-form";

export default function Form(props) {
  const { data } = props;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    alert("form submitted!");
    reset();
  };
  return (
    <div>
      <div className={styles.formTitle}>{data?.formText}</div>
      <div className={styles.formSubtitle}>
        {data?.formSubtitle ||
          "We work with ecosystem leaders, corporations and startups worldwide. How can we help you?"}
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.form}
        novalidate
      >
        <div>
          <input
            placeholder={data?.formLabels[0]}
            {...register("phone", {
              required: "Phone is required",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Please enter a valid phone number",
              },
            })}
          />
          {errors.phone?.message && (
            <span className={styles.error}>{errors.phone?.message}</span>
          )}
        </div>
        <div>
          <input
            placeholder={data?.formLabels[1]}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Please enter a valid email",
              },
            })}
          />
          {errors.email?.message && (
            <span className={styles.error}>{errors.email?.message}</span>
          )}
        </div>
        <div>
          <input
            placeholder={data?.formLabels[2]}
            type="password"
            {...register("password", { required: true })}
            {...register("password", {
              required: "Password is required",
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^])[A-Za-z\d@$!%*?&#^]{8,}$/,
                message:
                  "Password should include at least: 8 digits, a number, a capital letter, a symbol, and a low case letter",
              },
            })}
          />
          {errors.password?.message && (
            <span className={styles.error}>{errors.password?.message}</span>
          )}
        </div>
        <input
          type="submit"
          className={styles.button}
          value={data?.buttonText}
        />
      </form>
    </div>
  );
}