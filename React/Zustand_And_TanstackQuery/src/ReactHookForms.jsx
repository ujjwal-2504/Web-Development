import { useForm } from "react-hook-form";

const ReactHookForms = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (data) => {
    console.log(data);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-neutral-900 shadow-lg rounded-xl text-white mt-5">
      <form onSubmit={handleSubmit(submitForm)} className="space-y-5">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            {...register("name", {
              required: "Name can't be empty",
            })}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.name && (
            <span className="text-red-500">{errors.name.message}</span>
          )}
        </div>
        <div className="space-y-2">
          <label htmlFor="age" className="block text-sm font-medium">
            Age
          </label>
          <input
            id="age"
            {...register("age", {
              min: {
                value: 10,
                message: "Minimum Age is 10",
              },
              max: {
                value: 80,
                message: "Maximum Age is 80",
              },
            })}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.age && (
            <span className="text-red-500">{errors.age.message}</span>
          )}
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            {...register("email")}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="password" className="block text-sm font-medium">
            Password
          </label>
          <input
            id="password"
            type="password"
            {...register("password", {
              minLength: {
                value: 5,
                message: "Minimum length of password is 5",
              },
              maxLength: {
                value: 20,
                message: "Maximum length of password is 20",
              },
            })}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.password && (
            <span className="text-red-500">{errors.password.message}</span>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ReactHookForms;
