import { BaseProps } from "../types";
import { FormEvent, useRef } from "react";
import { User } from "../data/data";

type UserFormProps = BaseProps & {
  onSubmitUser: (user: User) => void;
};

export default function UserForm({ title, onSubmitUser }: UserFormProps) {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const activeRef = useRef<HTMLInputElement>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Use optional chaining to safely access .value and .checked
    const name = nameRef.current?.value || '';
    const email = emailRef.current?.value || '';
    const active = activeRef.current?.checked || false;

    const newUser: User = {
      name,
      email,
      isActive: active,
    };

    onSubmitUser(newUser);
  };

  return (
    <>
      <h2>{title}</h2>
      <form onSubmit={onSubmit}>
        First Name: <input ref={nameRef} name="name" />
        Email: <input ref={emailRef} name="email" />
        Active: <input ref={activeRef} type="checkbox" name="isActive" />
        <button type="submit">Add User</button>
      </form>
    </>
  );
}
