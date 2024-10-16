import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { useForm } from 'react-hook-form';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { Input } from '../ui/input';
import { Form } from '../ui/form';
import { Label } from '../ui/label';
import { Card } from '../ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from '@/hooks/use-toast';
import { Checkbox } from "@/components/ui/checkbox"; // Import your Checkbox component

const FormSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  bloodGroup: z.string().min(1, 'Blood group is required'),
  birthDate: z.date().refine(date => date < new Date(), 'Birth date must be in the past'),
  gender: z.string().min(1, 'Gender is required'),
  phoneNumber: z.string().min(1, 'Phone number is required'),
  streetAddress: z.string().min(1, 'Street address is required'),
  city: z.string().min(1, 'City is required'),
  state: z.string().optional(),
  postalCode: z.string().min(1, 'Postal code is required'),
  weight: z.number().positive('Weight must be a positive number'),
  donatedPreviously: z.boolean().optional(),
  lastDonation: z.date().optional(),
  diseases: z.string().optional(),
});

interface FormData {
  firstName: string;
  lastName: string;
  bloodGroup: string;
  birthDate: Date;
  gender: string;
  phoneNumber: string;
  streetAddress: string;
  city: string;
  state?: string;
  postalCode: string;
  weight: number;
  donatedPreviously?: boolean;
  lastDonation?: Date;
  diseases?: string;
}

const AddInfo: React.FC = () => {
  const [date, setDate] = React.useState<Date>()

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    toast({
      title: 'Form Submitted',
      description: JSON.stringify(data, null, 2),
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <Card title="Add Information" className='px-5 w-[850px] mt-6 mb-6'>
        <Form onSubmit={handleSubmit(onSubmit)} className="space-y-6 ">

          <div className="flex space-x-4 mt-8">
            <div className="flex-1">
              <Label htmlFor="firstName">First Name*</Label>
              <Input
                id="firstName"
                {...register('firstName')}
                className="mt-1"
              />
              {errors.firstName && <span className="text-red-500">{errors.firstName.message}</span>}
            </div>
            <div className="flex-1 ">
              <Label htmlFor="lastName">Last Name*</Label>
              <Input
                id="lastName"
                {...register('lastName')}
                className="mt-1"
              />
              {errors.lastName && <span className="text-red-500">{errors.lastName.message}</span>}
            </div>
          </div>

          {/* Blood Group and Birth Date in one row */}
          <div className="flex space-x-4 mt-5">
            <div className="flex-1">
              <Label htmlFor="bloodGroup">Blood Group*</Label>
              <Select
                onValueChange={(value) => register('bloodGroup').onChange(value)}
                defaultValue=""
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Blood Group" />
                </SelectTrigger>
                <SelectContent>
                  {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map(group => (
                    <SelectItem key={group} value={group}>{group}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.bloodGroup && <span className="text-red-500">{errors.bloodGroup.message}</span>}
            </div>

            <div className="flex-1 mt-6">
            <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[280px] justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Birth Date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              {errors.birthDate && <span className="text-red-500">{errors.birthDate.message}</span>}
            </div>
          </div>

          {/* Gender and Phone Number in one row */}
          <div className="flex space-x-4 mt-5">
            <div className="flex-1">
              <Label htmlFor="gender">Gender*</Label>
              <Select
                onValueChange={(value) => register('gender').onChange(value)}
                defaultValue=""
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Male">Male</SelectItem>
                  <SelectItem value="Female">Female</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
              {errors.gender && <span className="text-red-500">{errors.gender.message}</span>}
            </div>

            <div className="flex-1">
              <Label htmlFor="phoneNumber">Phone Number*</Label>
              <Input
                id="phoneNumber"
                {...register('phoneNumber')}
                className="mt-1"
              />
              {errors.phoneNumber && <span className="text-red-500">{errors.phoneNumber.message}</span>}
            </div>
          </div>

          {/* Street Address and City in one row */}
          <div className="flex space-x-4 mt-5">
            <div className="flex-1">
              <Label htmlFor="streetAddress">Street Address*</Label>
              <Input
                id="streetAddress"
                {...register('streetAddress')}
                className="mt-1"
              />
              {errors.streetAddress && <span className="text-red-500">{errors.streetAddress.message}</span>}
            </div>

            <div className="flex-1">
              <Label htmlFor="city">City*</Label>
              <Input
                id="city"
                {...register('city')}
                className="mt-1"
              />
              {errors.city && <span className="text-red-500">{errors.city.message}</span>}
            </div>
          </div>

          {/* State and Postal Code in one row */}
          <div className="flex space-x-4 mt-5">
            <div className="flex-1">
              <Label htmlFor="state">State</Label>
              <Input
                id="state"
                {...register('state')}
                className="mt-1"
              />
            </div>

            <div className="flex-1">
              <Label htmlFor="postalCode">Postal Code*</Label>
              <Input
                id="postalCode"
                {...register('postalCode')}
                className="mt-1"
              />
              {errors.postalCode && <span className="text-red-500">{errors.postalCode.message}</span>}
            </div>
          </div>

          {/* Weight and Donated Previously in one row */}
          <div className="flex space-x-4 mt-5 ">
            <div className="flex-1">
              <Label htmlFor="weight">Weight (kg)*</Label>
              <Input
                id="weight"
                type="number"
                {...register('weight')}
                className="mt-1"
              />
              {errors.weight && <span className="text-red-500">{errors.weight.message}</span>}
            </div>

            {/* CheckboxWithText for terms and conditions */}
            <div className="items-top flex space-x-2 mt-5">
              <Checkbox id="terms1" />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="terms1"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Donated Previously:
                </label>
              </div>
            </div>
          </div>

          {/* Last Donation and Diseases in one row */}
          <div className="flex space-x-4 mt-5">
            <div className="flex-1 mt-6">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[280px] justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Last Donation</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="flex-1">
              <Label htmlFor="diseases">Diseases</Label>
              <Textarea
                id="diseases"
                {...register('diseases')}
                className="mt-1"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <Button type="submit" className="w-[200px] mt-4 mb-4">
              Submit
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default AddInfo;
