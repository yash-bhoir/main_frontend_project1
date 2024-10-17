import { useState } from "react";
import { z } from "zod";

// Define Zod schema for form validation
const formSchema = z.object({
  firstName: z.string().min(1, "First Name is required"),
  lastName: z.string().min(1, "Last Name is required"),
  bloodGroup: z.string().min(1, "Blood Group is required"),
  birthDate: z.string().min(1, "Birth Date is required"),
  gender: z.enum(["Male", "Female", "Other"], { required_error: "Gender is required" }),
  phoneNumber: z.string().regex(/^\d+$/, "Phone Number must be numeric"),
  streetAddress: z.string().min(1, "Street Address is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().optional(),
  postalCode: z.string().min(1, "Postal Code is required"),
  weight: z.number().min(1, "Weight must be greater than 0"),
  donatedPreviously: z.boolean().optional(),
  lastDonation: z.string().optional(),
  diseases: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const AddInfo = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    bloodGroup: "",
    birthDate: "",
    gender: "Male",
    phoneNumber: "",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    weight: 0,
    donatedPreviously: false,
    lastDonation: "",
    diseases: "",
  });

  const [errors, setErrors] = useState<z.ZodError<FormData> | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({ ...formData, [name]: checked });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = formSchema.safeParse(formData);
    if (!validation.success) {
      setErrors(validation.error);
    } else {
      setErrors(null);
      console.log(formData);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-black text-white">
      <div className="w-full md:w-1/2 p-8 bg-gray-900 rounded-xl shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex space-x-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-1/2 p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors?.formErrors?.fieldErrors.firstName && (
              <span className="text-red-500">{errors.formErrors.fieldErrors.firstName}</span>
            )}
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-1/2 p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors?.formErrors?.fieldErrors.lastName && (
              <span className="text-red-500">{errors.formErrors.fieldErrors.lastName}</span>
            )}
          </div>

          <input
            type="text"
            name="bloodGroup"
            placeholder="Blood Group"
            value={formData.bloodGroup}
            onChange={handleChange}
            className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors?.formErrors?.fieldErrors.bloodGroup && (
            <span className="text-red-500">{errors.formErrors.fieldErrors.bloodGroup}</span>
          )}

          <input
            type="date"
            name="birthDate"
            placeholder="Birth Date"
            value={formData.birthDate}
            onChange={handleChange}
            className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors?.formErrors?.fieldErrors.birthDate && (
            <span className="text-red-500">{errors.formErrors.fieldErrors.birthDate}</span>
          )}

          <div className="flex space-x-4">
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-1/2 p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {errors?.formErrors?.fieldErrors.gender && (
              <span className="text-red-500">{errors.formErrors.fieldErrors.gender}</span>
            )}

            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-1/2 p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors?.formErrors?.fieldErrors.phoneNumber && (
              <span className="text-red-500">{errors.formErrors.fieldErrors.phoneNumber}</span>
            )}
          </div>

          <input
            type="text"
            name="streetAddress"
            placeholder="Street Address"
            value={formData.streetAddress}
            onChange={handleChange}
            className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors?.formErrors?.fieldErrors.streetAddress && (
            <span className="text-red-500">{errors.formErrors.fieldErrors.streetAddress}</span>
          )}

          <div className="flex space-x-4">
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              className="w-1/2 p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors?.formErrors?.fieldErrors.city && (
              <span className="text-red-500">{errors.formErrors.fieldErrors.city}</span>
            )}

            <input
              type="text"
              name="state"
              placeholder="State"
              value={formData.state}
              onChange={handleChange}
              className="w-1/2 p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors?.formErrors?.fieldErrors.state && (
              <span className="text-red-500">{errors.formErrors.fieldErrors.state}</span>
            )}
          </div>

          <input
            type="text"
            name="postalCode"
            placeholder="Postal Code"
            value={formData.postalCode}
            onChange={handleChange}
            className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors?.formErrors?.fieldErrors.postalCode && (
            <span className="text-red-500">{errors.formErrors.fieldErrors.postalCode}</span>
          )}

          <input
            type="number"
            name="weight"
            placeholder="Weight (kg)"
            value={formData.weight}
            onChange={handleChange}
            className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors?.formErrors?.fieldErrors.weight && (
            <span className="text-red-500">{errors.formErrors.fieldErrors.weight}</span>
          )}

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="donatedPreviously"
              checked={formData.donatedPreviously}
              onChange={handleCheckboxChange}
              className="bg-gray-800 rounded-lg"
            />
            <label htmlFor="donatedPreviously">Have you donated blood previously?</label>
          </div>

          {formData.donatedPreviously && (
            <input
              type="date"
              name="lastDonation"
              placeholder="Last Donation Date"
              value={formData.lastDonation}
              onChange={handleChange}
              className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          )}

          <textarea
            name="diseases"
            placeholder="Any diseases or health conditions?"
            value={formData.diseases}
            onChange={handleChange}
            className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>

          <button
            type="submit"
            className="w-full py-3 bg-blue-500 rounded-lg text-white hover:bg-blue-600 transition-colors"
          >
            Submit Form
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddInfo;
