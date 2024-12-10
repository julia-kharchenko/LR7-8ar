import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { Form } from "../ui/form";
import FormInput from "./FormInput";
import { createUser } from "@/lib/actions";
import { useMutation, useQueryClient } from "react-query";

const CreateUserForm = () => {
  const queryClient = useQueryClient();

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      age: 18,
    },
  });

  const createMutation = useMutation(createUser, {
    onSuccess: () => {
      form.reset();
      queryClient.invalidateQueries("users");
    },
  });

  const handleCreateUserSubmit = (data) => {
    createMutation.mutate(data);
  };

  return (
    <Card className="max-w-full">
      <CardHeader>
        <CardTitle>Create User</CardTitle>
        <CardDescription>Create a new user</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleCreateUserSubmit)}
            className="space-y-4"
            id="create-user-form"
          >
            <FormInput name="name" control={form.control} label="Name" />
            <FormInput
              name="email"
              type="email"
              control={form.control}
              label="Email"
            />
            <FormInput
              name={"age"}
              type="number"
              control={form.control}
              label="Age"
              otherProps={{ min: 18, max: 100 }}
            />
          </form>
        </Form>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full"
          form="create-user-form"
          disabled={createMutation.isLoading}
        >
          Create
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CreateUserForm;
