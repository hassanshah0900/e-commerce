import Button from "./Button";
import Input from "./Input";

export default function UpdatePasswordForm() {
  return (
    <section className="bg-white rounded-lg p-6 pb-10 text-body-dark shadow-xl">
      <h2 className="text-xl text-body-dark font-semibold mb-4">
        Profile Info
      </h2>
      <form className="space-y-4" action="">
        <Input label="Old Password" />
        <Input label="New Password" />
        <Input label="Confirm Password" />
        <Button variant="button" color="green">
          Save
        </Button>
      </form>
    </section>
  );
}
