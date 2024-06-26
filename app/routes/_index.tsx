import { Button, Checkbox, DatePicker, DateRangePicker, Input, Radio, RadioGroup, Select, SelectItem, Textarea, TimeInput } from "@nextui-org/react";
import type { MetaFunction } from "@remix-run/node";
import { ClientActionFunctionArgs, Form } from "@remix-run/react";
export const meta: MetaFunction = () => {
  return [
    { title: "Dakika Tisini" },
    { name: "description", content: "Karibu Dakika tisini!" },
  ];
};

export async function clientAction({request}:ClientActionFunctionArgs) {
  const formData = await request.formData();
  console.log(Object.fromEntries(formData))
  return null;  
}

export default function Index() {
  return (
    <div className=" flex flex-col justify-center items-center min-h-screen font-sans p-4 bg-green-500">
      <h1 className="text-3xl mb-2">Welcome to the Django</h1>
      <Form method="post" className="flex flex-col gap-2 w-[400px]">
            <Input label="Name" name="name" placeholder="Enter your name" type="text" isRequired ={true} />
            <DatePicker name="birthDate" label="Birth date" className="min-w-[284px]"/>
            <TimeInput label="Birth Time" name="birthTime" isRequired={true} />
            <Input label="Email" name="email" placeholder="Enter your email" type="email" isRequired={true} />
            <Select variant={"flat"} name="gender" label="Select an you gender" className="min-w-xs" isRequired={true} >
                <SelectItem key={"Male"}>Male</SelectItem>
                <SelectItem key={"Female"}>Female</SelectItem>
            </Select>
            <RadioGroup name={"city"} label="Select your favorite city" className="bg-white rounded-md p-2" isRequired={true}>
                <Radio value="buenos-aires">Buenos Aires</Radio>
                <Radio value="sydney">Sydney</Radio>
                <Radio value="san-francisco">San Francisco</Radio>
                <Radio value="london">London</Radio>
                <Radio value="tokyo">Tokyo</Radio>
            </RadioGroup>
            <DateRangePicker label="Stay duration" className="min-w-xs" isRequired={true}/>
            <Textarea
              name="message"
              label="Additional Message"
              placeholder="Enter some words here"
            />
            <Checkbox name="isAccepted">Accept T&C</Checkbox>
            <Button color="primary" type="submit">Save Changes</Button>
      </Form>
    </div>
  );
}
