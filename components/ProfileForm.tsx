import Input from "./Input";
import Button from "./Button";

export default function ProfileForm() {
  return (
    <section className="bg-white rounded-lg p-6 pb-10 text-body-dark shadow-xl">
      <h2 className="text-xl text-body-dark font-semibold mb-4">
        Profile Info
      </h2>
      <form className="grid grid-cols-2 gap-4" action="">
        <Input label="First Name" />
        <Input label="Last Name" />
        <Input label="Age" />
        <Input type="date" label="Date of Birth" />
        <Input type="email" label="Email" />
        <Input label="Phone" />
        <div className="col-span-2">
          <p className="mb-1">Gender</p>
          <div className="flex gap-4 items-end">
            <Input type="radio" name="gender" label="Male" />
            <Input type="radio" name="gender" label="Female" />
            <Input type="radio" name="gender" label="Other" />
          </div>
        </div>
        <Button className=" " color="green">
          Save
        </Button>
      </form>
    </section>
  );
}
