import { Button, Checkbox, DatePicker, DateRangePicker, Input, Radio, RadioGroup, Select, SelectItem, Switch, Textarea, TimeInput } from "@nextui-org/react";
import type { ActionFunctionArgs, MetaFunction } from "@remix-run/node";
import {  Form, redirect } from "@remix-run/react";
import { ChangeEvent, useState } from "react";
export const meta: MetaFunction = () => {
  return [
    { title: "Dakika Tisini" },
    { name: "description", content: "Karibu Dakika tisini!" },
  ];
};

export async function action({request}:ActionFunctionArgs){
  
  const formData = await request.formData();
  console.log(Object.fromEntries(formData))
  return redirect("/");  
}

export default function Index() {
  const[isChecked, setIsChecked] = useState<string>("false");
  function switchChange(event: ChangeEvent<HTMLInputElement>): void {
    console.log(event.target.checked);
    setIsChecked(event.target.checked.toString());
  }

  return (
    <div className=" flex flex-col justify-center items-center min-h-screen font-sans p-4 bg-green-500">
      <h1 className="text-3xl mb-2">Welcome to the Django</h1>
      <Form method="post" className="flex flex-col gap-2 w-[400px]">
            <Input label="Name" name="name" placeholder="Enter your name" type="text" isRequired  validationBehavior={"native"} />
            <DatePicker name="birthDate" label="Birth date" className="min-w-[284px]" isRequired  validationBehavior={"native"}/>
            <TimeInput label="Birth Time" name="birthTime" isRequired validationBehavior={"native"}/>
            <Input label="Email" name="email" placeholder="Enter your email" type="email" isRequired validationBehavior={"native"}/>
            <Select variant={"flat"} name="gender" label="Select an you gender" className="min-w-xs" isRequired required >
                <SelectItem key={"Male"}>Male</SelectItem>
                <SelectItem key={"Female"}>Female</SelectItem>
            </Select>
            <RadioGroup name={"city"} label="Select your favorite city" className="bg-white rounded-md p-2" isRequired validationBehavior={"native"} >
                <Radio value="buenos-aires">Buenos Aires</Radio>
                <Radio value="sydney">Sydney</Radio>
                <Radio value="san-francisco">San Francisco</Radio>
                <Radio value="london">London</Radio>
                <Radio value="tokyo">Tokyo</Radio>
            </RadioGroup>
            <DateRangePicker startName="start" endName="end" label="Stay duration" className="min-w-xs" isRequired validationBehavior={"native"}/>
            <Textarea
              name="message"
              label="Additional Message"
              placeholder="Enter some words here"
              isRequired 
              validationBehavior={"native"}
            />
            <Switch name="isAccepted" onChange={switchChange} value={isChecked}>Accept T&C</Switch>
            <Button color="primary" type="submit">Save Changes</Button>
      </Form>
    </div>
  );
}
