import { useState } from "react";
import { z } from "zod";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; 

// Define Zod schema for validation
const bloodRequestSchema = z.object({
  bloodTypeId: z.string().min(1, "Blood Type is required"),
  quantity: z.number().min(1, "Quantity is required").positive(),
  request_date: z.string().min(1, "Request Date is required"),
  required_by: z.string().min(1, "Requester Name is required"),
  delivery_address: z.string().min(1, "Delivery Address is required"),
  contact_number: z.string().min(1, "Contact Number is required"),
  reason_for_request: z.string().min(1, "Reason for Request is required"),
  hospital_name: z.string().min(1, "Hospital Name is required"),
  urgent: z.boolean().optional(),
});

type BloodRequestData = z.infer<typeof bloodRequestSchema>;

const BloodRequest = () => {
  const [formData, setFormData] = useState<BloodRequestData>({
    bloodTypeId: "",
    quantity: 1,
    request_date: "",
    required_by: "",
    delivery_address: "",
    contact_number: "",
    reason_for_request: "",
    hospital_name: "",
    urgent: false,
  });

  const [errors, setErrors] = useState<z.ZodError<BloodRequestData> | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({ ...formData, [name]: checked });
  };

  const handleDateChange = (date: Date | null, name: string) => {
    setFormData({ ...formData, [name]: date ? date.toISOString().split("T")[0] : "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = bloodRequestSchema.safeParse(formData);
    if (!validation.success) {
      setErrors(validation.error);
    } else {
      setErrors(null);
      console.log(formData);
      // Submit form data
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-black text-white">
      <div className="w-full md:w-1/2 p-8 bg-gray-900 rounded-xl shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          <select
            name="bloodTypeId"
            value={formData.bloodTypeId}
            onChange={handleChange}
            className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select Blood Type</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
          {errors?.formErrors?.fieldErrors.bloodTypeId && (
            <span className="text-red-500">{errors.formErrors.fieldErrors.bloodTypeId}</span>
          )}

          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            min="1"
          />
          {errors?.formErrors?.fieldErrors.quantity && (
            <span className="text-red-500">{errors.formErrors.fieldErrors.quantity}</span>
          )}

          <div className="flex space-x-4">
            <div className="w-full">
              <DatePicker
                selected={formData.request_date ? new Date(formData.request_date) : null}
                onChange={(date) => handleDateChange(date, "request_date")}
                placeholderText="Request Date"
                className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors?.formErrors?.fieldErrors.request_date && (
                <span className="text-red-500">{errors.formErrors.fieldErrors.request_date}</span>
              )}
            </div>

            <div className="w-full">
              <input
                type="text"
                name="required_by"
                placeholder="Requester Name"
                value={formData.required_by}
                onChange={handleChange}
                className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors?.formErrors?.fieldErrors.required_by && (
                <span className="text-red-500">{errors.formErrors.fieldErrors.required_by}</span>
              )}
            </div>
          </div>

          <input
            type="text"
            name="delivery_address"
            placeholder="Delivery Address"
            value={formData.delivery_address}
            onChange={handleChange}
            className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors?.formErrors?.fieldErrors.delivery_address && (
            <span className="text-red-500">{errors.formErrors.fieldErrors.delivery_address}</span>
          )}

          <input
            type="text"
            name="contact_number"
            placeholder="Contact Number"
            value={formData.contact_number}
            onChange={handleChange}
            className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors?.formErrors?.fieldErrors.contact_number && (
            <span className="text-red-500">{errors.formErrors.fieldErrors.contact_number}</span>
          )}

          <input
            type="text"
            name="reason_for_request"
            placeholder="Reason for Request"
            value={formData.reason_for_request}
            onChange={handleChange}
            className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors?.formErrors?.fieldErrors.reason_for_request && (
            <span className="text-red-500">{errors.formErrors.fieldErrors.reason_for_request}</span>
          )}

          <input
            type="text"
            name="hospital_name"
            placeholder="Hospital Name"
            value={formData.hospital_name}
            onChange={handleChange}
            className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors?.formErrors?.fieldErrors.hospital_name && (
            <span className="text-red-500">{errors.formErrors.fieldErrors.hospital_name}</span>
          )}

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="urgent"
              checked={formData.urgent}
              onChange={handleCheckboxChange}
              className="bg-gray-800 rounded-lg"
            />
            <label htmlFor="urgent">Is this request urgent?</label>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-500 rounded-lg text-white hover:bg-blue-600 transition-colors"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default BloodRequest;
