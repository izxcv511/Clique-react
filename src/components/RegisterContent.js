import RegisterForm from "./RegisterForm";

export default function RegisterContent() {
  return (
    <main className="register">
      <div className="container">
        <div className="register__content">
          <h1 className="register__title">Register</h1>
          <RegisterForm />
        </div>
      </div>
    </main>
  );
}
