import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Create({ auth }) {
  const { data, setData, post, processing ,errors, reser } = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const onSumbit = (e) => {
    e.preventDefault();

    post(route("user.store"));
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <div className="flex justify-between items-center">
          <h2
            className="font-semibold text-xl text-gray-800
            dark:text-gray-200 leading-tight"
          >
            Create new user
          </h2>
        </div>
      }
    >
      <Head title="Users" />
      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
            <form
              onSubmit={onSumbit}
              className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg"
            >
              <div className="mt-4">
                <InputLabel htmlFor="user_name" value="User Name" />
                <TextInput
                  id="user_name"
                  type="text"
                  name="name"
                  value={data.name}
                  className="mt-1 block w-full"
                  isFocused={true}
                  onChange={(e) => setData("name", e.target.value)}
                />
                <InputError message={errors.name} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel htmlFor="user_email" value="User Email" />
                <TextInput
                  id="user_email"
                  type="text"
                  name="email"
                  value={data.email}
                  className="mt-1 block w-full"
                  onChange={(e) => setData("email", e.target.value)}
                />
                <InputError message={errors.email} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel htmlFor="user_password" value="User Password" />
                <TextInput
                  id="user_password"
                  type="text"
                  name="password"
                  value={data.password}
                  className="mt-1 block w-full"
                  onChange={(e) => setData("password", e.target.value)}
                />
                <InputError message={errors.password} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel htmlFor="user_password_confirmation" value="Password Confirmation"/>
                <TextInput
                  id="user_password_confirmation"
                  type="text"
                  name="password_confirmation"
                  value={data.password_confirmation}
                  className="mt-1 block w-full"
                  onChange={(e) => setData("password_confirmation", e.target.value)}
                />
                <InputError message={errors.password_confirmation} className="mt-2" />
              </div>
              <div className="mt-4 text-right">
                <Link
                  href={route("user.index")}
                  className="py-1 px-3 text-gray-500 rounded transition-all hover:text-white mr-2 "
                >
                  Cancel
                </Link>
                <button className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
