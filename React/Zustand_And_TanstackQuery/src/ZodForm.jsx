import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const formSchema = z
  .object({
    name: z
      .string()
      .min(3, "Minimum length should be 3")
      .max(20, "Maximum length should be 20"),
    age: z.coerce
      .number()
      .min(10, "Minimum age should be 10")
      .max(80, "Maximum age should be 80"),
    password: z
      .string()
      .min(5, "Minimum length should be 5")
      .max(20, "Maximum length should be 20"),
    confirmPassword: z.string(),
    email: z.email("Invalid Email"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password don't match",
    path: ["confirmPassword"],
  });

const ZodForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

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
            {...register("name")}
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
            {...register("age")}
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
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
        </div>
        <div className="space-y-2">
          <label htmlFor="password" className="block text-sm font-medium">
            Password
          </label>
          <input
            id="password"
            type="password"
            {...register("password")}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.password && (
            <span className="text-red-500">{errors.password.message}</span>
          )}
        </div>
        <div className="space-y-2">
          <label htmlFor="cnf-password" className="block text-sm font-medium">
            Confirm Password
          </label>
          <input
            id="cnf-password"
            type="password"
            {...register("confirmPassword")}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.confirmPassword && (
            <span className="text-red-500">
              {errors.confirmPassword.message}
            </span>
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

export default ZodForm;
